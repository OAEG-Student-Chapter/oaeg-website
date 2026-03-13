import { getDb } from "@/lib/db";
import { committee, excoMember, member } from "@/db/schema";
import { desc, eq } from "drizzle-orm";
import Team from "./Team";
import TeamHeader from "./TeamHeader";

interface ExcoResponseMember {
  name: string;
  role: string;
  linkedin: string;
  avatarSRC: string;
}

interface YearlyData {
  mainBody: ExcoResponseMember[];
  studentChapter: ExcoResponseMember[];
}

async function getExcoData(requestedYear: string | undefined | null) {
  const db = getDb();

  const yearsRows = await db
    .selectDistinct({ year: committee.year })
    .from(committee)
    .orderBy(desc(committee.year));

  const years = yearsRows.map((row) => String(row.year));
  const fallbackYear = years[0] ?? "";
  const targetYear = requestedYear ?? fallbackYear;

  if (!targetYear) {
    return {
      year: "",
      years: [],
      committees: { mainBody: [], studentChapter: [] },
    };
  }

  const yearNumber = Number(targetYear);
  if (!Number.isInteger(yearNumber)) {
    return {
      year: targetYear,
      years,
      committees: { mainBody: [], studentChapter: [] },
    };
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

  const committees: YearlyData = {
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

  return {
    year: String(yearNumber),
    years,
    committees,
  };
}

export default async function Page(props: {
  searchParams: Promise<{ body?: string; year?: string }>;
}) {
  const searchParams = await props.searchParams;
  const body =
    searchParams.body === "studentChapter" ? "studentChapter" : "mainBody";
  const requestedYear = searchParams.year;

  const data = await getExcoData(requestedYear);

  return (
    <div className="min-h-screen bg-white py-16 md:mt-8 md:py-24">
      <div className="container mx-auto max-w-7xl px-4 md:px-8">
        <TeamHeader
          currentYear={data.year}
          currentBody={body}
          years={data.years}
        />

        {data.committees[body]?.length > 0 ? (
          <Team memberDetailList={data.committees[body]} numberOfColumns={5} />
        ) : (
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <h3 className="text-xl font-medium text-gray-900">
              No members found
            </h3>
            <p className="mt-2 text-gray-500">
              There are no committee members available for this selection yet.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

