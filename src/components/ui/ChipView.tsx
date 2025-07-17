import React, { useState } from 'react';

interface ChipItem {
  id: string;
  label: string;
  variant?: 'filled' | 'outlined';
}

interface ChipViewProps {
  items: ChipItem[];
  onChipClick?: (chipId: string) => void;
  allowMultiSelect?: boolean;
  className?: string;
}

const ChipView: React.FC<ChipViewProps> = ({
  items,
  onChipClick,
  allowMultiSelect = false,
  className = ''
}) => {
  const [selectedChips, setSelectedChips] = useState<string[]>([]);

  const handleChipClick = (chipId: string) => {
    let newSelection: string[];
    
    if (allowMultiSelect) {
      newSelection = selectedChips.includes(chipId)
        ? selectedChips.filter(id => id !== chipId)
        : [...selectedChips, chipId];
    } else {
      newSelection = selectedChips.includes(chipId) ? [] : [chipId];
    }
    
    setSelectedChips(newSelection);
    onChipClick?.(chipId);
  };

  return (
    <div className={`flex flex-wrap gap-2 sm:gap-3 ${className}`}>
      {items.map((item) => {
        const isSelected = selectedChips.includes(item.id);
        const isFilled = item.variant === 'filled' || isSelected;
        
        return (
          <button
            key={item.id}
            onClick={() => handleChipClick(item.id)}
            className={`
              px-4 sm:px-5 py-2 sm:py-2.5 
              text-sm sm:text-base 
              font-medium 
              border border-global-3 
              transition-all duration-200 
              focus:outline-none focus:ring-2 focus:ring-global-3 focus:ring-offset-2
              ${isFilled 
                ? 'bg-global-3 text-global-4' :'bg-transparent text-global-3 hover:bg-global-3 hover:text-global-4'
              }
            `.trim().replace(/\s+/g, ' ')}
          >
            {item.label}
          </button>
        );
      })}
    </div>
  );
};

export default ChipView;