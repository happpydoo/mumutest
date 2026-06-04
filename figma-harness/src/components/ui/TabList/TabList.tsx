import { useState } from 'react';
import { Tab } from '../Tab';

export interface TabListProps {
  tabs: string[];
  defaultActiveIndex?: number;
  onChange?: (index: number) => void;
  className?: string;
}

export function TabList({ tabs, defaultActiveIndex = 0, onChange, className }: TabListProps) {
  const [activeIndex, setActiveIndex] = useState(defaultActiveIndex);

  const handleTabClick = (index: number) => {
    setActiveIndex(index);
    onChange?.(index);
  };

  return (
    <div
      role="tablist"
      className={className}
      style={{ display: 'flex', alignItems: 'center' }}
    >
      {tabs.map((label, index) => (
        <Tab
          key={label}
          label={label}
          active={index === activeIndex}
          onClick={() => handleTabClick(index)}
        />
      ))}
    </div>
  );
}
