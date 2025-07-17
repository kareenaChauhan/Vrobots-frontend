import React from 'react';
import { Filter } from 'lucide-react';
import { FilterState, Color, Category } from '../../types/product';
import Button from '../ui/Button';
import Input from '../ui/Input';

interface ShopSidebarProps {
  filters: FilterState;
  onColorSelect: (color: string) => void;
  onTagSelect: (tag: string) => void;
  onReset: () => void;
  onUpdateFilter: (key: keyof FilterState, value: any) => void;
  onClose?: () => void;
}

const ShopSidebar: React.FC<ShopSidebarProps> = React.memo(({
  filters,
  onColorSelect,
  onTagSelect,
  onReset,
  onUpdateFilter,
  onClose,
}) => {
  const colors: Color[] = [
    { color: '#000000', name: 'Black' },
    { color: '#14b8a6', name: 'Teal' },
    { color: '#06b6d4', name: 'Cyan' },
    { color: '#d1d5db', name: 'Gray' },
    { color: '#f97316', name: 'Orange' },
    { color: '#10b981', name: 'Emerald' },
    { color: '#8b5cf6', name: 'Violet' },
    { color: '#ef4444', name: 'Red' },
    { color: '#3b82f6', name: 'Blue' },
    { color: '#84cc16', name: 'Lime' },
  ];

  const categoriesList: Category[] = [
    { name: 'Yoga Mats', count: 15 },
    { name: 'Yoga Accessories', count: 22 },
    { name: 'Reusable Bags', count: 10 },
    { name: 'Water Bottles', count: 3 },
    { name: 'Bamboo Toothbrushes', count: 8 },
    { name: 'Fitness Trackers', count: 2 },
    { name: 'Home Fitness Equipment', count: 7 },
  ];

  const tags = ['Mats', 'Accessories', 'Bottles', 'Trackers', 'Bags', 'Cup', 'Toothbrushes'];
  const handleReset = () => {
    onReset();
    if (onClose) onClose();
  };

  return (
    <div className="bg-white  rounded-lg shadow-sm">
      <div className="space-y-8">
        {/* Filters Header */}
        {/* <div className="flex items-center gap-3">
          <Filter className="w-5 h-5 text-gray-600" />
          <h1 className="text-gray-900 font-bold">Filters</h1>
        </div> */}

        {/* Search */}
        <div className="space-y-4">
          <h3 className="text-gray-900 font-semibold">Search</h3>
          <Input
            placeholder="Search products..."
            value={filters.searchTerm}
            onChange={(value) => onUpdateFilter('searchTerm', value)}
          />
        </div>

        {/* Price Filter */}
        <div className="space-y-4">
          <h3 className="text-gray-900 font-semibold">Price Range</h3>
          <div className="flex items-center gap-4">
            <input
              type="number"
              placeholder="Min"
              value={filters.minPrice}
              onChange={(e) => onUpdateFilter('minPrice', Number(e.target.value))}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
            />
            <span className="text-gray-500">-</span>
            <input
              type="number"
              placeholder="Max"
              value={filters.maxPrice}
              onChange={(e) => onUpdateFilter('maxPrice', Number(e.target.value))}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
            />
          </div>
        </div>

        {/* Color Filter */}
        <div className="space-y-4">
          <h3 className="text-gray-900 font-semibold">Color</h3>
          <div className="flex flex-wrap gap-2">
            {colors.map((color, index) => (
              <button
                key={index}
                className={`w-8 h-8 rounded-full border-2 transition-all duration-200 ${
                  filters.selectedColors.includes(color.color)
                    ? 'border-gray-800 ring-2 ring-gray-400 scale-110'
                    : 'border-gray-300 hover:border-gray-400'
                }`}
                style={{ backgroundColor: color.color }}
                onClick={() => onColorSelect(color.color)}
                title={color.name}
              />
            ))}
          </div>
        </div>

        {/* Category Filter */}
        <div className="space-y-4">
          <h3 className="text-gray-900 font-semibold">Category</h3>
          <div className="space-y-2">
            {categoriesList.map((category, index) => (
              <div
                key={index}
                className="flex justify-between items-center py-1 hover:bg-gray-50 px-2 rounded"
              >
                <span className="text-gray-700 text-sm cursor-pointer">
                  {category.name}
                </span>
                <span className="text-gray-400 text-sm">({category.count})</span>
              </div>
            ))}
          </div>
        </div>

        {/* Tags Filter */}
        <div className="space-y-4">
          <h3 className="text-gray-900 font-semibold">Tags</h3>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Button
                key={tag}
                variant={filters.selectedTags.includes(tag) ? 'primary' : 'outline'}
                onClick={() => onTagSelect(tag)}
                className="px-3 py-1 text-sm"
              >
                {tag}
              </Button>
            ))}
          </div>
        </div>

        {/* Reset Button */}
        <Button variant="secondary" onClick={handleReset} className="w-full">
          Reset Filters
        </Button>
      </div>
    </div>
  );
});

ShopSidebar.displayName = 'ShopSidebar';

export default ShopSidebar;