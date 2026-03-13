import React, { useState } from 'react';

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
    onChange
  }) => {
  
  const [selectedIndex, setSelectedIndex] = useState<number>(initialSelectedIndex);
  
  const handleOptionClick = (index: number) => {
    setSelectedIndex(index);
    onChange(options[index].value);
  };

  return (
    <div className="flex flex-row justify-center">
      {options.map((option, index) => (
        <div
          key={index}
          className="text-[1.1em] md:text-[1.5em] p-2 pt-[0.2em] pb-[0.2em] cursor-pointer transition-colors"
          style={{
            backgroundColor: index === selectedIndex ? '#DDDDDD' : '#ffffff',
            color: index === selectedIndex ? option.selectedFontColor : '#BBBBBB'
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
