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
    <div className="relative min-h-screen">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{ backgroundImage: "url('/images/exco2023.webp')" }}
      >
        <div className="absolute inset-0 bg-black/70 backdrop-blur-[5px]"></div>
      </div>

      <div className="relative z-10 py-16 md:mt-8 md:py-24">
        <div className="container mx-auto max-w-7xl px-4 md:px-8">
          <div className="mb-12 text-center text-white">
            <h1 className="mb-4 text-3xl font-bold tracking-tight md:text-5xl">
              Meet the Team
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-white/80">
              The dedicated executive committee board members leading the guild.
            </p>
          </div>

          <TeamHeader
            currentYear={data.year}
            currentBody={body}
            years={data.years}
          />

          {data.committees[body]?.length > 0 ? (
            <Team memberDetailList={data.committees[body]} numberOfColumns={5} />
          ) : (
            <div className="flex flex-col items-center justify-center py-24 text-center">
              <h3 className="text-xl font-medium text-white">
                No members found
              </h3>
              <p className="mt-2 text-white/60">
                There are no committee members available for this selection yet.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

