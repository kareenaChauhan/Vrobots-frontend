import React from 'react';

interface PriceRangeProps {
  minPrice: number;
  maxPrice: number;
  onRangeChange: (min: number, max: number) => void;
  className?: string;
}

const PriceRange: React.FC<PriceRangeProps> = ({
  minPrice,
  maxPrice,
  onRangeChange,
  className = ''
}) => {
  return (
    <div className={`space-y-4 ${className}`}>
      <div className="relative">
        <div className="h-2 bg-gray-200 rounded-lg">
          <div 
            className="h-2 bg-teal-600 rounded-lg"
            style={{ width: `${((maxPrice - minPrice) / (346 - 19)) * 100}%` }}
          />
        </div>
        <div className="absolute left-0 top-0 w-4 h-4 bg-teal-600 rounded-full transform -translate-y-1" />
        <div className="absolute right-0 top-0 w-4 h-4 bg-teal-600 rounded-full transform -translate-y-1" />
      </div>
      <div className="flex justify-between text-sm text-gray-600">
        <span>Min Price: ${minPrice}</span>
        <span>Max Price: ${maxPrice}</span>
      </div>
    </div>
  );
};

export default PriceRange;