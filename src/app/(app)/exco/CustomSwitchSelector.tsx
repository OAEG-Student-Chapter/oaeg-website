import React, { useState } from "react";

interface Option {
  label: string;
  value: boolean;
  selectedFontColor: string;
}

interface CustomSwitchSelectorProps {
  options: Option[];
  initialSelectedIndex: number;
  onChange: (value: boolean) => void;
}

const CustomSwitchSelector: React.FC<CustomSwitchSelectorProps> = ({
  options,
  initialSelectedIndex,
  onChange,
}) => {
  const [selectedIndex, setSelectedIndex] =
    useState<number>(initialSelectedIndex);

  const handleOptionClick = (index: number) => {
    setSelectedIndex(index);
    onChange(options[index].value);
  };

  return (
    <div className="flex flex-row justify-center">
      {options.map((option, index) => (
        <div
          key={index}
          className="cursor-pointer p-2 pb-[0.2em] pt-[0.2em] text-[1.1em] transition-colors md:text-[1.5em]"
          style={{
            backgroundColor: index === selectedIndex ? "#DDDDDD" : "#ffffff",
            color:
              index === selectedIndex ? option.selectedFontColor : "#BBBBBB",
          }}
          onClick={() => handleOptionClick(index)}
        >
          {option.label}
        </div>
      ))}
    </div>
  );
};

export default CustomSwitchSelector;
