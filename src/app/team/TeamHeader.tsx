"use client"
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Styles from './TeamHeader.module.css';
import Dropdown, { Option } from 'react-dropdown';
import 'react-dropdown/style.css';
import CustomSwitchSelector from './CustomSwitchSelector';
import memberDetailList from "./membersDetailList.json";


export default function TeamHeader({currentYear, currentBody}: { 
    currentYear: string,
    currentBody: string
  }) {
  const router = useRouter();
  // to add or remove years, add or remove the year from the json file
  // make sure to add years in descending order in the json file
  const years = Object.keys(memberDetailList).sort((a, b) => parseInt(b) - parseInt(a));
  const yearsTexts = years.map((year) => {
    return "The Board of Offcials "+year;
  });

  // yearsTexts.length - 1
  const initialYear = currentYear ? "The Board of Offcials "+currentYear : yearsTexts[0];
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
    router.push(`/team/?body=${value ? "mainBody" : "studentChapter"}&year=${year.slice(-4)}`);
  };

  const handleYearChange = (event: Option) => {
    setYear(event.value);
    router.push(`/team/?body=${isMainBody ? "mainBody" : "studentChapter"}&year=${event.value.slice(-4)}`);
  };

  return (
    <div>
      {/* Dropdown component */}
      <div className={Styles.dropDownWrapper}>
        <Dropdown
          options={yearsTexts}
          onChange={handleYearChange}
          placeholder={`${year}`}
          value={year}
          className={Styles.dropDown}
        />
      </div>

      {/* CustomSwitchSelector component */}
      <div className={Styles.switchSelectorWrapper}>
        <CustomSwitchSelector
          options={options}
          initialSelectedIndex={isMainBody ? 0 : 1}
          onChange={handleSwitchChange}
        />
      </div>

      {/* Description Component */}
      {/*<p className={Styles.description}>*/}
      {/*  Description goes here. Lorem ipsium elit. Aliquam maximus, tellus vel interdum tincidunt,*/}
      {/*  tortor libero vestibulum dui, eu dictum massa ex in ante*/}
      {/*</p>*/}

    </div>
  );
}

