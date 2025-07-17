import React from 'react';
import { X } from 'lucide-react';

interface WishlistItem {
  id: string;
  name: string;
  image: string;
  price: number;
  originalPrice?: number;
  inStock: boolean;
}

interface WishlistTableProps {
  items: WishlistItem[];
  onAddToCart: (id: string) => void;
  onRemove: (id: string) => void;
}

const WishlistTable: React.FC<WishlistTableProps> = ({
  items,
  onAddToCart,
  onRemove,
}) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      {/* Header */}
      <div className="hidden lg:grid lg:grid-cols-12 gap-4 px-6 py-4 bg-gray-50 border-b border-gray-200">
        <div className="col-span-6 font-semibold text-gray-900">Product</div>
        <div className="col-span-2 text-center font-semibold text-gray-900">Price</div>
        <div className="col-span-2 text-center font-semibold text-gray-900">Stock</div>
        <div className="col-span-2 text-center font-semibold text-gray-900">Action</div>
      </div>

      {/* Items */}
      <div className="divide-y divide-gray-200">
        {items.map((item) => (
          <div key={item.id} className="p-4 sm:p-6 hover:bg-gray-50 transition-colors duration-200">
            {/* Desktop Layout */}
            <div className="hidden lg:grid lg:grid-cols-12 gap-4 items-center">
              {/* Product */}
              <div className="col-span-6 flex items-center space-x-4">
                <div className="relative group">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded-lg"
                  />
                  <button
                    onClick={() => onRemove(item.id)}
                    className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 hover:bg-red-600 transition-all duration-200"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900">{item.name}</h3>
                </div>
              </div>

              {/* Price */}
              <div className="col-span-2 text-center">
                <span className="text-lg font-medium text-gray-900">
                  {item.originalPrice && (
                    <span className="line-through text-gray-400 mr-1">
                      ${item.originalPrice.toFixed(2)}
                    </span>
                  )}
                  ${item.price.toFixed(2)}
                </span>
              </div>

              {/* Stock */}
              <div className="col-span-2 text-center">
                <span
                  className={`text-sm font-medium ${
                    item.inStock ? 'text-green-600' : 'text-red-500'
                  }`}
                >
                  {item.inStock ? 'In Stock' : 'Out of Stock'}
                </span>
              </div>

              {/* Action */}
              <div className="col-span-2 text-center">
                <button
                  onClick={() => onAddToCart(item.id)}
                  disabled={!item.inStock}
                  className={`px-4 py-2 rounded-md font-medium transition-colors ${
                    item.inStock
                      ? 'bg-gray-100 hover:bg-gray-200 text-gray-800'
                      : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  }`}
                >
                  Add To Cart
                </button>
              </div>
            </div>

            {/* Mobile Layout */}
            <div className="lg:hidden space-y-4">
              <div className="flex items-start space-x-4">
                <div className="relative group">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-lg"
                  />
                  <button
                    onClick={() => onRemove(item.id)}
                    className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base sm:text-lg font-medium text-gray-900 mb-1">
                    {item.name}
                  </h3>
                  <div className="text-sm mb-1">
                    {item.originalPrice && (
                      <span className="line-through text-gray-400 mr-1">
                        ${item.originalPrice.toFixed(2)}
                      </span>
                    )}
                    <span className="text-gray-900">${item.price.toFixed(2)}</span>
                  </div>
                  <div className="text-sm font-medium mb-2">
                    <span
                      className={`${
                        item.inStock ? 'text-green-600' : 'text-red-500'
                      }`}
                    >
                      {item.inStock ? 'In Stock' : 'Out of Stock'}
                    </span>
                  </div>
                  <button
                    onClick={() => onAddToCart(item.id)}
                    disabled={!item.inStock}
                    className={`w-full mt-2 px-4 py-2 rounded-md font-medium text-sm transition-colors ${
                      item.inStock
                        ? 'bg-gray-100 hover:bg-gray-200 text-gray-800'
                        : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    }`}
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WishlistTable;
