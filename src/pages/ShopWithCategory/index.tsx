import React, { useState } from "react";
import { Filter, X } from "lucide-react";
import Header from "../../components/common/Header";
import Footer from "../../components/common/Footer";
import Button from "../../components/ui/Button";
import ShopSidebar from "../../components/shop/ShopSidebar";
import ProductGrid from "../../components/shop/ProductGrid";
import Pagination from "../../components/shop/Pagination";
import { useShopFilters } from "../../hooks/useShopFilters";
import { useShopActions } from "../../hooks/useShopActions";
import { useProducts } from "../../hooks/useProducts";
import { useCart } from '../../context/CartContext';

// 🔐 TEMP: Replace with real user email from context/auth later
const USER_EMAIL = "user@example.com";

const ShopCatalog: React.FC = () => {
  const { products, loading, error } = useProducts();
  

  const [currentPage, setCurrentPage] = useState(1);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  console.log("products data fetched here dddf :",products)

  const {
    filters,
    handleColorSelect,
    handleTagSelect,
    handleReset,
    updateFilter,
  } = useShopFilters();

  const {
    handleToggleWishlist,
  } = useShopActions();

  const { addToCart } = useCart();

  const resultsPerPage = 10;
  const totalPages = Math.ceil(products.length / resultsPerPage);

  const paginatedProducts = products.slice(
    (currentPage - 1) * resultsPerPage,
    currentPage * resultsPerPage
  );

  const closeSidebar = () => setSidebarOpen(false);

  const handleAddToCartWrapper = (product: any) => {
    addToCart(product);
  };
  

  if (loading) return <p>Loading products...</p>;
  if (error) return <p>Error loading products: {error.message}</p>;

  return (
    <div className="bg-gray-50 min-h-screen">
      <Header />

      <div className="container mx-auto px-4 py-8 lg:py-16">
        <div className="flex flex-col gap-8">
          {/* Filter Toggle Button - Always Visible */}
          <div className="flex justify-start">
            <Button
              variant="outline"
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="flex items-center justify-center gap-2 px-6 py-3"
            >
              <Filter className="w-4 h-4" />
              Filters
            </Button>
          </div>

          {/* Main Content - Full Width */}
          <div className="space-y-8">
            {/* Products Grid */}
            <ProductGrid
              products={paginatedProducts}
              onAddToCart={handleAddToCartWrapper}
              onToggleWishlist={handleToggleWishlist}
            />

            {/* Pagination */}
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
              totalResults={products.length}
              resultsPerPage={resultsPerPage}
            />
          </div>
        </div>
      </div>

      {/* Filter Sidebar Overlay */}
      {sidebarOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/40 z-[60] transition-all duration-300"
            onClick={closeSidebar}
          />

          {/* Sidebar */}
          <div className="fixed top-0 left-0 h-full w-80 bg-white z-[70] transform transition-transform duration-300 ease-in-out overflow-y-auto shadow-2xl">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
              <div className="flex items-center gap-3">
                <Filter className="w-5 h-5 text-gray-600" />
                <h2 className="text-lg font-semibold text-gray-900">Filters</h2>
              </div>
              <button
                onClick={closeSidebar}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
              >
                <X className="w-5 h-5 text-gray-600" />
              </button>
            </div>

            {/* Sidebar Content */}
            <div className="p-4">
              <ShopSidebar
                filters={filters}
                onColorSelect={handleColorSelect}
                onTagSelect={handleTagSelect}
                onReset={handleReset}
                onUpdateFilter={updateFilter}
                onClose={closeSidebar}
              />
            </div>
          </div>
        </>
      )}

      <Footer />
    </div>
  );
};

export default ShopCatalog;
