import React, { useState } from 'react';
import Styles from './TeamHeader.module.css';

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
    <div className={Styles.switchSelector}>
      {options.map((option, index) => (
        <div
          key={index}
          className={`${Styles.option} cursor-pointer`}
          style={{
            backgroundColor: index === selectedIndex ? 'var(--vt-c-grey-light)' : 'var(--vt-c-white)',
            color: index === selectedIndex ? option.selectedFontColor : 'var(--vt-c-grey-dark)'
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
