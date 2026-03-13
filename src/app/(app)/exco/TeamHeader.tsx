"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { routesMap } from "@/lib/routes";
import { Button } from "@/components/ui/button";
import textTheme from "@/lib/fonts";

export default function TeamHeader({
  currentYear,
  currentBody,
  years,
}: {
  currentYear: string;
  currentBody: string;
  years: string[];
}) {
  const router = useRouter();

  const fallbackYear = years[0] ?? "";
  const initialYear = currentYear || fallbackYear;
  const initialIsMainBody = currentBody ? currentBody === "mainBody" : true;
  const [year, setYear] = useState(initialYear);
  const [isMainBody, setIsMainBody] = useState(initialIsMainBody);

  useEffect(() => {
    setYear(currentYear || fallbackYear);
  }, [currentYear, fallbackYear]);

  useEffect(() => {
    setIsMainBody(currentBody === "mainBody");
  }, [currentBody]);

  const handleSwitchChange = (value: boolean): void => {
    setIsMainBody(value);
    const selectedYear = year || currentYear || fallbackYear;
    router.push(
      `${routesMap.team.path}/?body=${value ? "mainBody" : "studentChapter"}&year=${selectedYear}`,
    );
  };

  const handleYearChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedYear = event.target.value;
    setYear(selectedYear);
    router.push(
      `${routesMap.team.path}/?body=${isMainBody ? "mainBody" : "studentChapter"}&year=${selectedYear}`,
    );
  };

  return (
    <div className="mb-8 mt-4 flex w-full flex-col items-center justify-between gap-4 md:flex-row md:gap-6">
      <div className="relative w-full min-w-[280px] md:w-auto md:min-w-[320px]">
        <select
          onChange={handleYearChange}
          value={year}
          className={`h-12 w-full cursor-pointer appearance-none rounded-lg border-2 border-theme-maroon/20 bg-white px-4 py-2 pr-10 text-sm font-medium text-black shadow-sm transition-all hover:border-theme-maroon/50 focus:border-theme-maroon focus:outline-none focus:ring-4 focus:ring-theme-maroon/10 md:text-base ${textTheme.body.className}`}
          aria-label="Select board year"
        >
          {years.map((yearOption) => (
            <option key={yearOption} value={yearOption} className={textTheme.body.className}>
              {`The Board of Officials ${yearOption}`}
            </option>
          ))}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4 text-theme-maroon">
          <svg
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>

      <div className="flex w-full flex-nowrap justify-center gap-3 md:w-auto">
        <Button
          variant={isMainBody ? "default" : "outline"}
          onClick={() => handleSwitchChange(true)}
          type="button"
          className={
            "h-12 flex-1 md:flex-none md:px-8 text-sm md:text-base font-medium shadow-sm transition-all " +
            (isMainBody
              ? "bg-primary text-black hover:bg-theme-yellow hover:text-black "
              : "border-2 border-theme-maroon/20 text-theme-maroon hover:border-theme-maroon/50 hover:bg-primary hover:text-black ") +
            textTheme.body.className
          }
        >
          Main Body
        </Button>
        <Button
          variant={isMainBody ? "outline" : "default"}
          onClick={() => handleSwitchChange(false)}
          type="button"
          className={
            "h-12 flex-1 md:flex-none md:px-8 text-sm md:text-base font-medium shadow-sm transition-all " +
            (!isMainBody
              ? "bg-primary text-black hover:bg-theme-yellow hover:text-black "
              : "border-2 border-theme-maroon/20 text-theme-maroon hover:border-theme-maroon/50 hover:bg-primary hover:text-black ") +
            textTheme.body.className
          }
        >
          Student Chapter
        </Button>
      </div>
    </div>
  );
}
