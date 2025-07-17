import React from 'react';
import Button from '../ui/Button';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  totalResults: number;
  resultsPerPage: number;
}

const Pagination: React.FC<PaginationProps> = React.memo(({
  currentPage,
  totalPages,
  onPageChange,
  totalResults,
  resultsPerPage,
}) => {
  const startResult = (currentPage - 1) * resultsPerPage + 1;
  const endResult = Math.min(currentPage * resultsPerPage, totalResults);

  return (
    <div className="flex flex-col sm:flex-row justify-between items-center gap-4 bg-white p-6 rounded-lg shadow-sm">
      <span className="text-gray-600 text-sm">
        Showing {startResult}–{endResult} of {totalResults} results
      </span>

      <div className="flex items-center gap-2">
        {[...Array(Math.min(3, totalPages))].map((_, index) => {
          const page = index + 1;
          return (
            <Button
              key={page}
              variant={currentPage === page ? 'primary' : 'outline'}
              onClick={() => onPageChange(page)}
              className="w-10 h-10 text-sm"
            >
              {page}
            </Button>
          );
        })}
        {currentPage < totalPages && (
          <Button
            variant="outline"
            onClick={() => onPageChange(currentPage + 1)}
            className="px-4 h-10 text-sm"
          >
            Next
          </Button>
        )}
      </div>
    </div>
  );
});

Pagination.displayName = 'Pagination';

export default Pagination;