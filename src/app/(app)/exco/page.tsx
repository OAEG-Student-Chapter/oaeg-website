"use client";

import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import Team from "./Team";
import TeamHeader from "./TeamHeader";
interface MemberObject {
  name: string;
  role: string;
  linkedin: string;
  avatarSRC: string;
}

interface YearlyData {
  mainBody: MemberObject[];
  studentChapter: MemberObject[];
}

interface ExcoApiResponse {
  year: string;
  years: string[];
  committees: YearlyData;
}

function ExcoContent() {
  const searchParams = useSearchParams();
  const [years, setYears] = useState<string[]>([]);
  const [currentYear, setCurrentYear] = useState<string>("");
  const [committees, setCommittees] = useState<YearlyData>({
    mainBody: [],
    studentChapter: [],
  });
  const [isLoading, setIsLoading] = useState(true);

  const body =
    searchParams.get("body") === "studentChapter"
      ? "studentChapter"
      : "mainBody";
  const requestedYear = searchParams.get("year");

  useEffect(() => {
    let isMounted = true;

    const fetchExcoMembers = async () => {
      setIsLoading(true);

      try {
        const yearQuery = requestedYear ? `?year=${requestedYear}` : "";
        const response = await fetch(`/api/exco${yearQuery}`);
        if (!response.ok) {
          throw new Error("Failed to load EXCO members");
        }

        const data = (await response.json()) as ExcoApiResponse;
        if (isMounted) {
          setYears(data.years ?? []);
          setCurrentYear(data.year ?? "");
          setCommittees(
            data.committees ?? {
              mainBody: [],
              studentChapter: [],
            },
          );
        }
      } catch {
        if (isMounted) {
          setYears([]);
          setCurrentYear("");
          setCommittees({
            mainBody: [],
            studentChapter: [],
          });
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    fetchExcoMembers();

    return () => {
      isMounted = false;
    };
  }, [requestedYear]);

  return (
    <div className="min-h-screen bg-white py-24 sm:py-12">
      <div className="m-[0_0_3em] md:m-[4%_6%]">
        <div>
          <TeamHeader
            currentYear={currentYear}
            currentBody={body}
            years={years}
          />
        </div>
        <Team
          memberDetailList={isLoading ? [] : committees[body]}
          numberOfColumns={5}
        />
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ExcoContent />
    </Suspense>
  );
}
