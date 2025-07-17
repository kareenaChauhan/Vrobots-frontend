import React from 'react';

interface BreadCrumbItem {
  label: string;
  href?: string;
  active?: boolean;
}

interface BreadCrumbProps {
  items: BreadCrumbItem[];
  separator?: string;
  className?: string;
}

const BreadCrumb: React.FC<BreadCrumbProps> = ({ 
  items, 
  separator = '/', 
  className = '' 
}) => {
  return (
    <nav className={`flex items-center gap-2 sm:gap-3 ${className}`} aria-label="Breadcrumb">
      {items.map((item, index) => (
        <React.Fragment key={index}>
          {index > 0 && (
            <span className="text-global-3 text-sm sm:text-base">{separator}</span>
          )}
          {item.href && !item.active ? (
            <a
              href={item.href}
              className="text-global-3 text-sm sm:text-base hover:text-global-2 transition-colors duration-200"
            >
              {item.label}
            </a>
          ) : (
            <span
              className={`text-sm sm:text-base ${
                item.active ? 'text-global-3 font-medium' : 'text-global-3'
              }`}
            >
              {item.label}
            </span>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
};

export default BreadCrumb;