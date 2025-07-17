import React, { useState } from 'react';
import { ChevronDown, ChevronRight, Package, CreditCard, Truck, Shield } from 'lucide-react';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';


interface OrderItem {
  id: string;
  name: string;
  price: number;
  image?: string;
}

interface BillingDetails {
  firstName: string;
  lastName: string;
  companyName: string;
  country: string;
  streetAddress: string;
  apartment: string;
  city: string;
  state: string;
  zipCode: string;
  phone: string;
  email: string;
  createAccount: boolean;
  shipToDifferent: boolean;
  orderNotes: string;
}

interface ShippingOption {
  id: string;
  name: string;
  price: number;
}

interface PaymentMethod {
  id: string;
  name: string;
  description?: string;
}

const CheckoutPage: React.FC = () => {
  const [billingDetails, setBillingDetails] = useState<BillingDetails>({
    firstName: '',
    lastName: '',
    companyName: '',
    country: 'India',
    streetAddress: '',
    apartment: '',
    city: '',
    state: '',
    zipCode: '',
    phone: '',
    email: '',
    createAccount: false,
    shipToDifferent: false,
    orderNotes: ''
  });

  const [selectedShipping, setSelectedShipping] = useState<string>('free');
  const [selectedPayment, setSelectedPayment] = useState<string>('bank-transfer');
  const [agreeToTerms, setAgreeToTerms] = useState<boolean>(false);
  const [showLoginForm, setShowLoginForm] = useState<boolean>(false);
  const [showCouponForm, setShowCouponForm] = useState<boolean>(false);

  const orderItems: OrderItem[] = [
    {
      id: '1',
      name: 'Wooden Water Bottles',
      price: 40.00,
      image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=100'
    },
    {
      id: '2',
      name: 'Wooden Cup',
      price: 40.00,
      image: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=100'
    }
  ];

  const shippingOptions: ShippingOption[] = [
    { id: 'free', name: 'Free shipping', price: 0 },
    { id: 'flat', name: 'Flat Rate', price: 25.75 }
  ];

  const paymentMethods: PaymentMethod[] = [
    { 
      id: 'bank-transfer', 
      name: 'Direct bank transfer',
      description: 'Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.'
    },
    { id: 'cash-delivery', name: 'Cash on delivery' },
    { id: 'paypal', name: 'PayPal' }
  ];

  const subtotal = orderItems.reduce((sum, item) => sum + item.price, 0);
  const shippingCost = shippingOptions.find(option => option.id === selectedShipping)?.price || 0;
  const total = subtotal + shippingCost;

  const handleInputChange = (field: keyof BillingDetails, value: string | boolean) => {
    setBillingDetails(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handlePlaceOrder = () => {
    if (!agreeToTerms) {
      alert('Please agree to the terms and conditions');
      return;
    }
    
    const requiredFields = ['firstName', 'lastName', 'streetAddress', 'city', 'state', 'zipCode', 'phone', 'email'];
    const missingFields = requiredFields.filter(field => !billingDetails[field as keyof BillingDetails]);
    
    if (missingFields.length > 0) {
      alert(`Please fill in all required fields: ${missingFields.join(', ')}`);
      return;
    }

    alert('Order placed successfully!');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      {/* Main Content */}
      <div className="container mx-auto px-4 py-6 md:py-8">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
          {/* Billing Details */}
          <div className="flex-1 lg:w-2/3">
            <div className="bg-white rounded-lg shadow-sm p-4 md:p-6">
              <h2 className="text-lg md:text-xl font-semibold text-gray-900 mb-6">Billing details</h2>

              {/* Returning Customer */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 md:p-4 mb-4">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-gray-700 text-sm">Returning customer? </span>
                    <button 
                      onClick={() => setShowLoginForm(!showLoginForm)}
                      className="text-blue-600 hover:text-blue-700 text-sm font-medium"
                    >
                      Click here to login
                    </button>
                  </div>
                  <ChevronDown className={`w-4 h-4 text-gray-500 transition-transform ${showLoginForm ? 'rotate-180' : ''}`} />
                </div>
                {showLoginForm && (
                  <div className="mt-4 pt-4 border-t border-blue-200">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <input
                        type="text"
                        placeholder="Username or email"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                      />
                      <input
                        type="password"
                        placeholder="Password"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                      />
                    </div>
                    <button className="mt-3 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors text-sm">
                      Login
                    </button>
                  </div>
                )}
              </div>

              {/* Coupon */}
              <div className="bg-green-50 border border-green-200 rounded-lg p-3 md:p-4 mb-6">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-gray-700 text-sm">Have a coupon? </span>
                    <button 
                      onClick={() => setShowCouponForm(!showCouponForm)}
                      className="text-green-600 hover:text-green-700 text-sm font-medium"
                    >
                      Click here to enter your code
                    </button>
                  </div>
                  <ChevronDown className={`w-4 h-4 text-gray-500 transition-transform ${showCouponForm ? 'rotate-180' : ''}`} />
                </div>
                {showCouponForm && (
                  <div className="mt-4 pt-4 border-t border-green-200">
                    <div className="flex gap-3">
                      <input
                        type="text"
                        placeholder="Coupon code"
                        className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
                      />
                      <button className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors text-sm">
                        Apply
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Form Fields */}
              <div className="space-y-4 md:space-y-6">
                {/* Name Fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2 text-sm">First Name *</label>
                    <input
                      type="text"
                      value={billingDetails.firstName}
                      onChange={(e) => handleInputChange('firstName', e.target.value)}
                      className="w-full px-3 md:px-4 py-2 md:py-3 bg-gray-50 border bg-light-gray rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-colors text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2 text-sm">Last Name *</label>
                    <input
                      type="text"
                      value={billingDetails.lastName}
                      onChange={(e) => handleInputChange('lastName', e.target.value)}
                      className="w-full px-3 md:px-4 py-2 md:py-3 bg-gray-50 border bg-light-gray rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-colors text-sm"
                    />
                  </div>
                </div>

                {/* Company Name */}
                <div>
                  <label className="block text-gray-700 font-medium mb-2 text-sm">Company name (optional)</label>
                  <input
                    type="text"
                    value={billingDetails.companyName}
                    onChange={(e) => handleInputChange('companyName', e.target.value)}
                    className="w-full px-3 md:px-4 py-2 md:py-3 bg-gray-50 border bg-light-gray rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-colors text-sm"
                  />
                </div>

                {/* Country */}
                <div>
                  <label className="block text-gray-700 font-medium mb-2 text-sm">Country / Region *</label>
                  <div className="relative">
                    <select
                      value={billingDetails.country}
                      onChange={(e) => handleInputChange('country', e.target.value)}
                      className="w-full px-3 md:px-4 py-2 md:py-3 bg-gray-50 border bg-light-gray rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-colors appearance-none text-sm"
                    >
                      <option value="India">India</option>
                      <option value="USA">USA</option>
                      <option value="UK">UK</option>
                      <option value="Canada">Canada</option>
                      <option value="Australia">Australia</option>
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
                  </div>
                </div>

                {/* Street Address */}
                <div className="space-y-3">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2 text-sm">Street address *</label>
                    <input
                      type="text"
                      placeholder="House number and street name"
                      value={billingDetails.streetAddress}
                      onChange={(e) => handleInputChange('streetAddress', e.target.value)}
                      className="w-full px-3 md:px-4 py-2 md:py-3 bg-gray-50 border bg-light-gray rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-colors text-sm placeholder-gray-400"
                    />
                  </div>
                  <input
                    type="text"
                    placeholder="Apartment, suite, unit etc. (optional)"
                    value={billingDetails.apartment}
                    onChange={(e) => handleInputChange('apartment', e.target.value)}
                    className="w-full px-3 md:px-4 py-2 md:py-3 bg-gray-50 border bg-light-gray rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-colors text-sm placeholder-gray-400"
                  />
                </div>

                {/* City, State, ZIP */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2 text-sm">Town / City *</label>
                    <input
                      type="text"
                      value={billingDetails.city}
                      onChange={(e) => handleInputChange('city', e.target.value)}
                      className="w-full px-3 md:px-4 py-2 md:py-3 bg-gray-50 border bg-light-gray rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-colors text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2 text-sm">State *</label>
                    <input
                      type="text"
                      value={billingDetails.state}
                      onChange={(e) => handleInputChange('state', e.target.value)}
                      className="w-full px-3 md:px-4 py-2 md:py-3 bg-gray-50 border bg-light-gray rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-colors text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2 text-sm">ZIP Code *</label>
                    <input
                      type="text"
                      value={billingDetails.zipCode}
                      onChange={(e) => handleInputChange('zipCode', e.target.value)}
                      className="w-full px-3 md:px-4 py-2 md:py-3 bg-gray-50 border bg-light-gray rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-colors text-sm"
                    />
                  </div>
                  
                </div>

                {/* Phone and Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2 text-sm">Phone *</label>
                    <input
                      type="tel"
                      value={billingDetails.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className="w-full px-3 md:px-4 py-2 md:py-3 bg-gray-50 border bg-light-gray rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-colors text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2 text-sm">Email address *</label>
                    <input
                      type="email"
                      value={billingDetails.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="w-full px-3 md:px-4 py-2 md:py-3 bg-gray-50 border bg-light-gray rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-colors text-sm"
                    />
                  </div>
                </div>

                {/* Checkboxes */}
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <input
                      type="checkbox"
                      id="createAccount"
                      checked={billingDetails.createAccount}
                      onChange={(e) => handleInputChange('createAccount', e.target.checked)}
                      className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 mt-0.5"
                    />
                    <label htmlFor="createAccount" className="text-gray-700 text-sm">
                      Create an account?
                    </label>
                  </div>
                  <div className="flex items-start space-x-3">
                    <input
                      type="checkbox"
                      id="shipToDifferent"
                      checked={billingDetails.shipToDifferent}
                      onChange={(e) => handleInputChange('shipToDifferent', e.target.checked)}
                      className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 mt-0.5"
                    />
                    <label htmlFor="shipToDifferent" className="text-gray-700 text-sm">
                      Ship to a different address?
                    </label>
                  </div>
                </div>

                {/* Order Notes */}
                <div>
                  <label className="block text-gray-700 font-medium mb-2 text-sm">Order notes (optional)</label>
                  <textarea
                    value={billingDetails.orderNotes}
                    onChange={(e) => handleInputChange('orderNotes', e.target.value)}
                    placeholder="Notes about your order, e.g. special notes for delivery"
                    rows={4}
                    className="w-full px-3 md:px-4 py-2 md:py-3 bg-gray-50 border bg-light-gray rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-colors text-sm placeholder-gray-400 resize-none"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Order Summary - Sticky Sidebar */}
          <div className="lg:w-1/3">
            <div 
              className="sticky top-6"
              style={{ position: 'sticky', top: '1.5rem' }}
            >
              <div className="bg-white rounded-lg shadow-sm p-4 md:p-6">
                <h2 className="text-lg md:text-xl font-semibold text-gray-900 mb-6">Your Order</h2>
                
                {/* Order Items */}
                <div className="space-y-4 mb-6">
                  {orderItems.map((item) => (
                    <div key={item.id} className="flex items-center space-x-3">
                      <div className="w-12 h-12 md:w-16 md:h-16 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                        {item.image ? (
                          <img 
                            src={item.image} 
                            alt={item.name}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                            <Package className="w-4 h-4 md:w-6 md:h-6 text-gray-400" />
                          </div>
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-gray-900 font-medium text-sm md:text-base truncate">{item.name}</h3>
                      </div>
                      <span className="text-gray-900 font-semibold text-sm md:text-base">${item.price.toFixed(2)}</span>
                    </div>
                  ))}
                </div>

                <hr className="bg-light-gray mb-4" />

                {/* Subtotal */}
                <div className="flex justify-between items-center mb-4">
                  <span className="text-gray-700 text-sm md:text-base">Subtotal</span>
                  <span className="text-gray-900 font-semibold text-sm md:text-base">${subtotal.toFixed(2)}</span>
                </div>

                <hr className="bg-light-gray mb-4" />

                {/* Shipping */}
                <div className="mb-6">
                  <h4 className="text-gray-900 font-medium mb-3 text-sm md:text-base">Shipping</h4>
                  <div className="space-y-3">
                    {shippingOptions.map((option) => (
                      <div key={option.id} className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <input
                            type="radio"
                            id={option.id}
                            name="shipping"
                            checked={selectedShipping === option.id}
                            onChange={() => setSelectedShipping(option.id)}
                            className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                          />
                          <label htmlFor={option.id} className="text-gray-700 text-sm">
                            {option.name}
                          </label>
                        </div>
                        {option.price > 0 && (
                          <span className="text-gray-900 font-medium text-sm">
                            ${option.price.toFixed(2)}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                <hr className="bg-light-gray mb-4" />

                {/* Total */}
                <div className="flex justify-between items-center mb-6">
                  <span className="text-gray-900 font-semibold text-base md:text-lg">Total</span>
                  <span className="text-gray-900 font-bold text-lg md:text-xl">${total.toFixed(2)}</span>
                </div>

                {/* Payment Methods */}
                <div className="mb-6">
                  <div className="space-y-4">
                    {paymentMethods.map((method) => (
                      <div key={method.id} className="border bg-light-gray rounded-lg p-3 md:p-4">
                        <div className="flex items-center space-x-3 mb-2">
                          <input
                            type="radio"
                            id={method.id}
                            name="payment"
                            checked={selectedPayment === method.id}
                            onChange={() => setSelectedPayment(method.id)}
                            className="w-4 h-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                          />
                          <label htmlFor={method.id} className="text-gray-900 font-medium text-sm md:text-base">
                            {method.name}
                          </label>
                          {method.id === 'paypal' && (
                            <button className="text-blue-600 text-xs underline ml-auto">
                              What is PayPal?
                            </button>
                          )}
                        </div>
                        {selectedPayment === method.id && method.description && (
                          <p className="text-gray-600 text-xs md:text-sm leading-relaxed mt-2 pl-7">
                            {method.description}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Privacy Policy */}
                <div className="mb-6">
                  <p className="text-gray-600 text-xs leading-relaxed mb-4">
                    Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our{' '}
                    <a href="#" className="text-blue-600 underline">privacy policy</a>.
                  </p>
                  
                  <div className="flex items-start space-x-3">
                    <input
                      type="checkbox"
                      id="agreeTerms"
                      checked={agreeToTerms}
                      onChange={(e) => setAgreeToTerms(e.target.checked)}
                      className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 mt-0.5"
                    />
                    <label htmlFor="agreeTerms" className="text-gray-600 text-xs leading-relaxed">
                      I have read and agree to the website terms and conditions *
                    </label>
                  </div>
                </div>

                {/* Place Order Button */}
                <button
                  onClick={handlePlaceOrder}
                  disabled={!agreeToTerms}
                  className="w-full bg-gray-900 text-white font-semibold py-3 md:py-4 rounded-lg hover:bg-gray-800 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors text-sm md:text-base"
                >
                  PLACE ORDER
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>



      <Footer />
    </div>
  );
};

export default CheckoutPage;