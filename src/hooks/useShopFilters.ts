import { useState, useCallback } from 'react';
import { FilterState } from '../types/product';

const initialFilters: FilterState = {
  searchTerm: '',
  minPrice: 19,
  maxPrice: 346,
  selectedColors: [],
  selectedSizes: ['12'],
  selectedCategories: [],
  selectedTags: ['Trackers'],
};

export const useShopFilters = () => {
  const [filters, setFilters] = useState<FilterState>(initialFilters);

  const handleColorSelect = useCallback((color: string) => {
    setFilters((prev) => ({
      ...prev,
      selectedColors: prev.selectedColors.includes(color)
        ? prev.selectedColors.filter((c) => c !== color)
        : [...prev.selectedColors, color],
    }));
  }, []);

  const handleTagSelect = useCallback((tag: string) => {
    setFilters((prev) => ({
      ...prev,
      selectedTags: prev.selectedTags.includes(tag)
        ? prev.selectedTags.filter((t) => t !== tag)
        : [...prev.selectedTags, tag],
    }));
  }, []);

  const handleReset = useCallback(() => {
    setFilters(initialFilters);
  }, []);

  const updateFilter = useCallback((key: keyof FilterState, value: any) => {
    setFilters((prev) => ({
      ...prev,
      [key]: value,
    }));
  }, []);

  return {
    filters,
    setFilters,
    handleColorSelect,
    handleTagSelect,
    handleReset,
    updateFilter,
  };
};