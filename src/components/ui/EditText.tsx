import React from 'react';

interface EditTextProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const EditText: React.FC<EditTextProps> = ({
  label,
  error,
  className = '',
  ...props
}) => {
  return (
    <div className="flex flex-col gap-2">
      {label && (
        <label className="text-base font-medium text-dark-2">
          {label}
        </label>
      )}
      <input
        className="w-full px-4 py-3 bg-gray-50 border bg-light-gray rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:bg-white transition-all"

        {...props}
      />
      {error && (
        <span className="text-red-500 text-sm">{error}</span>
      )}
    </div>
  );
};

export default EditText;




