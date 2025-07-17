import React, { useState } from 'react';

interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

interface CartComponentProps {
  isOpen: boolean;
  onClose: () => void;
}

const CartComponent: React.FC<CartComponentProps> = ({ isOpen, onClose }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 1,
      name: 'Wooden Water Bottles',
      price: 50.0,
      image: 'https://via.placeholder.com/50',
      quantity: 1,
    },
    {
      id: 2,
      name: 'Bamboo Cups',
      price: 40.0,
      image: 'https://via.placeholder.com/50',
      quantity: 1,
    },
    {
      id: 3,
      name: 'Wooden Toothbrushes',
      price: 65.0,
      image: 'https://via.placeholder.com/50',
      quantity: 1,
    },
  ]);

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const updateQuantity = (id: number, delta: number) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <>
      {/* Cart Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } z-50 overflow-y-auto`}
      >
        <div className="p-4">
          <div className="flex justify-between items-center border-b pb-2">
            <h2 className="text-lg font-semibold">Shopping Cart</h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 text-xl"
            >
              ×
            </button>
          </div>

          {/* Items */}
          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center py-4 border-b last:border-b-0"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-14 h-14 rounded mr-4 object-cover"
                />
                <div className="flex-1">
                  <h3 className="text-sm font-medium">{item.name}</h3>
                  <p className="text-green-600 text-sm">${item.price.toFixed(2)}</p>
                  <div className="flex items-center mt-1">
                    <button
                      className="px-2 py-1 bg-gray-200 rounded"
                      onClick={() => updateQuantity(item.id, -1)}
                    >
                      -
                    </button>
                    <span className="px-2 text-sm">{item.quantity}</span>
                    <button
                      className="px-2 py-1 bg-gray-200 rounded"
                      onClick={() => updateQuantity(item.id, 1)}
                    >
                      +
                    </button>
                    <button
                      className="ml-2 text-red-500 text-sm"
                      onClick={() => removeItem(item.id)}
                    >
                      ×
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="py-8 text-center text-gray-500">Your cart is empty.</p>
          )}

          {/* Subtotal and Checkout */}
          <div className="mt-6">
            <p className="text-lg font-semibold">
              Subtotal: ${subtotal.toFixed(2)}
            </p>
            {subtotal >= 300 && (
              <p className="text-green-600 mt-2 flex items-center text-sm">
                <span className="mr-2">🚢</span> Congratulations, you’ve got free shipping!
              </p>
            )}
            <button className="w-full mt-4 bg-gray-800 text-white py-2 rounded hover:bg-gray-900 transition">
              Checkout
            </button>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={onClose}
        ></div>
      )}
    </>
  );
};

export default CartComponent;
