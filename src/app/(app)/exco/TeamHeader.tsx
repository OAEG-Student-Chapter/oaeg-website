"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { routesMap } from "@/lib/routes";
import { Button } from "@/components/ui/button";

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
    <div>
      <div className="flex h-20 h-8 w-full items-center justify-center text-[0.8em] md:h-8 md:text-base">
        <select
          onChange={handleYearChange}
          value={year}
          className="border-input bg-background ring-offset-background focus-visible:ring-ring h-9 min-w-[250px] rounded-md border px-3 py-2 text-sm shadow-sm focus-visible:outline-none focus-visible:ring-1"
          aria-label="Select board year"
        >
          {years.map((yearOption) => (
            <option key={yearOption} value={yearOption}>
              {`The Board of Officials ${yearOption}`}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-[3%] mt-[2%] flex h-10 w-full justify-center gap-2 md:ml-[20%] md:w-[60%]">
        <Button
          variant={isMainBody ? "default" : "outline"}
          size="sm"
          onClick={() => handleSwitchChange(true)}
          type="button"
        >
          Main Body
        </Button>
        <Button
          variant={isMainBody ? "outline" : "default"}
          size="sm"
          onClick={() => handleSwitchChange(false)}
          type="button"
        >
          Student Chapter
        </Button>
      </div>

      {/* Description Component */}
      {/* <p className="text-base md:text-[1.1em] text-center w-[80%] md:w-[70%] ml-[10%] md:ml-[15%] mb-8 md:mb-[3%]"> */}
      {/*  Description goes here. Lorem ipsium elit. Aliquam maximus, tellus vel interdum tincidunt, */}
      {/*  tortor libero vestibulum dui, eu dictum massa ex in ante */}
      {/* </p> */}
    </div>
  );
}
