import React from 'react';
import { Tag, X, RefreshCw } from 'lucide-react';
import Button from '../ui/Button';
import Input from '../ui/Input';

interface CouponSectionProps {
  couponCode: string;
  setCouponCode: (code: string) => void;
  appliedCoupon: string | null;
  discount: number;
  onApplyCoupon: () => void;
  onRemoveCoupon: () => void;
  onUpdateCart: () => void;
}

const CouponSection: React.FC<CouponSectionProps> = ({
  couponCode,
  setCouponCode,
  appliedCoupon,
  discount,
  onApplyCoupon,
  onRemoveCoupon,
  onUpdateCart
}) => {
  return (
    <div className="mt-8 bg-white rounded-xl shadow-lg p-6">
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Coupon Code Section */}
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
            <Tag className="w-5 h-5 mr-2 text-emerald-600" />
            Apply Coupon Code
          </h3>
          
          {appliedCoupon ? (
            <div className="flex items-center justify-between p-4 bg-emerald-50 border border-emerald-200 rounded-lg">
              <div>
                <p className="text-sm font-medium text-emerald-800">
                  Coupon Applied: {appliedCoupon}
                </p>
                <p className="text-sm text-emerald-600">
                  You saved ${discount.toFixed(2)}!
                </p>
              </div>
              <button
                onClick={onRemoveCoupon}
                className="p-1 text-emerald-700 hover:text-red-600 transition-colors duration-200"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          ) : (
            <div className="flex gap-3">
              <div className="flex-1">
                <Input
                  placeholder="Enter coupon code (try SAVE10, WELCOME15, SPRING20)"
                  value={couponCode}
                  onChange={setCouponCode}
                />
              </div>
              <Button
                variant="outline"
                onClick={onApplyCoupon}
                disabled={!couponCode.trim()}
                className="whitespace-nowrap"
              >
                Apply
              </Button>
            </div>
          )}
        </div>

        {/* Update Cart Button */}
        <div className="flex items-end">
          <Button
            variant="secondary"
            onClick={onUpdateCart}
            icon={RefreshCw}
            className="whitespace-nowrap"
          >
            Update Cart
          </Button>
        </div>
      </div>

      {/* Available Coupons */}
      <div className="mt-6 pt-6 border-t border-gray-200">
        <h4 className="text-sm font-medium text-gray-700 mb-3">Available Coupons</h4>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="p-3 bg-gradient-to-r from-emerald-50 to-emerald-100 border border-emerald-200 rounded-lg">
            <p className="text-sm font-semibold text-emerald-800">SAVE10</p>
            <p className="text-xs text-emerald-600">10% off your order</p>
          </div>
          <div className="p-3 bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200 rounded-lg">
            <p className="text-sm font-semibold text-blue-800">WELCOME15</p>
            <p className="text-xs text-blue-600">15% off for new customers</p>
          </div>
          <div className="p-3 bg-gradient-to-r from-purple-50 to-purple-100 border border-purple-200 rounded-lg">
            <p className="text-sm font-semibold text-purple-800">SPRING20</p>
            <p className="text-xs text-purple-600">20% off spring collection</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CouponSection;