import { getDb } from "@/lib/db";
import { committee, excoMember, member } from "@/db/schema";
import { desc, eq } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";

interface ExcoResponseMember {
  name: string;
  role: string;
  linkedin: string;
  avatarSRC: string;
}

export async function GET(
  request: NextRequest,
  props: { params: Promise<{ year: string }> },
) {
  const db = getDb();

  const yearsRows = await db
    .selectDistinct({ year: committee.year })
    .from(committee)
    .orderBy(desc(committee.year));

  const years = yearsRows.map((row) => String(row.year));
  const yearParam = (await props.params).year;
  const fallbackYear = years[0] ?? "";
  const targetYear = yearParam ?? fallbackYear;

  if (!targetYear) {
    return NextResponse.json(
      { message: "No EXCO years available" },
      { status: 404 },
    );
  }

  const yearNumber = Number(targetYear);
  if (!Number.isInteger(yearNumber)) {
    return NextResponse.json(
      { message: "Invalid year parameter" },
      { status: 400 },
    );
  }

  const rows = await db
    .select({
      body: committee.body,
      role: excoMember.role,
      sortKey: excoMember.sortKey,
      name: member.name,
      linkedin: member.linkedin,
      avatarSRC: member.image,
    })
    .from(excoMember)
    .innerJoin(committee, eq(excoMember.committeeId, committee.id))
    .innerJoin(member, eq(excoMember.memberId, member.id))
    .where(eq(committee.year, yearNumber))
    .orderBy(committee.body, excoMember.sortKey);

  const committees: {
    mainBody: ExcoResponseMember[];
    studentChapter: ExcoResponseMember[];
  } = {
    mainBody: [],
    studentChapter: [],
  };

  rows.forEach((row) => {
    const memberData: ExcoResponseMember = {
      name: String(row.name ?? ""),
      role: String(row.role ?? ""),
      linkedin: String(row.linkedin ?? ""),
      avatarSRC: String(row.avatarSRC ?? ""),
    };

    if (row.body === "main") {
      committees.mainBody.push(memberData);
      return;
    }

    committees.studentChapter.push(memberData);
  });

  return NextResponse.json({
    year: String(yearNumber),
    years,
    committees,
  });
}
