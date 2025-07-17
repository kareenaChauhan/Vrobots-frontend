import React, { useState } from 'react';
import { ShoppingBag, ArrowLeft } from 'lucide-react';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import BreadCrumb from '../../components/ui/BreadCrumb';
import Button from '../../components/ui/Button';
import CartTable from '../../components/ui/Table';
import CartSummary from '../../components/ui/CartSummary';
import CouponSection from '../../components/ui/CouponSection';
import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom';

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

const ShoppingCart: React.FC = () => {
  const { cartItems, removeFromCart, subtotal, cartCount } = useCart();

  const [couponCode, setCouponCode] = useState('');
  const [appliedCoupon, setAppliedCoupon] = useState<string | null>(null);
  const [discount, setDiscount] = useState(0);

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Cart', active: true }
  ];

  const handleQuantityChange = (id: string, newQuantity: number) => {
    // For now, we'll just remove the item if quantity is 0
    // TODO: Implement quantity management in the cart system
    if (newQuantity <= 0) {
      handleRemoveItem(id);
    }
  };

  const handleRemoveItem = (id: string) => {
    removeFromCart(id);
  };

  const calculateTotal = () => {
    return subtotal - discount;
  };

  const handleApplyCoupon = () => {
    const validCoupons = {
      'SAVE10': 0.10,
      'WELCOME15': 0.15,
      'SPRING20': 0.20
    };

    const discountPercent = validCoupons[couponCode.toUpperCase() as keyof typeof validCoupons];
    if (discountPercent) {
      setDiscount(subtotal * discountPercent);
      setAppliedCoupon(couponCode.toUpperCase());
      setCouponCode('');
    } else {
      alert('Invalid coupon code. Try SAVE10, WELCOME15, or SPRING20');
    }
  };

  const handleRemoveCoupon = () => {
    setAppliedCoupon(null);
    setDiscount(0);
  };

  const handleUpdateCart = () => {
    alert('Cart updated successfully!');
  };

  const handleCheckout = () => {
    alert('Proceeding to secure checkout...');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Hero Section with Header */}
      <div className="relative  overflow-hidden" style={{ backgroundImage: "url('/images/img__0x0.png')" }}>
        <div className="relative z-10">
          <Header />
          <div className="text-center py-16 sm:py-20 lg:py-24 px-4">
            <h1 className="text-2xl sm:text-2xl lg:text-3xl font-bold  mb-6 leading-tight">
             Cart
            </h1>
            <BreadCrumb items={breadcrumbItems} className="justify-center" />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {cartItems.length === 0 ? (
            <div className="text-center    ">
              <div className="flex justify-center mb-6">
                <div className="p-6 bg-gray-100 ">
                  <ShoppingBag className="w-16 h-16 text-gray-400" />
                </div>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Your cart is empty</h2>
              href="/shop"
              <Link to="/shop">
              <Button 
                variant="primary" 
                // size="large"
                icon={ArrowLeft}
                iconPosition="left">
                Continue Shopping
              </Button>
              </Link>
            </div>
          ) : (
            <div className="space-y-8">
              {/* Cart Header */}
              {/* <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    Your Cart ({cartItems.length} {cartItems.length === 1 ? 'item' : 'items'})
                  </h2>
                  <p className="text-gray-600 mt-1">
                    Review your items and proceed to checkout when ready
                  </p>
                </div>
                <Button 
                  href="/shop" 
                  variant="ghost"
                  icon={ArrowLeft}
                  iconPosition="left"
                >
                  Continue Shopping
                </Button>
              </div> */}

              <div className="flex flex-col xl:flex-row gap-8 lg:gap-12">
                {/* Cart Items */}
                <div className="flex-1 space-y-8">
                  <CartTable 
                    items={cartItems}
                    onQuantityChange={handleQuantityChange}
                    onRemoveItem={handleRemoveItem}
                  />
                  
                  <CouponSection
                    couponCode={couponCode}
                    setCouponCode={setCouponCode}
                    appliedCoupon={appliedCoupon}
                    discount={discount}
                    onApplyCoupon={handleApplyCoupon}
                    onRemoveCoupon={handleRemoveCoupon}
                    onUpdateCart={handleUpdateCart}
                  />
                </div>

                {/* Cart Summary */}
                <div className="w-full xl:w-96">
                  <CartSummary
                    subtotal={subtotal}
                    discount={discount}
                    total={calculateTotal()}
                    appliedCoupon={appliedCoupon}
                    onCheckout={handleCheckout}
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ShoppingCart;