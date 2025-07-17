import React, { useState } from 'react';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import RatingBar from '../../components/ui/RatingBar';
import Button from '../../components/ui/Button';
import Pagination from '../../components/ui/Pagination';

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  rating: number;
  reviews: number;
  image: string;
  badges?: string[];
  isLarge?: boolean;
}

const ProductCatalog: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [cart, setCart] = useState<number[]>([]);
  const [wishlist, setWishlist] = useState<number[]>([]);

  const products: Product[] = [
    {
      id: 1,
      name: "Yoga mats and accessories",
      category: "Accessories, Clocks",
      price: 40.00,
      rating: 4,
      reviews: 370,
      image: "/images/img_rectangle_225.png",
      isLarge: true
    },
    {
      id: 2,
      name: "Wooden Water Bottles",
      category: "Accessories, Clocks",
      price: 40.00,
      rating: 4,
      reviews: 370,
      image: "/images/img_rectangle_225.png"
    },
    {
      id: 3,
      name: "Wooden Water Bottles",
      category: "Accessories, Clocks",
      price: 40.00,
      rating: 4,
      reviews: 370,
      image: "/images/img_rectangle_225.png",
      badges: ["-31%", "Featured"]
    },
    {
      id: 4,
      name: "Yoga mats and accessories",
      category: "Accessories, Clocks",
      price: 40.00,
      rating: 4,
      reviews: 370,
      image: "/images/img_rectangle_225.png",
      badges: ["-31%", "Featured"]
    },
    {
      id: 5,
      name: "Bamboo toothbrushes",
      category: "Accessories, Clocks",
      price: 40.00,
      rating: 4,
      reviews: 370,
      image: "/images/img_rectangle_225.png",
      badges: ["Sale"]
    },
    {
      id: 6,
      name: "Wooden Water Bottles",
      category: "Accessories, Clocks",
      price: 40.00,
      rating: 4,
      reviews: 370,
      image: "/images/img_rectangle_225.png"
    },
    {
      id: 7,
      name: "Wooden Water Bottles",
      category: "Accessories, Clocks",
      price: 40.00,
      rating: 4,
      reviews: 370,
      image: "/images/img_rectangle_225.png",
      badges: ["-31%", "Featured"]
    },
    {
      id: 8,
      name: "Yoga mats and accessories",
      category: "Accessories, Clocks",
      price: 40.00,
      rating: 4,
      reviews: 370,
      image: "/images/img_rectangle_225.png",
      badges: ["-31%", "Featured"]
    },
    {
      id: 9,
      name: "Bamboo toothbrushes",
      category: "Accessories, Clocks",
      price: 40.00,
      rating: 4,
      reviews: 370,
      image: "/images/img_rectangle_225.png",
      badges: ["Sale"]
    },
    {
      id: 10,
      name: "Yoga mats and accessories",
      category: "Accessories, Clocks",
      price: 40.00,
      rating: 4,
      reviews: 370,
      image: "/images/img_rectangle_225.png",
      isLarge: true
    }
  ];

  const handleAddToCart = (productId: number) => {
    setCart(prev => [...prev, productId]);
    alert(`Product ${productId} added to cart!`);
  };

  const handleToggleWishlist = (productId: number) => {
    setWishlist(prev => 
      prev.includes(productId) 
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const ProductCard: React.FC<{ product: Product }> = ({ product }) => (
    <div className={`bg-primary rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow ${
      product.isLarge ? 'md:col-span-2 md:row-span-2' : ''
    }`}>
      <div className="relative bg-medium-gray aspect-square">
        {product.badges && (
          <div className="absolute top-4 left-4 right-4 flex justify-between items-start z-10">
            <div className="flex flex-col space-y-2">
              {product.badges.map((badge, index) => (
                <span
                  key={index}
                  className={`px-3 py-1 text-xs font-semibold uppercase text-white rounded ${
                    badge === 'Featured' ? 'bg-accent' : 'bg-black'
                  }`}
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>
        )}
        <div className="w-full h-full bg-border flex items-center justify-center">
          <div className="text-gray-400 text-sm">Product Image</div>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div className="flex-1">
            <h3 className="text-dark font-dm-sans text-lg font-medium leading-6 mb-2">
              {product.name}
            </h3>
            <p className="text-accent font-roboto text-sm leading-4 capitalize mb-3">
              {product.category}
            </p>
            <div className="flex items-center space-x-4 mb-4">
              <RatingBar rating={product.rating} size="sm" />
              <span className="text-light font-roboto text-xs leading-4">
                {product.reviews} Review
              </span>
            </div>
          </div>
          <div className="text-right">
            <p className="text-light font-roboto text-sm leading-4 capitalize mb-1">
              Price
            </p>
            <p className="text-primary font-dm-sans text-lg font-bold leading-6 capitalize">
              ${product.price.toFixed(2)}
            </p>
          </div>
        </div>
        
        <div className="flex items-center space-x-3">
          <Button
            variant="primary"
            size="md"
            fullWidth
            onClick={() => handleAddToCart(product.id)}
            className="flex-1 rounded-none"
          >
            Add To Cart
          </Button>
          <button
            onClick={() => handleToggleWishlist(product.id)}
            className={`p-3 border border-light rounded-none transition-colors ${
              wishlist.includes(product.id)
                ? 'bg-accent border-accent' :'bg-primary hover:bg-gray-50'
            }`}
          >
            <img 
              src="/images/img_frame_9255.svg" 
              alt="Add to Wishlist" 
              className="h-5 w-5"
            />
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-primary">
      <Header />
      
      <main className="container mx-auto px-4 py-16">
        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-16">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div> 

        {/* Pagination */}
        <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <p className="text-primary font-roboto text-sm leading-4">
            Showing 1–5 Of 50 Results
          </p>
          
          <div className="flex items-center space-x-2">
            <button
              onClick={() => handlePageChange(1)}
              className={`px-4 py-2 text-sm font-roboto leading-4 uppercase rounded ${
                currentPage === 1
                  ? 'bg-quaternary text-primary' :'bg-primary text-primary hover:bg-gray-50'
              }`}
            >
              1
            </button>
            <button
              onClick={() => handlePageChange(2)}
              className={`px-4 py-2 text-sm font-roboto leading-4 uppercase rounded ${
                currentPage === 2
                  ? 'bg-quaternary text-primary' :'bg-primary text-primary hover:bg-gray-50'
              }`}
            >
              2
            </button>
            <button
              onClick={() => handlePageChange(3)}
              className={`px-4 py-2 text-sm font-roboto leading-4 uppercase rounded ${
                currentPage === 3
                  ? 'bg-quaternary text-primary' :'bg-primary text-primary hover:bg-gray-50'
              }`}
            >
              3
            </button>
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              className="px-4 py-2 text-sm font-roboto leading-4 uppercase bg-primary text-primary hover:bg-gray-50 rounded"
            >
              Next
            </button>
          </div>
        </div>
      </main>

    <Footer />
    </div>
  );
};

export default ProductCatalog;