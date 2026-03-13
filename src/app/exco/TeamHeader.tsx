"use client"
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Dropdown, { Option } from 'react-dropdown';
import 'react-dropdown/style.css';
import CustomSwitchSelector from './CustomSwitchSelector';
import memberDetailList from "./membersDetailList.json";
import {routesMap} from "@/lib/routes";


export default function TeamHeader({currentYear, currentBody}: { 
    currentYear: string,
    currentBody: string
  }) {
  const router = useRouter();
  // to add or remove years, add or remove the year from the json file
  // make sure to add years in descending order in the json file
  const years = Object.keys(memberDetailList).sort((a, b) => parseInt(b) - parseInt(a));
  const yearsTexts = years.map((year) => {
    return `The Board of Officials ${year}`;
  });

  // yearsTexts.length - 1
  const initialYear = currentYear ? `The Board of Officials ${currentYear}` : yearsTexts[0];
  const initialIsMainBody = currentBody ? currentBody == "mainBody" : true;
  const [year, setYear] = useState(initialYear);
  const [isMainBody, setIsMainBody] = useState(initialIsMainBody);

  const options = [
    {
      label: "Main Body",
      value: true,
      selectedFontColor: 'var(--vt-c-black)'
    },
    {
      label: "Student Chapter",
      value: false,
      selectedFontColor: 'var(--vt-c-black)'
    }
  ];

  const handleSwitchChange = (value: boolean): void => {
    setIsMainBody(value);
    router.push(`${routesMap.team.path}/?body=${value ? "mainBody" : "studentChapter"}&year=${year.slice(-4)}`);
  };

  const handleYearChange = (event: Option) => {
    setYear(event.value);
    router.push(`${routesMap.team.path}/?body=${isMainBody ? "mainBody" : "studentChapter"}&year=${event.value.slice(-4)}`);
  };

  return (
    <div>
      {/* Dropdown component */}
      <div className="w-full flex justify-center items-center h-8 md:h-8 h-20 md:text-base text-[0.8em]">
        <Dropdown
          options={yearsTexts}
          onChange={handleYearChange}
          placeholder={`${year}`}
          value={year}
          className="min-w-[250px]"
        />
      </div>

      {/* CustomSwitchSelector component */}
      <div className="h-10 w-full md:w-[60%] md:ml-[20%] mt-[2%] mb-[3%]">
        <CustomSwitchSelector
          options={options}
          initialSelectedIndex={isMainBody ? 0 : 1}
          onChange={handleSwitchChange}
        />
      </div>

      {/* Description Component */}
      {/* <p className="text-base md:text-[1.1em] text-center w-[80%] md:w-[70%] ml-[10%] md:ml-[15%] mb-8 md:mb-[3%]"> */}
      {/*  Description goes here. Lorem ipsium elit. Aliquam maximus, tellus vel interdum tincidunt, */}
      {/*  tortor libero vestibulum dui, eu dictum massa ex in ante */}
      {/* </p> */}

    </div>
  );
}

