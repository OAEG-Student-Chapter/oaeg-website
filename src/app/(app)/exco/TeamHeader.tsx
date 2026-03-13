"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { routesMap } from "@/lib/routes";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
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

  const handleYearChange = (selectedYear: string) => {
    setYear(selectedYear);
    router.push(
      `${routesMap.team.path}/?body=${isMainBody ? "mainBody" : "studentChapter"}&year=${selectedYear}`,
    );
  };

  return (
    <div className="mb-8 flex w-full flex-col items-center justify-between gap-4 md:flex-row md:gap-6">
      <div className="w-full md:w-auto md:min-w-[320px]">
        <Select value={year} onValueChange={handleYearChange}>
          <SelectTrigger 
            className={`h-12 w-full rounded-lg border-2 border-theme-maroon/20 bg-white px-4 py-2 text-sm font-medium text-black shadow-sm transition-all hover:border-theme-maroon/50 focus:border-theme-maroon focus:ring-4 focus:ring-theme-maroon/10 md:text-base ${textTheme.body.className}`}
            aria-label="Select board year"
          >
            <SelectValue placeholder="Select Year" />
          </SelectTrigger>
          <SelectContent className={textTheme.body.className}>
            {years.map((yearOption) => (
              <SelectItem key={yearOption} value={yearOption} className="cursor-pointer">
                {`The Board of Officials ${yearOption}`}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
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
