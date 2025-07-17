import React from 'react';
import { Trash2, X } from 'lucide-react';
import { CartItem } from '../../pages/ShoppingCart';
import QuantitySelector from '../ui/QuantitySelector';

interface CartTableProps {
  items: any;
  onQuantityChange: (id: string, quantity: number) => void;
  onRemoveItem: (id: string) => void;
}

const CartTable: React.FC<CartTableProps> = ({
  items,
  onQuantityChange,
  onRemoveItem
}) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      {/* Desktop Table Header */}
      <div className="hidden lg:grid lg:grid-cols-12 gap-4 px-6 py-4 bg-gray-50 border-b border-gray-200">
        <div className="col-span-6">
          <h3 className="text-lg font-semibold text-gray-900">Product</h3>
        </div>
        <div className="col-span-2 text-center">
          <h3 className="text-lg font-semibold text-gray-900">Price</h3>
        </div>
        <div className="col-span-2 text-center">
          <h3 className="text-lg font-semibold text-gray-900">Quantity</h3>
        </div>
        <div className="col-span-2 text-center">
          <h3 className="text-lg font-semibold text-gray-900">Subtotal</h3>
        </div>
      </div>

      {/* Cart Items */}
      <div className="divide-y divide-gray-200">
        {items.map((item :any) => (
          <div key={item.id} className="p-4 sm:p-6 hover:bg-gray-50 transition-colors duration-200">
            {/* Desktop Layout */}
            <div className="hidden lg:grid lg:grid-cols-12 gap-4 items-center">
              {/* Product Info */}
              <div className="col-span-6 flex items-center space-x-4">
                <div className="relative group">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded-lg group-hover:scale-105 transition-transform duration-200"
                  />
                  <button
                    onClick={() => onRemoveItem(item.id)}
                    className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 hover:bg-red-600 transition-all duration-200"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-1">
                    {item.name}
                  </h3>
                  <p className="text-sm text-gray-500">
                    Eco-friendly • Sustainable
                  </p>
                </div>
              </div>

              {/* Price */}
              <div className="col-span-2 text-center">
                <span className="text-lg font-medium text-gray-900">
                  ${item.price.toFixed(2)}
                </span>
              </div>

              {/* Quantity */}
              <div className="col-span-2 flex justify-center">
                <QuantitySelector
                  value={item.quantity}
                  onChange={(quantity) => onQuantityChange(item.id, quantity)}
                />
              </div>

              {/* Subtotal */}
              <div className="col-span-2 text-center">
                <span className="text-lg font-semibold text-emerald-600">
                  ${(item.price * item.quantity).toFixed(2)}
                </span>
              </div>
            </div>

            {/* Mobile Layout */}
            <div className="lg:hidden space-y-4">
              <div className="flex items-start space-x-4">
                <div className="relative">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-lg"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-base sm:text-lg font-medium text-gray-900 mb-1">
                        {item.name}
                      </h3>
                      <p className="text-sm text-gray-500 mb-2">
                        Eco-friendly • Sustainable
                      </p>
                      <p className="text-lg font-medium text-gray-900">
                        ${item.price.toFixed(2)}
                      </p>
                    </div>
                    <button
                      onClick={() => onRemoveItem(item.id)}
                      className="p-2 text-red-500 hover:text-red-700 hover:bg-red-50 rounded-lg transition-colors duration-200"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-between items-center pt-2 border-t border-gray-100">
                <QuantitySelector
                  value={item.quantity}
                  onChange={(quantity) => onQuantityChange(item.id, quantity)}
                />
                <div className="text-right">
                  <p className="text-sm text-gray-500 mb-1">Subtotal</p>
                  <p className="text-lg font-semibold text-emerald-600">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CartTable;