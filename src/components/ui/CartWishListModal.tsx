import React, { useState, useEffect } from 'react';
import { X, ShoppingCart, Heart, Plus, Minus, Trash2, ArrowRight, Check, Truck } from 'lucide-react';
import Button from './Button';
import { useCart } from '../../context/CartContext';

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

interface WishlistItem {
  id: string;
  name: string;
  price: number;
  image: string;
}

interface SlidePanelProps {
  isOpen: boolean;
  onClose: () => void;
  // cartItems: CartItem[];
  wishlistItems: WishlistItem[];
  onUpdateQuantity: (id: string, quantity: number) => void;
  // onRemoveFromCart: (id: string) => void;
  onRemoveFromWishlist: (id: string) => void;
  onMoveToCart: (wishlistItem: WishlistItem) => void;
  initialTab?: 'cart' | 'wishlist';
}

const SlidePanel: React.FC<SlidePanelProps> = ({
  isOpen,
  onClose,
  // cartItems,
  wishlistItems,
  onUpdateQuantity,
  // onRemoveFromCart,
  onRemoveFromWishlist,
  onMoveToCart,
  initialTab = 'cart',
}) => {
  const [activeTab, setActiveTab] = useState<'cart' | 'wishlist'>(initialTab);
  const [removingItems, setRemovingItems] = useState<Set<string>>(new Set());

  const { cartItems, removeFromCart, subtotal } = useCart();

  useEffect(() => {
    if (isOpen) {
      setActiveTab(initialTab);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, initialTab]);

  const calculateSubtotal = () => {
    return subtotal;
  };

  const calculateTax = () => {
    return calculateSubtotal() * 0.08; // 8% tax
  };

  const calculateTotal = () => {
    return calculateSubtotal() + calculateTax();
  };

  const handleQuantityChange = (id: string, change: number) => {
    const item = cartItems.find(item => item.id === id);
    if (item) {
      const newQuantity = Math.max(1, item.quantity + change);
      onUpdateQuantity(id, newQuantity);
    }
  };

  const handleRemoveItem = (id: string, type: 'cart' | 'wishlist') => {
    setRemovingItems(prev => new Set(prev).add(id));
    setTimeout(() => {
      if (type === 'cart') {
        removeFromCart(id as string | number);
      } else {
        onRemoveFromWishlist(id);
      }
      setRemovingItems(prev => {
        const newSet = new Set(prev);
        newSet.delete(id);
        return newSet;
      });
    }, 300);
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleMoveToCart = (wishlistItem: WishlistItem) => {
    onMoveToCart(wishlistItem);
    // Show a brief success animation
    setTimeout(() => {
      setActiveTab('cart');
    }, 500);
  };

  const isEligibleForFreeShipping = calculateSubtotal() >= 100;
  const freeShippingProgress = Math.min((calculateSubtotal() / 100) * 100, 100);

  return (
    <>
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-black transition-opacity duration-300 z-40 ${
          isOpen ? 'opacity-50' : 'opacity-0 pointer-events-none'
        }`}
        onClick={handleBackdropClick}
      />
      
      {/* Slide Panel */}
      <div 
        className={`fixed top-0 right-0 h-full w-full max-w-sm sm:max-w-md lg:max-w-lg bg-white shadow-2xl transform transition-transform duration-300 ease-in-out z-50 flex flex-col ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex-shrink-0 bg-white border-b border-gray-200 shadow-sm">
          <div className="flex items-center justify-between p-4 sm:p-6">
            <div className="flex space-x-1">
              <button
                onClick={() => setActiveTab('cart')}
                className={`relative px-4 py-2 text-sm sm:text-base font-medium rounded-lg transition-all duration-200 ${
                  activeTab === 'cart'
                    ? 'text-gray-900 bg-gray-100'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                <ShoppingCart className="w-4 h-4 inline mr-2" />
                Cart
                {cartItems.length > 0 && (
                  <span className="ml-1 px-2 py-0.5 text-xs bg-emerald-600 text-white rounded-full">
                    {cartItems.length}
                  </span>
                )}
              </button>
              <button
                onClick={() => setActiveTab('wishlist')}
                className={`relative px-4 py-2 text-sm sm:text-base font-medium rounded-lg transition-all duration-200 ${
                  activeTab === 'wishlist'
                    ? 'text-gray-900 bg-gray-100'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                <Heart className="w-4 h-4 inline mr-2" />
                Wishlist
                {wishlistItems.length > 0 && (
                  <span className="ml-1 px-2 py-0.5 text-xs bg-emerald-600 text-white rounded-full">
                    {wishlistItems.length}
                  </span>
                )}
              </button>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors duration-200"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto">
          {activeTab === 'cart' ? (
            <div className="p-4 sm:p-6">
              {cartItems.length === 0 ? (
                <div className="text-center py-12 sm:py-16">
                  <div className="mb-6">
                    <div className="w-20 h-20 mx-auto bg-gray-100 rounded-full flex items-center justify-center">
                      <ShoppingCart className="w-10 h-10 text-gray-400" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Your cart is empty</h3>
                  <p className="text-gray-500 mb-6">Add some items to get started!</p>
                  <Button 
                    variant="primary" 
                    onClick={onClose}
                    className="mx-auto"
                  >
                    Continue Shopping
                  </Button>
                </div>
              ) : (
                <>
                  {/* Free Shipping Progress */}
                  {/* {!isEligibleForFreeShipping && (
                    <div className="mb-6 p-4 bg-gradient-to-r from-emerald-50 to-blue-50 rounded-lg border border-emerald-200">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center">
                          <Truck className="w-4 h-4 text-emerald-600 mr-2" />
                          <span className="text-sm font-medium text-emerald-800">
                            Free shipping on orders over $100
                          </span>
                        </div>
                        <span className="text-sm font-bold text-emerald-600">
                          ${(100 - calculateSubtotal()).toFixed(2)} to go
                        </span>
                      </div>
                      <div className="w-full bg-emerald-200 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-emerald-500 to-emerald-600 h-2 rounded-full transition-all duration-500"
                          style={{ width: `${freeShippingProgress}%` }}
                        ></div>
                      </div>
                    </div>
                  )} */}

                  {/* {isEligibleForFreeShipping && (
                    <div className="mb-6 p-4 bg-gradient-to-r from-emerald-50 to-emerald-100 rounded-lg border border-emerald-200">
                      <div className="flex items-center">
                        <Check className="w-5 h-5 text-emerald-600 mr-2" />
                        <span className="text-sm font-medium text-emerald-800">
                          Congratulations! You've qualified for free shipping!
                        </span>
                      </div>
                    </div>
                  )} */}

                  {/* Cart Items */}
                  <div className="space-y-4 mb-6">
                    {cartItems.map((item) => (
                      <div 
                        key={item.id} 
                        className={`group bg-white border border-gray-200 rounded-xl p-4 hover:shadow-md transition-all duration-200 ${
                          removingItems.has(item.id.toString()) ? 'opacity-50 scale-95' : ''
                        }`}
                      >
                        <div className="flex items-start space-x-4">
                          <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                            <img 
                              src={item.image}
                              alt={item.name}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                              onError={(e) => {
                                console.warn(`❌ Failed to load image for ${item.name}:`, item.image);
                                // Fallback to a placeholder if image fails to load
                                e.currentTarget.src = "https://images.pexels.com/photos/6995122/pexels-photo-6995122.jpeg?auto=compress&cs=tinysrgb&w=400";
                              }}
                              onLoad={() => {
                                console.log(`✅ Successfully loaded image for ${item.name}:`, item.image);
                              }}
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="font-medium text-gray-900 truncate text-sm sm:text-base">
                              {item.name}
                            </h3>
                            <p className="text-emerald-600 font-semibold text-sm sm:text-base">
                              ${item.price.toFixed(2)}
                            </p>
                            <div className="flex items-center justify-between mt-3">
                              <div className="flex items-center space-x-1 bg-gray-50 rounded-lg p-1">
                                <button
                                  onClick={() => handleQuantityChange(item.id.toString(), -1)}
                                  disabled={item.quantity <= 1}
                                  className="w-8 h-8 rounded-md bg-white border border-gray-200 flex items-center justify-center hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
                                >
                                  <Minus className="w-3 h-3 text-gray-600" />
                                </button>
                                <span className="w-10 text-center text-sm font-medium">
                                  {item.quantity}
                                </span>
                                <button
                                  onClick={() => handleQuantityChange(item.id.toString(), 1)}
                                  className="w-8 h-8 rounded-md bg-white border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors duration-200"
                                >
                                  <Plus className="w-3 h-3 text-gray-600" />
                                </button>
                              </div>
                              <div className="text-right">
                                <p className="font-semibold text-gray-900 text-sm sm:text-base">
                                  ${(item.price * item.quantity).toFixed(2)}
                                </p>
                                <button
                                  onClick={() => handleRemoveItem(item.id.toString(), 'cart')}
                                  className="text-red-500 hover:text-red-700 text-xs sm:text-sm mt-1 transition-colors duration-200 flex items-center"
                                >
                                  <Trash2 className="w-3 h-3 mr-1" />
                                  Remove
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>
          ) : (
            <div className="p-4 sm:p-6">
              {wishlistItems.length === 0 ? (
                <div className="text-center py-12 sm:py-16">
                  <div className="mb-6">
                    <div className="w-20 h-20 mx-auto bg-gray-100 rounded-full flex items-center justify-center">
                      <Heart className="w-10 h-10 text-gray-400" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Your wishlist is empty</h3>
                  <p className="text-gray-500 mb-6">Save items you love for later!</p>
                  <Button 
                    variant="primary" 
                    onClick={onClose}
                    className="mx-auto"
                  >
                    Start Shopping
                  </Button>
                </div>
              ) : (
                <div className="space-y-4">
                  {wishlistItems.map((item) => (
                    <div 
                      key={item.id} 
                      className={`group bg-white border border-gray-200 rounded-xl p-4 hover:shadow-md transition-all duration-200 ${
                        removingItems.has(item.id) ? 'opacity-50 scale-95' : ''
                      }`}
                    >
                      <div className="flex items-start space-x-4">
                        <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                          <img 
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-200"
                            onError={(e) => {
                              console.warn(`❌ Failed to load wishlist image for ${item.name}:`, item.image);
                              // Fallback to a placeholder if image fails to load
                              e.currentTarget.src = "https://images.pexels.com/photos/302894/pexels-photo-302894.jpeg?auto=compress&cs=tinysrgb&w=400";
                            }}
                            onLoad={() => {
                              console.log(`✅ Successfully loaded wishlist image for ${item.name}:`, item.image);
                            }}
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-medium text-gray-900 truncate text-sm sm:text-base">
                            {item.name}
                          </h3>
                          <p className="text-emerald-600 font-semibold text-sm sm:text-base">
                            ${item.price.toFixed(2)}
                          </p>
                          <div className="flex flex-col sm:flex-row gap-2 mt-3">
                            <Button
                              variant="primary"
                            //   size="small"
                              onClick={() => handleMoveToCart(item)}
                              className="flex-1 text-xs sm:text-sm"
                              leftIcon={<ShoppingCart className="w-4 h-4" />}
                            >
                              Add to Cart
                            </Button>
                            <button
                              onClick={() => handleRemoveItem(item.id, 'wishlist')}
                              className="text-red-500 hover:text-red-700 text-xs sm:text-sm transition-colors duration-200 flex items-center justify-center py-2"
                            >
                              <Trash2 className="w-3 h-3 mr-1" />
                              Remove
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Footer - Cart Summary */}
        {activeTab === 'cart' && cartItems.length > 0 && (
          <div className="flex-shrink-0 bg-white border-t border-gray-200 p-4 sm:p-6">
            <div className="space-y-3 mb-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Subtotal:</span>
                <span className="font-semibold text-gray-900">${calculateSubtotal().toFixed(2)}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Tax:</span>
                <span className="font-semibold text-gray-900">${calculateTax().toFixed(2)}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Shipping:</span>
                <span className="font-semibold text-emerald-600">
                  {isEligibleForFreeShipping ? 'FREE' : '$9.99'}
                </span>
              </div>
              <div className="pt-3 border-t border-gray-200">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-gray-900">Total:</span>
                  <span className="text-xl font-bold text-emerald-600">
                    ${(calculateTotal() + (isEligibleForFreeShipping ? 0 : 9.99)).toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                variant="outline"
                onClick={() => {
                  onClose();
                  window.location.href = '/shopping-cart';
                }}
                className="flex-1 text-sm"
              >
                View Cart
              </Button>
              <Button
                variant="primary"
                onClick={() => {
                    onClose();
                    window.location.href = '/checkout';
                  }}
                className="flex-1 text-sm"
                rightIcon={<ArrowRight className="w-4 h-4" />}
              >
                Checkout
              </Button>
            </div>
          </div>
        )}

        {/* Footer - Wishlist Actions */}
        {activeTab === 'wishlist' && wishlistItems.length > 0 && (
          <div className="flex-shrink-0 bg-white border-t border-gray-200 p-4 sm:p-6">
            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                variant="primary"
                onClick={() => {
                  onClose();
                  window.location.href = '/wishlist';
                }}
                className="flex-1 text-sm"
                rightIcon={<ArrowRight className="w-4 h-4" />}
              >
                Check Your Favourites
              </Button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default SlidePanel;