import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import page components
import ProductCatalogPage from './pages/ProductCatalog';
import AboutUsPage1 from './pages/AboutUs1';
import AboutUsPage from './pages/AboutUs';
import CamparePage from './pages/Campare';
import CheckoutPage from './pages/Checkout';
import FaqPage from './pages/Faq';
import Loginpage from './pages/Login';
import Registerpage from './pages/Register';
import ShopCatalog from './pages/ShopWithCategory';
import ContactUs from './pages/ContactUs';
import ProductDetailsPage from './pages/ProductDetails';
import ShoppingCart from './pages/ShoppingCart';
import Wishlist from './pages/Wishlist';
import SmartHomeCatalog from './pages/Home';
import ProductGrid from './pages/TestGetProduct';
import ConfirmEmail from './pages/ConfirmEmail';

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/product-catalog" element={<ProductCatalogPage />} />
        <Route path="/about-us1" element={<AboutUsPage1 />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/campare" element={<CamparePage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/shopping-cart" element={<ShoppingCart />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/register" element={<Registerpage />} />
        <Route path="/login" element={<Loginpage />} />  
        <Route path="/product-catalog" element={<ProductCatalogPage />} />
        <Route path="/shop" element={<ShopCatalog />} />
        <Route path="/product/:slug" element={<ProductDetailsPage />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/" element={<SmartHomeCatalog />} />
        <Route path="/test-get-product" element={<ProductGrid />} />
        <Route path="/email-confirm" element={<ConfirmEmail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;