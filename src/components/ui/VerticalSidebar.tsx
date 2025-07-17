import React from 'react';

interface VerticalSidebarProps {
  items: string[];
  className?: string;
  itemClassName?: string;
  backgroundColor?: string;
  textColor?: string;
  hoverColor?: string;
  fontSize?: string;
  spacing?: string;
  borderColor?: string;
  onItemClick?: (item: string, index: number) => void;
}

const VerticalSidebar: React.FC<VerticalSidebarProps> = ({
  items,
  className = '',
  itemClassName = '',
  backgroundColor = 'bg-global-6',
  textColor = 'text-gray-400',
  hoverColor = 'text-white',
  fontSize = '10px',
  spacing = 'space-y-12',
  borderColor = '',
  onItemClick
}) => {
  return (
    <div className={`flex flex-col justify-center items-center w-16 ${backgroundColor} border-r ${borderColor} py-4 ${className}`}>
      <div className={`flex flex-col justify-center items-center h-full ${spacing}`}>
        {items.map((item, index) => (
          <div
            key={`${item}-${index}`}
            className="flex items-center justify-center w-full h-full"
          >
            <span
              className={`${textColor} transform rotate-90  hover:${hoverColor}     transition-colors duration-200 cursor-pointer whitespace-nowrap ${itemClassName}`}
              style={{ fontSize }}
              onClick={() => onItemClick?.(item, index)}
              title={item}
            >
              {item}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VerticalSidebar;