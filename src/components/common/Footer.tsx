import React from 'react';
import { ArrowRight, Filter, ShoppingCart, Truck, Package } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t bg-light-gray">
      {/* Features Section with Background Numbers and Hover Effects */}
      <div className="bg-gray-100 py-16 relative overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Feature 1 - Filter & Discover */}
            <div className="relative group">
              {/* Background Number */}
              <div className="absolute -top-4 -right-4 text-8xl font-bold text-gray-200 opacity-30 transition-all duration-500 group-hover:opacity-50 group-hover:scale-110 select-none">
                01
              </div>
              <div className="flex items-start space-x-4 relative z-10 transform transition-all duration-500 group-hover:scale-105">
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-sm transition-all duration-500 group-hover:shadow-lg group-hover:bg-gray-800">
                  <Filter className="w-6 h-6 text-gray-600 transition-all duration-500 group-hover:text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2 transition-colors duration-500 group-hover:text-gray-800">Filter & Discover</h3>
                  <p className="text-sm text-gray-600 transition-colors duration-500 group-hover:text-gray-700">Lorem Ipsum is simply dummy text of the printing and typesetting</p>
                </div>
              </div>
            </div>
            
            {/* Feature 2 - Add to Cart */}
            <div className="relative group">
              {/* Background Number */}
              <div className="absolute -top-4 -right-4 text-8xl font-bold text-gray-200 opacity-30 transition-all duration-500 group-hover:opacity-50 group-hover:scale-110 select-none">
                02
              </div>
              <div className="flex items-start space-x-4 relative z-10 transform transition-all duration-500 group-hover:scale-105">
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-sm transition-all duration-500 group-hover:shadow-lg group-hover:bg-gray-800">
                  <ShoppingCart className="w-6 h-6 text-gray-600 transition-all duration-500 group-hover:text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2 transition-colors duration-500 group-hover:text-gray-800">Add to cart</h3>
                  <p className="text-sm text-gray-600 transition-colors duration-500 group-hover:text-gray-700">Lorem Ipsum is simply dummy text of the printing and typesetting</p>
                </div>
              </div>
            </div>
            
            {/* Feature 3 - Fast Shipping */}
            <div className="relative group">
              {/* Background Number */}
              <div className="absolute -top-4 -right-4 text-8xl font-bold text-gray-200 opacity-30 transition-all duration-500 group-hover:opacity-50 group-hover:scale-110 select-none">
                03
              </div>
              <div className="flex items-start space-x-4 relative z-10 transform transition-all duration-500 group-hover:scale-105">
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-sm transition-all duration-500 group-hover:shadow-lg group-hover:bg-gray-800">
                  <Truck className="w-6 h-6 text-gray-600 transition-all duration-500 group-hover:text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2 transition-colors duration-500 group-hover:text-gray-800">Fast Shipping</h3>
                  <p className="text-sm text-gray-600 transition-colors duration-500 group-hover:text-gray-700">Lorem Ipsum is simply dummy text of the printing and typesetting</p>
                </div>
              </div>
            </div>
            
            {/* Feature 4 - Enjoy The Product */}
            <div className="relative group">
              {/* Background Number */}
              <div className="absolute -top-4 -right-4 text-8xl font-bold text-gray-200 opacity-30 transition-all duration-500 group-hover:opacity-50 group-hover:scale-110 select-none">
                04
              </div>
              <div className="flex items-start space-x-4 relative z-10 transform transition-all duration-500 group-hover:scale-105">
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-sm transition-all duration-500 group-hover:shadow-lg group-hover:bg-gray-800">
                  <Package className="w-6 h-6 text-gray-600 transition-all duration-500 group-hover:text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2 transition-colors duration-500 group-hover:text-gray-800">Enjoy The Product</h3>
                  <p className="text-sm text-gray-600 transition-colors duration-500 group-hover:text-gray-700">Lorem Ipsum is simply dummy text of the printing and typesetting</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Company Info */}
            <div className="md:col-span-1">
              <div className="mb-6">
                <span className="text-2xl font-bold text-gray-900">🌙 mooncart</span>
              </div>
              <div className="space-y-2 text-sm text-gray-600">
                <p>Address: 451 Wall Street, UK, London</p>
                <p>E-mail: example@info.com</p>
                <p>Phone: (064) 332-1233</p>
              </div>
              <div className="mt-6">
                <h4 className="font-semibold text-gray-900 mb-3">Subscribe To Our Newsletter</h4>
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Your Email Address"
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-l-md text-sm focus:outline-none focus:ring-2 focus:ring-gray-900"
                  />
                  <button className="px-4 py-2 bg-gray-900 text-white rounded-r-md hover:bg-gray-800 transition-colors">
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Recent Posts with Product Images */}
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Recent Posts</h4>
              <div className="space-y-4">
                <div className="flex space-x-3 group cursor-pointer">
                  <div className="w-12 h-12 bg-gray-200 rounded overflow-hidden transform transition-all duration-300 group-hover:scale-110">
                    <img 
                      src="https://mooncart.dexignzone.com/xhtml/images/shop/product/small/1.png" 
                      alt="Wooden Water Bottles"
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <div>
                    <h5 className="text-sm font-medium text-gray-900 transition-colors duration-300 group-hover:text-gray-700">Wooden Water Bottles</h5>
                    <p className="text-xs text-gray-500">July 23, 2023</p>
                  </div>
                </div>
                <div className="flex space-x-3 group cursor-pointer">
                  <div className="w-12 h-12 bg-gray-200 rounded overflow-hidden transform transition-all duration-300 group-hover:scale-110">
                    <img 
                      src="https://mooncart.dexignzone.com/xhtml/images/shop/product/small/2.png" 
                      alt="Eco friendly bags"
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <div>
                    <h5 className="text-sm font-medium text-gray-900 transition-colors duration-300 group-hover:text-gray-700">Eco friendly bags</h5>
                    <p className="text-xs text-gray-500">July 23, 2023</p>
                  </div>
                </div>
                <div className="flex space-x-3 group cursor-pointer">
                  <div className="w-12 h-12 bg-gray-200 rounded overflow-hidden transform transition-all duration-300 group-hover:scale-110">
                    <img 
                      src="https://mooncart.dexignzone.com/xhtml/images/shop/product/small/3.png" 
                      alt="Bamboo toothbrushes"
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <div>
                    <h5 className="text-sm font-medium text-gray-900 transition-colors duration-300 group-hover:text-gray-700">Bamboo toothbrushes</h5>
                    <p className="text-xs text-gray-500">July 23, 2023</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Our Stores */}
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Our Stores</h4>
              <div className="space-y-2 text-sm text-gray-600">
                <p className="hover:text-gray-900 cursor-pointer transition-colors duration-300">New York</p>
                <p className="hover:text-gray-900 cursor-pointer transition-colors duration-300">London SF</p>
                <p className="hover:text-gray-900 cursor-pointer transition-colors duration-300">Edinburgh</p>
                <p className="hover:text-gray-900 cursor-pointer transition-colors duration-300">Los Angeles</p>
                <p className="hover:text-gray-900 cursor-pointer transition-colors duration-300">Chicago</p>
                <p className="hover:text-gray-900 cursor-pointer transition-colors duration-300">Las Vegas</p>
              </div>
            </div>

            {/* Useful Links */}
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Useful Links</h4>
              <div className="space-y-2 text-sm text-gray-600">
                <p className="hover:text-gray-900 cursor-pointer transition-colors duration-300">Privacy Policy</p>
                <p className="hover:text-gray-900 cursor-pointer transition-colors duration-300">Returns</p>
                <p className="hover:text-gray-900 cursor-pointer transition-colors duration-300">Terms & Conditions</p>
                <p className="hover:text-gray-900 cursor-pointer transition-colors duration-300">Contact Us</p>
                <p className="hover:text-gray-900 cursor-pointer transition-colors duration-300">Latest News</p>
                <p className="hover:text-gray-900 cursor-pointer transition-colors duration-300">Our Sitemap</p>
              </div>
            </div>

            {/* Footer Menu */}
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Footer Menu</h4>
              <div className="space-y-2 text-sm text-gray-600">
                <p className="hover:text-gray-900 cursor-pointer transition-colors duration-300">Instagram profile</p>
                <p className="hover:text-gray-900 cursor-pointer transition-colors duration-300">New Collection</p>
                <p className="hover:text-gray-900 cursor-pointer transition-colors duration-300">Woman Dress</p>
                <p className="hover:text-gray-900 cursor-pointer transition-colors duration-300">Contact Us</p>
                <p className="hover:text-gray-900 cursor-pointer transition-colors duration-300">Latest News</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer with Payment Methods */}
        <div className="border-t bg-light-gray">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-sm text-gray-600">© 2023 Hugebinary Theme. All Rights Reserved.</p>
              
              {/* We Accept Payment Methods */}
              <div className="flex items-center space-x-4 mt-4 md:mt-0">
                <span className="text-sm text-gray-600">We Accept:</span>
                <div className="flex items-center space-x-2">
                  {/* Payment Method Icons */}
                  <div className="w-8 h-5 bg-blue-600 rounded flex items-center justify-center">
                    <span className="text-white text-xs font-bold">V</span>
                  </div>
                  <div className="w-8 h-5 bg-red-600 rounded flex items-center justify-center">
                    <span className="text-white text-xs font-bold">M</span>
                  </div>
                  <div className="w-8 h-5 bg-blue-500 rounded flex items-center justify-center">
                    <span className="text-white text-xs font-bold">AE</span>
                  </div>
                  <div className="w-8 h-5 bg-yellow-500 rounded flex items-center justify-center">
                    <span className="text-white text-xs font-bold">PP</span>
                  </div>
                  <div className="w-8 h-5 bg-green-600 rounded flex items-center justify-center">
                    <span className="text-white text-xs font-bold">G</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;