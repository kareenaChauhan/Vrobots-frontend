import React from 'react';

interface InputProps {
  type?: string;
  placeholder?: string;
  value: string | number;
  onChange: (value: string) => void;
  className?: string;
  disabled?: boolean;
  min?: number;
  max?: number;
}

const Input: React.FC<InputProps> = ({
  type = 'text',
  placeholder,
  value,
  onChange,
  className = '',
  disabled = false,
  min,
  max
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={handleChange}
      disabled={disabled}
      min={min}
      max={max}
      className={`w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-emerald-500 focus:outline-none transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
    />
  );
};

export default Input;