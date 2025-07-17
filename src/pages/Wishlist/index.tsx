import React, { useState } from 'react';
import { Heart, ShoppingCart, ArrowLeft, X, Plus, Star, Filter, Grid, List } from 'lucide-react';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import BreadCrumb from '../../components/ui/BreadCrumb';
import Button from '../../components/ui/Button';
import WishlistTable from '../../components/ui/WishlistTable';

export interface WishlistItem {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviews: number;
  inStock: boolean;
  category: string;
  description: string;
}

const Wishlist: React.FC = () => {
  const [wishlistItems, setWishlistItems] = useState<WishlistItem[]>([
    {
      id: '1',
      name: 'Bamboo Water Bottle',
      price: 28.00,
      originalPrice: 45.00,
      image: 'https://images.pexels.com/photos/6995122/pexels-photo-6995122.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 4.8,
      reviews: 124,
      inStock: true,
      category: 'Drinkware',
      description: 'Eco-friendly bamboo water bottle with leak-proof design'
    },
    
    {
      id: '3',
      name: 'Bamboo Toothbrush Set',
      price: 20.00,
      originalPrice: 28.00,
      image: 'https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 4.9,
      reviews: 156,
      inStock: false,
      category: 'Personal Care',
      description: 'Set of 4 biodegradable bamboo toothbrushes'
    },
    {
      id: '4',
      name: 'Eco-Friendly Coffee Cup',
      price: 32.00,
      image: 'https://images.pexels.com/photos/302894/pexels-photo-302894.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 4.7,
      reviews: 203,
      inStock: true,
      category: 'Drinkware',
      description: 'Reusable coffee cup made from sustainable materials'
    },
    {
      id: '5',
      name: 'Natural Soap Set',
      price: 18.00,
      originalPrice: 24.00,
      image: 'https://images.pexels.com/photos/4465831/pexels-photo-4465831.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 4.5,
      reviews: 67,
      inStock: true,
      category: 'Personal Care',
      description: 'Handmade natural soap set with essential oils'
    },
    {
      id: '6',
      name: 'Wooden Phone Stand',
      price: 15.00,
      image: 'https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=400',
      rating: 4.4,
      reviews: 45,
      inStock: true,
      category: 'Accessories',
      description: 'Handcrafted wooden phone stand for desk organization'
    }
  ]);

  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [removingItems, setRemovingItems] = useState<Set<string>>(new Set());

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Wishlist', active: true }
  ];

  const categories = ['all', 'Drinkware', 'Bags', 'Personal Care', 'Accessories'];

  const filteredItems = selectedCategory === 'all'
    ? wishlistItems
    : wishlistItems.filter(item => item.category === selectedCategory);

  const handleRemoveItem = (id: string) => {
    setRemovingItems(prev => new Set(prev).add(id));
    setTimeout(() => {
      setWishlistItems(items => items.filter(item => item.id !== id));
      setRemovingItems(prev => {
        const newSet = new Set(prev);
        newSet.delete(id);
        return newSet;
      });
    }, 300);
  };

  const handleAddToCart = (item: WishlistItem) => {
    console.log('Adding to cart:', item);
    // Add animation or notification here
  };

  const handleMoveAllToCart = () => {
    console.log('Moving all items to cart');
    // Add logic to move all items to cart
  };

  const handleClearWishlist = () => {
    if (window.confirm('Are you sure you want to clear your entire wishlist?')) {
      setWishlistItems([]);
    }
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < Math.floor(rating)
            ? 'text-yellow-400 fill-current'
            : i < rating
              ? 'text-yellow-400 fill-current opacity-50'
              : 'text-gray-300'
          }`}
      />
    ));
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Hero Section with Header */}
      <div className="relative  overflow-hidden" style={{ backgroundImage: "url('/images/img__0x0.png')" }}>
        <div className="relative z-10">
          <Header />
          <div className="text-center py-16 sm:py-20 lg:py-24 px-4">
            <h1 className="text-2xl sm:text-2xl lg:text-3xl font-bold  mb-6 leading-tight">
             Wishlist
            </h1>
            <BreadCrumb items={breadcrumbItems} className="justify-center" />
          </div>
        </div>
      </div>

      {/* Main Content */}

      <div className="flex-1 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <WishlistTable
            items={wishlistItems}
            onAddToCart={(id) => console.log("Add to cart:", id)}
            onRemove={(id) => console.log("Remove from wishlist:", id)}
          />
        </div>
      </div>

      <div className="flex-1 space-y-8">

      </div>


      <Footer />
    </div>
  );
};

export default Wishlist;