import React from 'react';
import { Heart, ShoppingCart, Star } from 'lucide-react';
import { Product } from '../../types/product';
import Button from '../ui/Button';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';


interface ProductCardProps {
  product: any;
  isInCart: boolean;
  isInWishlist: boolean;
  onAddToCart: any;
  onToggleWishlist: any;
}

const ProductCard: React.FC<ProductCardProps> = React.memo(({
  product,
  isInCart,
  isInWishlist,
  onAddToCart,
  onToggleWishlist,
}) => {
  const { addToCart, isInCart: isInCartContext } = useCart();


  console.log("product slug from all product page", product.slug)
  console.log("prduct ratings from product card",product.rating)
  console.log("prduct original price from product card",product.originalPrice)
  console.log("prduct price from product card",product.price)
  return (

    <div
      className={`group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 ${product.isLarge
          ? 'col-span-1 sm:col-span-2 lg:col-span-2 row-span-1 sm:row-span-2'
          : 'col-span-1 row-span-1'
        }`}
    >
      {/* Product Image Container */}
      <div
        className={`relative bg-gray-100 overflow-hidden ${product.isLarge ? 'aspect-[4/3] sm:aspect-[2/3] lg:aspect-[4/5]' : 'aspect-square'
          }`}
      >
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          loading="lazy"
        />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2 z-10">
          {product.badges?.map((badge : any, index : any) => (
            <span
              key={index}
              className={`px-2 py-1 text-xs font-bold uppercase text-white rounded ${badge === 'Featured'
                  ? 'bg-emerald-600'
                  : badge.includes('%')
                    ? 'bg-black'
                    : 'bg-red-600'
                }`}
            >
              {badge}
            </span>
          ))}
        </div>

        {/* Wishlist Button */}
        <button
          onClick={() => onToggleWishlist(product.id)}
          className={`absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 ${isInWishlist
              ? 'bg-red-500 text-white'
              : 'bg-white/80 text-gray-600 hover:bg-white hover:text-red-500'
            }`}
        >
          <Heart className={`w-4 h-4 ${isInWishlist ? 'fill-current' : ''}`} />
        </button>

        {/* Quick Add to Cart Overlay */}
        {/* <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <Button
            variant="primary"
            onClick={() => onAddToCart(product)}
            className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300"
            icon={ShoppingCart}
            iconPosition="left"
          >
          Add to Cart
          </Button>
        </div> */}
      </div>

      {/* Product Info */}
      <div className={`p-4 ${product.isLarge ? 'sm:p-6' : 'p-4'}`}>
        <div className="mb-3">
          <Link to={`/product/${product.slug}`}>
            <h3
              className={`text-gray-900 font-medium leading-tight mb-2 line-clamp-2 ${product.isLarge ? 'text-lg sm:text-xl' : 'text-base'
                }`}
            >
              {product.name}
            </h3>
          </Link>

          <p className="text-gray-500 text-sm capitalize">{product.category}</p>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-3">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${i < product.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                  }`}
              />
            ))}
          </div>
          <span className="text-gray-500 text-sm">({product.rating})</span>
        </div>

        {/* Price and Stock */}
        <div className="flex items-center justify-between mb-4">
          <div>
            <div className="flex items-center gap-2">
              {product.originalPrice && (
                <span className="text-gray-400 line-through text-sm">
                  ${product.originalPrice}
                </span>
              )}
              <span
                className={`font-bold text-gray-900 ${product.isLarge ? 'text-xl' : 'text-lg'}`}
              >
                ${product.price}
              </span>
            </div>
          </div>
          <div className="text-right">
            <span
              className={`text-xs font-medium px-2 py-1 rounded-full ${product.inStock ? 'text-emerald-700 bg-emerald-100' : 'text-red-700 bg-red-100'
                }`}
            >
              {product.inStock ? 'In Stock' : 'Out of Stock'}
            </span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-3">
          <Button
            variant="primary"
            onClick={() => addToCart(product)}
            disabled={!product.inStock || isInCartContext(product.id)}
            className="flex-1 text-sm"
            icon={ShoppingCart}
            iconPosition="left"
          >
            {isInCartContext(product.id) ? "Added to Cart" : "Add to Cart"}

          </Button>

          <button
            onClick={() => onToggleWishlist(product.id)}
            className={`p-3 border rounded-lg transition-all duration-200 ${isInWishlist
                ? "border-red-500 bg-red-50 text-red-500"
                : "border-gray-300 hover:border-gray-400 text-gray-600 hover:text-red-500"
              }`}
          >
            <Heart className={`w-4 h-4 ${isInWishlist ? "fill-current" : ""}`} />
          </button>
        </div>
      </div>
    </div>

  );
});

ProductCard.displayName = 'ProductCard';

export default ProductCard;