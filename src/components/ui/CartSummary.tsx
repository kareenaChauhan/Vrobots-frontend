import React from 'react';
import { Shield, Truck, Package, CreditCard, ArrowRight } from 'lucide-react';
import Button from '../ui/Button';

interface CartSummaryProps {
  subtotal: number;
  discount: number;
  total: number;
  appliedCoupon: string | null;
  onCheckout: () => void;
}

const CartSummary: React.FC<CartSummaryProps> = ({
  subtotal,
  discount,
  total,
  appliedCoupon,
  onCheckout
}) => {
  const shipping = 0; // Free shipping
  const tax = total * 0.08; // 8% tax

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 sticky top-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Order Summary</h2>

      {/* Order Details */}
      <div className="space-y-4 mb-6">
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Subtotal</span>
          <span className="font-medium text-gray-900">${subtotal.toFixed(2)}</span>
        </div>
        
        {discount > 0 && (
          <div className="flex justify-between items-center text-emerald-600">
            <span className="flex items-center">
              Discount ({appliedCoupon})
            </span>
            <span className="font-medium">-${discount.toFixed(2)}</span>
          </div>
        )}
        
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Shipping</span>
          <span className="font-medium text-emerald-600">FREE</span>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Tax</span>
          <span className="font-medium text-gray-900">${tax.toFixed(2)}</span>
        </div>
        
        <div className="pt-4 border-t border-gray-200">
          <div className="flex justify-between items-center">
            <span className="text-xl font-bold text-gray-900">Total</span>
            <span className="text-2xl font-bold text-emerald-600">
              ${(total + tax).toFixed(2)}
            </span>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="space-y-4 mb-6">
        <div className="flex items-center space-x-3 p-3 bg-emerald-50 rounded-lg">
          <Truck className="w-5 h-5 text-emerald-600" />
          <div>
            <p className="text-sm font-medium text-emerald-800">Free Shipping</p>
            <p className="text-xs text-emerald-600">On orders over $25</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
          <Shield className="w-5 h-5 text-blue-600" />
          <div>
            <p className="text-sm font-medium text-blue-800">Secure Checkout</p>
            <p className="text-xs text-blue-600">SSL encrypted payment</p>
          </div>
        </div>
        
        <div className="flex items-center space-x-3 p-3 bg-purple-50 rounded-lg">
          <Package className="w-5 h-5 text-purple-600" />
          <div>
            <p className="text-sm font-medium text-purple-800">Easy Returns</p>
            <p className="text-xs text-purple-600">30-day return policy</p>
          </div>
        </div>
      </div>

      {/* Payment Methods */}
      <div className="mb-6">
        <h3 className="text-sm font-medium text-gray-700 mb-3">We Accept</h3>
        <div className="flex space-x-2">
          <div className="w-8 h-6 bg-gradient-to-r from-blue-600 to-blue-700 rounded flex items-center justify-center">
            <CreditCard className="w-4 h-4 text-white" />
          </div>
          <div className="w-8 h-6 bg-gradient-to-r from-red-600 to-red-700 rounded flex items-center justify-center">
            <CreditCard className="w-4 h-4 text-white" />
          </div>
          <div className="w-8 h-6 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded flex items-center justify-center">
            <CreditCard className="w-4 h-4 text-white" />
          </div>
          <div className="w-8 h-6 bg-gradient-to-r from-emerald-600 to-emerald-700 rounded flex items-center justify-center">
            <CreditCard className="w-4 h-4 text-white" />
          </div>
        </div>
      </div>

      {/* Checkout Button */}
      <Button
        variant="primary"
        onClick={onCheckout}
        icon={ArrowRight}
        iconPosition="right"
        fullWidth

      >
        Proceed to Checkout
      </Button>

      {/* Security Badge */}
      <div className="mt-4 text-center">
        <p className="text-xs text-gray-500 flex items-center justify-center">
          <Shield className="w-4 h-4 mr-1" />
          Your payment information is secure and encrypted
        </p>
      </div>
    </div>
  );
};

export default CartSummary;