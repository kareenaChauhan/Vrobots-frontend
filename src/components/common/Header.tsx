import React, { useState, useEffect } from 'react';
import { ShoppingCart, User, Search, Heart, Menu, X, ChevronRight, ChevronDown, User2Icon } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import CartWishlistModal from '../ui/CartWishListModal';
import VerticalSidebar from '../ui/VerticalSidebar';
import { contactInfo } from '../../data/SmartHomeData';
import { sidebarNav, headerNav, mobileNav } from '../../data/NavigationData';
import { useCart } from '../../context/CartContext';
import { useWishlistItems } from '../../hooks/useWishlistItems';
import { useAuthContext } from '../../context/AuthContext';

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

const Header: React.FC = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [activeItem, setActiveItem] = React.useState('HOME');
  const [isPagesDropdownOpen, setIsPagesDropdownOpen] = useState(false);
  const [isMobilePagesDropdownOpen, setIsMobilePagesDropdownOpen] = useState(false);
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);
  const [cartModalTab, setCartModalTab] = useState<'cart' | 'wishlist'>('cart');
  const { user, logout } = useAuthContext();
  const { cartCount } = useCart();
  console.log(user);
  const navigate = useNavigate();

  // Check if current page is home page
  const isHomePage =
    // location.pathname === '/home' ||
    location.pathname === '/';

  const { wishlistItems, totalItems: wishlistTotalItems } = useWishlistItems();

  const handleUpdateQuantity = (id: string, quantity: number) => {
    // TODO: Implement quantity update in cart system
    console.log('Update quantity for item:', id, 'to:', quantity);
  };

  const handleRemoveFromCartLocal = (id: string) => {
    // Remove from cart using the product ID
    const productId = parseInt(id);
    // handleRemoveFromCart(productId); // This line was removed as per the edit hint
  };

  const handleRemoveFromWishlist = (id: string) => {
    // Remove from wishlist using the product ID
    const productId = parseInt(id);
    // handleToggleWishlist(productId); // This line was removed as per the edit hint
  };

  const handleMoveToCart = (wishlistItem: WishlistItem) => {
    // TODO: Implement move to cart functionality
    console.log('Move item to cart:', wishlistItem);
  };

  const handleItemClick = (item: any) => {
    setActiveItem(item);
    setIsMobileMenuOpen(false);
  };

  const handleCartIconClick = () => {
    setCartModalTab('cart');
    setIsCartModalOpen(true);
  };

  const handleWishlistIconClick = () => {
    setCartModalTab('wishlist');
    setIsCartModalOpen(true);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
      setIsSticky(currentScrollY > 200);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const getHeaderStyles = () => {
    if (!isSticky) return {};
    const progress = Math.min((scrollY - 200) / 100, 1);
    return {
      opacity: 0.95 + (progress * 0.05),
      transform: `translateY(${-20 * (1 - progress)}px)`,
    };
  };

  // Simple Home Page Header
  if (isHomePage) {
    // Sidebar navigation items and their submenus
    // const sidebarNav = [
    //   { name: 'HOME', path: '/', submenu: [] },
    //   { name: 'SHOP', path: '/shop', submenu: [] },
    //   { name: 'BLOG', path: '/blog', submenu: [] },
    //   { name: 'PAGES', path: '/pages', submenu: [
    //     { name: 'About Us', path: '/about-us' },
    //     { name: 'About Me', path: '/about-me' },
    //     { name: 'Pricing Table', path: '/pricing-table' },
    //     { name: 'Our Gift Vouchers', path: '/gift-vouchers' },
    //     { name: 'What We Do', path: '/what-we-do' },
    //     { name: 'Faqs', path: '/faqs' },
    //     { name: 'Our Team', path: '/our-team' },
    //     { name: 'Contact Us', path: '/contact-us' },
    //     { name: 'Error 404', path: '/404' },
    //     { name: 'Under Construction', path: '/under-construction' },
    //     { name: 'Coming Soon', path: '/coming-soon' },
    //   ] },
    //   { name: 'CONTACT US', path: '/contact', submenu: [] },
    // ];
    const [activeSidebar, setActiveSidebar] = useState('PAGES');

    return (
      <>
        <header className={`relative z-50 flex h-16 md:h-20 w-full transition-colors duration-300 ${isMobileMenuOpen ? 'bg-[#23262b]' : 'bg-[#f5f5f5]'}`}>
          {/* Left: Menu Button */}
          <div className={`h-full w-16 flex items-center justify-center transition-colors duration-300 ${isMobileMenuOpen ? 'bg-[#23262b]' : 'bg-black'}`}>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="hover:bg-gray-800 rounded transition-colors duration-200 p-2"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-white" />
              ) : (
                <Menu className="w-6 h-6 text-white" />
              )}
            </button>
          </div>
          {/* Main header content: flex-1, padding */}
          <div className="flex-1 flex items-center justify-between px-8 h-full">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <span className="text-xl">🌙</span>
              <span className={`text-lg font-medium transition-colors duration-300 ${isMobileMenuOpen ? 'text-white' : 'text-gray-900'}`}>mooncart</span>
            </div>
            {/* Right Section - LOGIN/REGISTER + Icons */}
            <div className="flex items-center gap-6">
              {user ?
                <span onClick={logout}>logout</span>
                // <User2Icon  />
                : <Link to="/login">
                  <span className={`text-sm font-medium hover:text-gray-900 transition-colors duration-200 ${isMobileMenuOpen ? 'text-white' : 'text-gray-600'}`}>LOGIN / REGISTER</span>
                </Link>}

              <div className="flex items-center gap-4">
                <button className={`p-1 rounded transition-colors duration-200 ${isMobileMenuOpen ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}> <Search className={`w-5 h-5 transition-colors duration-200 ${isMobileMenuOpen ? 'text-white' : 'text-gray-600'}`} /> </button>
                <button onClick={handleWishlistIconClick} className={`p-1 rounded transition-colors duration-200 ${isMobileMenuOpen ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}> <Heart className={`w-5 h-5 transition-colors duration-200 ${isMobileMenuOpen ? 'text-white' : 'text-gray-600'}`} /> </button>
                <button onClick={handleCartIconClick} className={`p-1 rounded transition-colors duration-200 relative ${isMobileMenuOpen ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}> <ShoppingCart className={`w-5 h-5 transition-colors duration-200 ${isMobileMenuOpen ? 'text-white' : 'text-gray-600'}`} /> {cartCount > 0 && <span className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 text-white text-xs rounded-full flex items-center justify-center font-medium">{cartCount}</span>} </button>
              </div>
            </div>
          </div>
        </header>

        {/* Two-panel Fullscreen Dropdown for Home Page */}
        <div className={`fixed inset-0 w-full h-full z-40 transition-transform duration-500 ease-in-out ${isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'}`} style={{ background: '#23262b' }}>
          <div className="flex h-full w-full">
            {/* Leftmost Vertical Sidebar */}
            <VerticalSidebar
              backgroundColor="bg-[#23262b]"
              textColor="text-muted "
              hoverColor="text-accent"
              borderColor="border-gray-700"
              items={contactInfo}
              onItemClick={(item, index) => console.log(`Clicked: ${item} at index ${index}`)}
            />
            {/* Sidebar Navigation */}
            <aside className="w-80 max-w-full h-full bg-[#23262b] border-r border-gray-700 flex flex-col justify-between">
              <div>
                {/* Logo */}
                <div className="flex items-center gap-3 px-8 py-8  ">
                  <span className="text-2xl text-white">🌙</span>
                  <span className="text-xl font-medium text-white">mooncart</span>
                </div>
                {/* Navigation */}
                <nav className="flex flex-col gap-2 mt-3">
                  {sidebarNav.map((item) => (
                    <button
                      key={item.name}
                      className={`flex items-center justify-between w-full px-8 py-3 text-left text-white hover:bg-gray-800 transition-colors duration-200 ${activeSidebar === item.name ? 'bg-gray-900 text-emerald-400' : ''}`}
                      onClick={() => {
                        setActiveSidebar(item.name);
                        navigate(item.path);
                        setIsMobileMenuOpen(false);
                      }}
                    >
                      <span className="text-base font-medium tracking-wider">{item.name} </span>
                      <ChevronRight className="w-4 h-4 transform rotate-270" />
                    </button>
                  ))}
                </nav>
              </div>
              {/* Footer */}
              <div className="px-8 py-4 text-gray-500 text-xs  mt-auto">
                © 2023 HugeBinary Theme. All Rights Reserved.
              </div>
            </aside>
            {/* Submenu Panel */}
            <div className="flex-1 flex flex-col justify-start items-start px-16   overflow-auto" >
              {(sidebarNav.find((item) => item.name === activeSidebar)?.submenu?.length ?? 0) > 0 ? (
                <div className="flex flex-col gap-2" style={{ border: "1px solid red" }}>
                  {(sidebarNav.find((item) => item.name === activeSidebar)?.submenu ?? []).map((sub) => (
                    <Link
                      key={sub.name}
                      to={sub.path}
                      className="text-gray-200 hover:text-emerald-400 text-base py-1"
                      onClick={closeMobileMenu}
                    >
                      {sub.name}
                    </Link>
                  ))}
                </div>
              ) : null}
            </div>
            {/* Close Button */}
            <button
              onClick={closeMobileMenu}
              className="absolute top-4 left-4 p-2 rounded-full hover:bg-gray-700 transition-colors z-50"
              aria-label="Close menu"
            >
              <X className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>

        <CartWishlistModal
          isOpen={isCartModalOpen}
          onClose={() => setIsCartModalOpen(false)}
          // cartItems={[]} 
          wishlistItems={wishlistItems}
          onUpdateQuantity={handleUpdateQuantity}
          // onRemoveFromCart={handleRemoveFromCartLocal}
          onRemoveFromWishlist={handleRemoveFromWishlist}
          onMoveToCart={handleMoveToCart}
          initialTab={cartModalTab}
        />
      </>
    );
  }

  // Full Featured Header for Other Pages
  return (
    <>
      <header
        className={`w-full bg-white/95 backdrop-blur-md border-b bg-light-gray transition-all duration-700 ease-out z-50 ${isSticky
          ? 'fixed top-0 left-0 right-0 shadow-xl'
          : 'relative bg-white'
          }`}
        style={getHeaderStyles()}
      >
        <div
          className={`absolute inset-0 bg-gradient-to-r from-white via-white to-gray-50 transition-opacity duration-700 ${isSticky ? 'opacity-100' : 'opacity-0'
            }`}
        />

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex items-center justify-between h-16 md:h-20">
            <div className="flex items-center">
              <div className="flex-shrink-0 transform transition-all duration-500 hover:scale-105">
                <Link to="/">
                  <span className={`text-xl md:text-2xl font-bold transition-all duration-700 ${isSticky
                    ? 'text-gray-900 drop-shadow-sm'
                    : 'text-gray-900'
                    }`}>
                    🌙 mooncart
                  </span>
                </Link>
              </div>
            </div>

            <nav className="hidden lg:flex space-x-6 xl:space-x-8">
              {['HOME', 'SHOP'].map((item, index) => (
                <Link
                  key={item}
                  to={item === 'HOME' ? '/' : `/${item.toLowerCase()}`}
                  onClick={() => handleItemClick(item)}
                  className={`px-3 py-1 text-sm font-medium transition-all duration-300 relative group transform hover:scale-105 ${activeItem === item ? 'text-gray-900' : 'text-gray-500 hover:text-gray-900'
                    }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {item}
                  <span
                    className={`absolute bottom-0 left-0 h-px bg-gray-900 transition-all duration-300 ${activeItem === item ? 'w-full' : 'w-0 group-hover:w-full'
                      }`}
                  ></span>
                </Link>
              ))}
              <div className="relative group">
                <button
                  type="button"
                  onClick={() => setIsPagesDropdownOpen((prev) => !prev)}
                  onBlur={() => setTimeout(() => setIsPagesDropdownOpen(false), 150)}
                  className={`flex items-center px-3 py-1 text-sm font-medium transition-all duration-300 relative group transform hover:scale-105 focus:outline-none ${activeItem === 'PAGES' ? 'text-gray-900' : 'text-gray-500 hover:text-gray-900'
                    }`}
                  style={{ animationDelay: `${4 * 100}ms` }}
                >
                  PAGES
                  <ChevronDown className="ml-1 w-4 h-4 transition-transform duration-200" style={{ transform: isPagesDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)' }} />
                  <span
                    className={`absolute bottom-0 left-0 h-px bg-gray-900 transition-all duration-300 ${activeItem === 'PAGES' ? 'w-full' : 'w-0 group-hover:w-full'
                      }`}
                  ></span>
                </button>
                <div
                  className={`absolute left-0 mt-2 w-40 bg-light-gray backdrop-blur-md border border-gray-200 rounded-lg shadow-lg z-50 overflow-hidden transition-all duration-300
        ${isPagesDropdownOpen ? 'opacity-100 max-h-60 translate-y-0 pointer-events-auto' : 'opacity-0 max-h-0 -translate-y-2 '}`}
                >
                  <Link to="/about-us">
                    <span className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors"
                      onClick={() => { handleItemClick('PAGES'); setIsPagesDropdownOpen(false); }}
                    > About Us</span>
                  </Link>
                  <Link
                    to="/faq"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors"
                    onClick={() => { handleItemClick('PAGES'); setIsPagesDropdownOpen(false); }}
                  >
                    FAQ
                  </Link>
                  <Link
                    to="/contact-us"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors"
                    onClick={() => { handleItemClick('PAGES'); setIsPagesDropdownOpen(false); }}
                  >
                    Contact
                  </Link>
                  {/* <Link
                    to="/product-details"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors"
                    onClick={() => { handleItemClick('PAGES'); setIsPagesDropdownOpen(false); }}
                  >
                    Product Details
                  </Link> */}
                </div>
              </div>
            </nav>

            <div className="flex items-center space-x-3 md:space-x-4">
              {user ? <span onClick={logout}>logout</span> : <Link to="/profile">
                <span className={`hidden md:block text-xs lg:text-sm cursor-pointer transition-all duration-500 hover:scale-105 ${isSticky ? 'text-gray-700' : 'text-gray-600'
                  } hover:text-gray-900`}>
                  LOGIN / REGISTER
                </span>
              </Link>
              }
              {[
                { Icon: Search, delay: '100ms', onClick: undefined },
                { Icon: Heart, delay: '200ms', onClick: handleWishlistIconClick },
              ].map(({ Icon, delay, onClick }, index) => (
                <button
                  key={index}
                  className="p-2 hover:bg-gray-100 rounded-full transition-all duration-500 transform hover:scale-110 hover:rotate-12"
                  style={{ animationDelay: delay }}
                  onClick={onClick}
                >
                  <Icon className={`w-4 h-4 md:w-5 md:h-5 transition-colors duration-500 ${isSticky ? 'text-gray-700' : 'text-gray-600'
                    } hover:text-gray-900`} />
                </button>
              ))}

              <button onClick={handleCartIconClick} className="relative p-2 hover:bg-gray-100 rounded-full transition-all duration-500 transform hover:scale-110 group">
                <ShoppingCart className={`w-4 h-4 md:w-5 md:h-5 transition-all duration-500 group-hover:rotate-12 ${isSticky ? 'text-gray-700' : 'text-gray-600'
                  } hover:text-gray-900`} />
                <span className={`absolute -top-1 -right-1 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs rounded-full w-4 h-4 md:w-5 md:h-5 flex items-center justify-center font-medium transition-all duration-500 transform group-hover:scale-125 group-hover:rotate-12 ${isSticky ? 'shadow-lg' : ''
                  }`}>
                  {cartCount}
                </span>
              </button>

              <button
                className="lg:hidden p-2 hover:bg-gray-100 rounded-full transition-all duration-500 transform hover:scale-110"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle mobile menu"
              >
                <div className={`transition-transform duration-500 ${isMobileMenuOpen ? 'rotate-180' : 'rotate-0'}`}>
                  {isMobileMenuOpen ? (
                    <X className="w-5 h-5 text-gray-600" />
                  ) : (
                    <Menu className="w-5 h-5 text-gray-600" />
                  )}
                </div>
              </button>
            </div>
          </div>
        </div>

        <div
          className={`lg:hidden absolute inset-x-0 top-full bg-white/95 backdrop-blur-md border-t bg-light-gray shadow-2xl transition-all duration-700 ease-out overflow-hidden ${isMobileMenuOpen
            ? 'opacity-100 visible translate-y-0 max-h-screen'
            : 'opacity-0 invisible -translate-y-8 max-h-0'
            }`}
        >
          <div className="container mx-auto px-4 py-6">
            <nav className="flex flex-col space-y-2">
              {['HOME', 'SHOP', 'BLOG', 'PORTFOLIO'].map((item, index) => (
                <Link
                  key={item}
                  to={item === 'HOME' ? '/' : `/${item.toLowerCase()}`}
                  onClick={() => handleItemClick(item)}
                  className={`block px-3 py-2 text-base font-medium transition-all duration-300 rounded-lg transform hover:scale-105 ${activeItem === item ? 'text-gray-900 bg-gray-50' : 'text-gray-500 hover:text-gray-900 hover:bg-gray-50'
                    }`}
                  style={{
                    animationDelay: `${index * 100}ms`,
                    transform: isMobileMenuOpen ? 'translateX(0)' : 'translateX(-20px)'
                  }}
                >
                  {item}
                </Link>
              ))}
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setIsMobilePagesDropdownOpen((prev) => !prev)}
                  className={`flex items-center w-full px-3 py-2 text-base font-medium transition-all duration-300 rounded-lg transform hover:scale-105 focus:outline-none ${activeItem === 'PAGES' ? 'text-gray-900 bg-gray-50' : 'text-gray-500 hover:text-gray-900 hover:bg-gray-50'
                    }`}
                  style={{
                    animationDelay: `${4 * 100}ms`,
                    transform: isMobileMenuOpen ? 'translateX(0)' : 'translateX(-20px)'
                  }}
                >
                  PAGES
                  <ChevronDown className={`ml-2 w-5 h-5 transition-transform duration-200 ${isMobilePagesDropdownOpen ? 'rotate-180' : 'rotate-0'}`} />
                </button>
                {isMobilePagesDropdownOpen && (
                  <div
                    className={`ml-6 mt-1 flex flex-col bg-light-gray backdrop-blur-md border-l border-gray-200 rounded-bl-lg rounded-br-lg shadow overflow-hidden transition-all duration-300
                      ${isMobilePagesDropdownOpen ? 'opacity-100 max-h-60 translate-y-0 pointer-events-auto' : 'opacity-0 max-h-0 -translate-y-2 pointer-events-none'}`}
                    style={{ willChange: 'opacity, max-height, transform' }}
                  >
                    <Link
                      to="/about-us"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors"
                      onClick={() => { handleItemClick('PAGES'); setIsMobilePagesDropdownOpen(false); closeMobileMenu(); }}
                    >
                      About Us
                    </Link>
                    <Link
                      to="/faq"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors"
                      onClick={() => { handleItemClick('PAGES'); setIsMobilePagesDropdownOpen(false); closeMobileMenu(); }}
                    >
                      FAQ
                    </Link>
                    <Link
                      to="/contact-us"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors"
                      onClick={() => { handleItemClick('PAGES'); setIsMobilePagesDropdownOpen(false); closeMobileMenu(); }}
                    >
                      Contact
                    </Link>
                  </div>
                )}
              </div>
              <div className="pt-4 border-t bg-light-gray">
                <Link
                  to="/login"
                  onClick={closeMobileMenu}
                  className="flex items-center px-4 py-3 text-base font-medium transition-all duration-300 rounded-lg transform hover:scale-105 text-gray-500 hover:text-gray-900 hover:bg-gray-50"
                  style={{
                    animationDelay: '500ms',
                    transform: isMobileMenuOpen ? 'translateX(0)' : 'translateX(-20px)'
                  }}
                >
                  <User className="w-5 h-5 mr-3 transition-transform duration-500 hover:rotate-12" />
                  LOGIN / REGISTER
                </Link>
              </div>
            </nav>
          </div>
        </div>
      </header>

      {isMobileMenuOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-all duration-700"
          onClick={closeMobileMenu}
          style={{
            top: isSticky ? '5rem' : 'auto',
            opacity: isMobileMenuOpen ? 1 : 0
          }}
        />
      )}

      <div
        className={`transition-all duration-700 ease-out ${isSticky ? 'h-16 md:h-20' : 'h-0'
          }`}
      />

      <CartWishlistModal
        isOpen={isCartModalOpen}
        onClose={() => setIsCartModalOpen(false)}
        // cartItems={[]} 
        wishlistItems={wishlistItems}
        onUpdateQuantity={handleUpdateQuantity}
        // onRemoveFromCart={handleRemoveFromCartLocal}
        onRemoveFromWishlist={handleRemoveFromWishlist}
        onMoveToCart={handleMoveToCart}
        initialTab={cartModalTab}
      />
    </>
  );
};

export default Header;
