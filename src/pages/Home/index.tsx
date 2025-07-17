import React, { useState } from 'react';
import Header from '../../components/common/Header';
import Button from '../../components/ui/Button';
import { Eye, ShoppingCart, Heart } from 'lucide-react';
import { sliderGroups, categoryLinks, contactInfo } from '../../data/SmartHomeData';
import type { SliderItem } from '../../../src/types/SmartHomeCatalog';
import VerticalSidebar from '../../components/ui/VerticalSidebar'
import { useProducts } from '../../hooks/useProducts';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { toast } from 'react-toastify';
import { parseEditorJsToHtml } from '../../components/editor/rederEditoejs';

const App: React.FC = () => {
    // Fetch products from backend
    const { products, loading, error } = useProducts();
    // Remove sliderGroups and use backend products
    const [currentSliderIndex, setCurrentSliderIndex] = useState(0);
    // Use backend products for selection
    const [selectedProduct, setSelectedProduct] = useState<any>(null);

    // Set selectedProduct when products load
    React.useEffect(() => {
        if (products.length > 0 && !selectedProduct) {
            setSelectedProduct(products[0]);
        }
    }, [products, selectedProduct]);

    // For categoryNumbers, always use ['01','02','03','04'] to match the requested design
    const categoryNumbers = ['01', '02', '03', '04'];
    const productsPerGroup = 4;
    // Only use the first 16 products, split into 4 groups of 4
    const limitedProducts = products.slice(0, 16);
    const groupProducts = limitedProducts.slice(currentSliderIndex * productsPerGroup, (currentSliderIndex + 1) * productsPerGroup);

    const handleSliderChange = (index: number) => {
        setCurrentSliderIndex(index);
        const groupProducts = limitedProducts.slice(index * productsPerGroup, (index + 1) * productsPerGroup);
        setSelectedProduct(groupProducts[0] || null);
    };

    const handleProductSelect = (product: any) => {
        setSelectedProduct(product);
    };

    const { addToCart, isInCart } = useCart();

    const handleAddToCart = (product: any) => {
        if (!isInCart(product.id)) {
            addToCart(product);
            toast.success(`${product.name} added to cart!`);
        }
    };

    const navigate = useNavigate();

    const handleViewDetails = (product: any) => {
        navigate(`/product/${product.slug}`);
    };

    const handleAddToWishlist = (product: any) => {
        console.log('Added to wishlist:', product);
    };

    return (
        <div className="w-full h-screen bg-global-6 flex flex-col overflow-hidden">
            <Header />
            <main className="flex-1 flex overflow-hidden">
                {/* Left Sidebar - Category Numbers */}
                <div className="flex flex-col justify-center items-center w-16 bg-global-6 py-4">
                    <div className="flex flex-col gap-0 items-center">
                        {categoryNumbers.map((number, index) => (
                            <React.Fragment key={number}>
                                <button
                                    onClick={() => handleSliderChange(index)}
                                    className={`transition-all duration-300 uppercase p-1 tracking-[1px] text-sm font-normal leading-4
                                        ${index === currentSliderIndex ? 'text-black scale-150' : 'text-muted hover:text-black hover:scale-105'}
                                    `}
                                >
                                    {number}
                                </button>
                                {index !== categoryNumbers.length - 1 && (
                                    <div className="w-px h-8 bg-muted my-1" />
                                )}
                            </React.Fragment>
                        ))}
                    </div>
                </div>
                {/* Main Content Area */}
                <div className="flex-1 flex"  >
                    {/* Product Grid - Left Section */}
                    <div className="w-1/2  bg-global-6 flex flex-col" >
                        {/* Product Grid */}
                        <div className="flex-1 " >
                            {loading && <div>Loading products...</div>}
                            {error && <div>Error loading products: {error.message}</div>}
                            <div className="grid grid-cols-2  h-full" >
                                {groupProducts.map((product, index) => (
                                    <div
                                        key={product.id}
                                        onClick={() => handleProductSelect(product)}
                                        className={`group cursor-pointer transition-all duration-300 ${selectedProduct && selectedProduct.id === product.id
                                            ? ' ring-accent '
                                            : ''
                                            } ${index % 2 === 0 ? ' ' : ''} pr-1 pb-1 flex flex-col relative overflow-hidden shadow-md bg-white`}
                                    >
                                        {/* Product Image with Hover Overlay */}
                                        <div className="w-full h-full  overflow-hidden relative shadow-sm" >
                                            <img
                                                src={product.image}
                                                alt={product.name}
                                                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                                            />
                                            {/* Hover Overlay with Action Buttons and Title */}
                                            <div className="absolute inset-0  bg-opacity-50 flex items-center justify-center transition-all duration-300 group-hover:items-end group-hover:justify-center group-hover:pb-2">
                                                {/* Product Title (visible by default, hidden on hover) */}
                                                <span
                                                    className="text-global-2 text-center text-lg opacity-100 group-hover:opacity-0 transition-opacity duration-200 absolute w-full left-0 right-0 bottom-3"
                                                >
                                                    {product.name}
                                                </span>
                                                {/* Action Buttons (hidden by default, visible on hover) */}
                                                <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10">
                                                    <button
                                                        onClick={(e) => {
                                                            e.stopPropagation();
                                                            handleViewDetails(product);
                                                        }}
                                                        className="bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full p-2 transition-all duration-200 hover:scale-110"
                                                        title="View Details"
                                                    >
                                                        <Eye className="w-4 h-4 text-gray-700" />
                                                    </button>
                                                    <button
                                                        onClick={(e) => {
                                                            e.stopPropagation();
                                                            handleAddToCart(product);
                                                        }}
                                                        className="bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full p-2 transition-all duration-200 hover:scale-110"
                                                        title="Add to Cart"
                                                        disabled={isInCart(product.id)}
                                                    >
                                                        <ShoppingCart className="w-4 h-4 text-gray-700" />
                                                    </button>
                                                    <button
                                                        onClick={(e) => {
                                                            e.stopPropagation();
                                                            handleAddToWishlist(product);
                                                        }}
                                                        className="bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full p-2 transition-all duration-200 hover:scale-110"
                                                        title="Add to Wishlist" >
                                                        <Heart className="w-4 h-4 text-gray-700" />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    {/* Right Side - Product Detail */}
                    <div className="w-1/2 flex flex-col h-full min-h-0">
                        {/* Main Product Display */}
                        <div className=" min-h-0 bg-white flex h-full w-full" >
                            <div className=" h-full w-full " >
                                {selectedProduct && (
                                    <img
                                        src={selectedProduct.image}
                                        alt={selectedProduct.name}
                                        className="h-full w-full max-h-full max-w-full transition-all duration-300"
                                    />
                                )}
                            </div>
                        </div>
                        {/* Product Details Card - Bottom Section */}
                        <div className="bg-dark p-5">
                            <div className="flex flex-col gap-3">
                                {/* Product Info */}
                                <div className="flex flex-col gap-2">
                                    <h2 className="text-xl font-bold leading-6 text-white">
                                        {selectedProduct ? selectedProduct.name : ''}
                                    </h2>
                                    <p className="text-sm font-normal leading-5 text-gray-300" dangerouslySetInnerHTML={{
                                        __html: selectedProduct ? (() => {
                                            try {
                                                const parsed = typeof selectedProduct.description === 'string'
                                                    ? parseEditorJsToHtml(JSON.parse(selectedProduct.description))
                                                    : parseEditorJsToHtml(selectedProduct.description);
                                                return parsed;
                                            } catch {
                                                return '';
                                            }
                                        })() : ''
                                    }} />
                                </div>
                                {/* Price, Colors, and Actions */}
                                <div className="flex justify-between items-center w-full">
                                    {/* Price and Colors */}
                                    <div className="flex items-center gap-6">
                                        {/* Price */}
                                        <div className="flex flex-col gap-1">
                                            <span className="text-sm font-normal leading-4 text-gray-400">
                                                Price
                                            </span>
                                            <span className="text-2xl font-bold leading-6 text-white">
                                                {selectedProduct ? selectedProduct.price : ''}
                                            </span>
                                        </div>
                                        {/* Colors (optional, if you have color data) */}
                                        {/* <div className="flex flex-col gap-1">
                                            <span className="text-sm font-normal leading-4 text-gray-400">
                                                Available Colors
                                            </span>
                                            <div className="flex items-center gap-2">
                                                {selectedProduct && selectedProduct.colors && selectedProduct.colors.map((color, index) => (
                                                    <div
                                                        key={index}
                                                        className="w-5 h-5 rounded-full border-2 border-gray-300 shadow-sm cursor-pointer hover:scale-110 transition-transform duration-200"
                                                        style={{ backgroundColor: color }}
                                                    />
                                                ))}
                                            </div>
                                        </div> */}
                                    </div>
                                    {/* Action Buttons */}
                                    <div className="flex gap-3">
                                        <Button
                                            onClick={() => selectedProduct && handleAddToCart(selectedProduct)}
                                            className="border-2 bg-white  border-white text- font-semibold text-sm uppercase px-4 py-2 hover:bg-opacity-90 transition-all duration-200"
                                            disabled={selectedProduct && isInCart(selectedProduct.id)}
                                        >
                                            {selectedProduct && isInCart(selectedProduct.id) ? 'Added to Cart' : 'Add to Cart'}
                                        </Button>
                                        <Button
                                            onClick={() => selectedProduct && handleViewDetails(selectedProduct)}
                                            className="border-2 border-white text-white hover:bg-white hover:text-global-2 font-semibold text-sm uppercase px-4 py-2 transition-all duration-200">
                                            View Details
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Right Sidebar - Contact Info */}
                <VerticalSidebar
                    backgroundColor="bg-global-6"
                    textColor="text-muted "
                    hoverColor="text-accent"
                    items={contactInfo}
                    onItemClick={(item, index) => console.log(`Clicked: ${item} at index ${index}`)}
                />
            </main>
            {/* Category Navigation - Bottom Fixed */}
            <div className="w-full bg-global-6 py-4  ">
                <div className="flex justify-center items-center gap-4">
                    <h3 className="text-sm font-bold leading-4 text-global-2">
                        Smart Home Categories :
                    </h3>
                    <div className="flex items-center gap-4">
                        {categoryLinks.map((link, index) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className={`text-xs font-normal leading-3 capitalize transition-colors duration-200 hover:text-accent ${link.active ? 'text-accent font-semibold' : 'text-global-3'
                                    }`}
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;