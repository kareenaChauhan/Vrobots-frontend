import React from 'react';

interface RatingBarProps {
  rating?: number;
  maxRating?: number;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  readonly?: boolean;
  onRatingChange?: (rating: number) => void;
}

const RatingBar: React.FC<RatingBarProps> = ({
  rating = 0,
  maxRating = 5,
  size = 'md',
  className = '',
  readonly = true,
  onRatingChange
}) => {
  const sizeClasses = {
    sm: 'w-3 h-3',
    md: 'w-4 h-4',
    lg: 'w-5 h-5'
  };

  const handleStarClick = (starRating: number) => {
    if (!readonly && onRatingChange) {
      onRatingChange(starRating);
    }
  };

  return (
    <div className={`flex items-center space-x-1 ${className}`}>
      {Array.from({ length: maxRating }, (_, index) => {
        const starRating = index + 1;
        const isFilled = starRating <= rating;
        
        return (
          <button
            key={index}
            type="button"
            className={`${sizeClasses[size]} ${readonly ? 'cursor-default' : 'cursor-pointer hover:scale-110'} transition-transform`}
            onClick={() => handleStarClick(starRating)}
            disabled={readonly}
          >
            <svg
              viewBox="0 0 24 24"
              fill={isFilled ? '#fbbf24' : '#e5e7eb'}
              stroke={isFilled ? '#fbbf24' : '#9ca3af'}
              strokeWidth="1"
              className="w-full h-full"
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          </button>
        );
      })}
    </div>
  );
};

export default RatingBar;