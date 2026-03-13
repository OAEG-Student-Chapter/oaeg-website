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
    <div className="min-h-screen bg-white py-16 md:mt-8 md:py-24">
      <div className="container mx-auto max-w-7xl px-4 md:px-8">
        <TeamHeader
          currentYear={currentYear}
          currentBody={body}
          years={years}
        />

        {isLoading ? (
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 md:gap-6 lg:grid-cols-5">
            {Array.from({ length: 10 }).map((_, i) => (
              <div
                key={i}
                className="aspect-[3/4] w-full animate-pulse rounded-xl bg-gray-200"
              />
            ))}
          </div>
        ) : committees[body]?.length > 0 ? (
          <Team memberDetailList={committees[body]} numberOfColumns={5} />
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

export default function Page() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ExcoContent />
    </Suspense>
  );
}
