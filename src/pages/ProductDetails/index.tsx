import React, { useState, useEffect } from 'react';
import Button from '../../components/ui/Button';
import ChipView from '../../components/ui/ChipView';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import { useParams } from 'react-router-dom';
import { blogPosts, companyLogos, specifications, safetyCertifications, safetyFeatures } from '../../data/DetailBlogData';
import { useProductBySlug } from '../../hooks/useProductBySlug';
import { parseEditorJsToHtml } from '../../components/editor/rederEditoejs';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '../../context/CartContext';

const BabyProducts: React.FC = () => {
  const { slug } = useParams();
  const { product, loading, error } = useProductBySlug(slug);
  const { addToCart, isInCart } = useCart();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading product</p>;
  if (!product) return <p>Product not found</p>;

  // console.log("product slug in product detail page ", product.slug);
  console.log("product in detail page ", product);
  // console.log("Product description:", product.description);

  const descriptionHtml = (() => {
    try {
      const parsed =
        typeof product.description === 'string'
          ? JSON.parse(product.description)
          : product.description;
      return parseEditorJsToHtml(parsed);
    } catch (err) {
      console.error("Failed to parse description:", err);
      return '';
    }
  })();
  const chipItems = [
    { id: 'add-to-cart', label: 'ADD TO CART', variant: 'filled' as const },
    { id: 'view-details', label: 'VIEW DETAILS', variant: 'outlined' as const }
  ];
  const features = [
    {
      title: 'All-in-One Car Seat',
      description: 'One car seat that fits your child, vehicle\nand life from birth through booster'
    },
    {
      title: 'Space-Saving Design',
      description: 'Slim, space-saving design takes up less\nspace in vehicle without compromising\ncomfort'
    },
    {
      title: 'Easiest to Install Correctly',
      description: 'Chicco patented SuperCinch force-\nmultiplying LATCH tightener ensures a\ntight and secure fit every time'
    },
    {
      title: 'No Added Chemicals',
      description: 'ClearTex products meet federal\nflammability standards without added\nchemicals'
    }
  ];

  const handleChipClick = (chipId: string) => {
    if (chipId === 'add-to-cart') {
      console.log('Added to cart');
    } else if (chipId === 'view-details') {
      console.log('View details');
    }
  };

  return (
    <div className="w-full  overflow-x-hidden">
      {/* Contact Info Sidebar */}
      <Header />

      {/* Main Content */}
      <div className=" ">
        {/* Hero Section */}
        <section
          className="relative min-h-screen bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/img__0x0.png')" }}
        >
          <div className="w-full max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
            <div className="flex flex-col lg:flex-row items-start justify-between gap-8 lg:gap-12">
              {/* Product Info */}
              <div className="w-full lg:w-1/3 order-2 lg:order-1">
                <div className="mb-4">
                  <p className="text-sm text-global-3 uppercase tracking-wide mb-4">
                    {product.category}
                  </p>
                  <h1 className="text-xl sm:text-xl lg:text-2xl font-semibold text-global-2 leading-tight mb-6">
                    {product.name}
                  </h1>
                </div>
                {/* Price and Color */}
                <div className="mb-8">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-sm text-global-3">Price</span>
                  </div>
                  <div className="flex justify-between items-center mb-8">
                    <span className="text-2xl font-medium text-global-2">${product.price}</span>
                  </div>
                </div>
                {/* Add to Cart Button */}
                <Button
                  variant="primary"
                  onClick={() => addToCart({ ...product, image: product.image[0]?.url.replace("http://localhost:8000", "http://13.200.195.70:8000"), quantity: 1 })}
                  disabled={isInCart(product.id)}
                  leftIcon={<ShoppingCart className="w-4 h-4" />}
                  className="mb-6 w-full"
                >
                  {isInCart(product.id) ? 'Added to Cart' : 'Add to Cart'}
                </Button>
              </div>

              {/* Product Image */}
              <div className="w-full lg:w-1/2 order-1 lg:order-2">
                <img
                  src={product.image[0]?.url.replace("http://localhost:8000", "http://13.200.195.70:8000")}
                  alt="Car seat product"
                  className="w-full h-auto max-w-lg mx-auto"
                />
              </div>

              {/* Safety Certifications */}
              <div className="w-full lg:w-1/4 order-3">
                <h2 className="text-2xl font-semibold text-global-2 mb-6">
                  Safety Certified
                </h2>
                <div className="space-y-6 mb-8">
                  {safetyCertifications.map((cert) => (
                    <div key={cert.id} className="flex items-center gap-4">
                      <img
                        src={cert.icon}
                        alt={cert.title}
                        className="w-12 h-12"
                      />
                      <div>
                        <p className="text-sm font-medium text-global-1">{cert.title}</p>
                        <p className="text-xl font-semibold text-global-2">{cert.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="space-y-4 mb-8">
                  {safetyFeatures.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <img
                        src="/images/img_component_3.svg"
                        alt="Feature icon"
                        className="w-6 h-6"
                      />
                      <span className="text-lg font-semibold text-global-2 whitespace-pre-line">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Video Preview */}
                <div className="relative bg-global-3 rounded-lg p-8 text-center">
                  <div className="relative mb-4">
                    <img
                      src="/images/img__130x130.png"
                      alt="Video preview"
                      className="w-32 h-32 mx-auto rounded-lg"
                    />
                    <button className="absolute inset-0 flex items-center justify-center">
                      <img
                        src="/images/img_link.svg"
                        alt="Play video"
                        className="w-12 h-12"
                      />
                    </button>
                  </div>
                  <p className="text-base font-semibold text-global-4 leading-tight">
                    Enjoy the best<br />
                    quality and<br />
                    features made by<br />
                    MoonCart.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Star Rewards Section */}
        <section className="bg-global-7 border-t border-gray-200 py-16">
          <div className="w-full max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col  lg:flex-row items-center justify-between gap-8">
              <div className="flex flex-col  items-center gap-8 xs:flex-col sm:flex-col  md:flex-col  lg:flex-row">
                <div>
                  <h3 className="text-2xl font-bold text-global-2 mb-2">Hi there!</h3>
                  <div className="flex items-center gap-2">
                    <img
                      src="/images/img_component_3_teal_700.svg"
                      alt="Star icon"
                      className="w-4 h-4"
                    />
                    <span className="text-sm font-semibold text-global-3 uppercase">
                      Star Rewards
                    </span>
                  </div>
                </div>
                <div className=''>
                  <p className="text-sm text-global-3 mb-2">
                    Start earning points on purchases, get free shipping at $25+ and more.
                  </p>
                  <button className="text-sm text-global-2 border-b border-global-1">
                    Join Star Rewards
                  </button>
                </div>
              </div>

              <div className="flex items-center gap-8">
                <div>
                  <h4 className="text-base font-bold text-global-2 mb-2">
                    Deals on<br />our radar
                  </h4>
                  <button className="text-sm text-global-2 border-b border-global-1">
                    Shop all
                  </button>
                </div>
                <div className="flex items-center gap-4">
                  <img
                    src="/images/img_1_png.png"
                    alt="Wooden Water Bottles"
                    className="w-16 h-16 rounded"
                  />
                  <div>
                    <h5 className="text-base font-bold text-global-2">
                      Wooden Water<br />Bottles
                    </h5>
                    <p className="text-xs text-global-2">July 23, 2023</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <img
                    src="/images/img_2_png.png"
                    alt="Eco friendly bags"
                    className="w-16 h-16 rounded"
                  />
                  <div>
                    <h5 className="text-base font-bold text-global-2">
                      Eco friendly<br />bags
                    </h5>
                    <p className="text-xs text-global-2">July 23, 2023</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Product Details Section */}
        <section className="relative py-16 lg:py-24">
          <div className="absolute inset-0">
            <img
              src="/images/img_bg_triangle_png.png"
              alt="Background"
              className="absolute left-0 top-0 w-80 h-full object-cover"
            />
            <div className="absolute inset-0 bg-global-8"></div>
          </div>
          <div className="relative w-full max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
              <div className="w-full lg:w-1/2">
              <div
                    className="text-2xl lg:text-3xl font-bold text-global-2 leading-relaxed mb-8"
                    dangerouslySetInnerHTML={{ __html: descriptionHtml }}
                  />

                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-bold text-global-2 mb-4">Fabric Content</h3>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <p className="text-base">
                        <span className="font-semibold">Seatpad: </span>
                        <span>100% Polyester</span>
                      </p>
                      <p className="text-base">
                        <span className="font-semibold">Insert: </span>
                        <span>100% Polyester</span>
                      </p>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-global-2 mb-2">Chemical Statement</h3>
                    <p className="text-base text-global-3 leading-relaxed">
                      The OneFit ClearTex All-In-One Car Seat is produced without the use of intentionally
                      added fire retardant chemical treatments, PFAS, BPA and phthalates.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 mt-8">
                  {product?.image?.slice(0, 4).map((img: any, index: any) => (
                    <img
                      key={index}
                      src={img.url.replace("http://localhost:8000", "http://13.200.195.70:8000")}
                      alt={img.alt || `Seat view ${index + 1}`}
                      className="w-32 h-32 object-cover border rounded"
                    />
                  ))}
                </div>
              </div>

              <div className="w-full lg:w-1/2">
                <img
                  src={product.image[1]?.url.replace("http://localhost:8000", "http://13.200.195.70:8000")}
                  alt="Car seat detailed view"
                  className="w-full h-auto max-w-lg mx-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="bg-global-8 py-16">
          <div className="w-full max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-global-5 p-8 text-center">
                  <h3 className="text-xl font-bold text-global-2 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-global-3 leading-relaxed whitespace-pre-line">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Detailed Specifications Section */}
        <section className="relative py-16 lg:py-24">
          <div className="absolute inset-0">
            <img
              src="/images/img_bg_triangle3_png.png"
              alt="Background"
              className="absolute left-0 top-0 w-80 h-full object-cover"
            />
            <div className="absolute inset-0 bg-global-8"></div>
          </div>
          <div className="relative w-full max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
              <div className="w-full lg:w-1/2">
                <img
                  src={product.image[3]?.url.replace("http://localhost:8000", "http://13.200.195.70:8000")}
                  alt={product.name}
                  className="w-full h-auto max-w-lg mx-auto"
                />
              </div>

              <div className="w-full lg:w-1/2">
                <h2 className="text-2xl lg:text-3xl font-bold text-global-2 mb-6">
                  Fits Your Child
                </h2>
                <p className="text-base text-global-3 leading-relaxed mb-8">
                  Designed for superior child comfort, OneFit™ provides extra rear-facing legroom and
                  multiple recline options in every mode of use. With the widest range of height
                  adjustments, the easy-adjust headrest system adjusts with the harness to grow with your
                  child. OneFit™ accommodates tiny passengers from the very start with a removable head
                  and body support insert for newborns weighing 5-11 lbs.
                </p>

                <div className="mb-8">
                  <h3 className="text-xl font-bold text-global-2 mb-4">Specifications</h3>
                  <div className="space-y-2">
                    <p className="text-base text-global-3">
                      Assembled Dimensions (L x W x H): 21.5" x 19" x 27"
                    </p>
                    <p className="text-base text-global-3">
                      Assembled Product Weight: 25 lbs.
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  {specifications.map((spec, index) => (
                    <div key={index} className="flex justify-between items-center py-2">
                      <span className="text-base text-global-3">{spec.label}</span>
                      <span className="text-base text-global-3">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Deal of the Month Section */}
        <section
          className="relative py-16 lg:py-20 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/img__1.png')" }}
        >
          <div className="absolute inset-0 bg-global-1"></div>
          <div className="relative w-full max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-12">
              {/* Left: Deal Info */}
              <div className="w-full lg:w-1/2 text-global-4 flex flex-col justify-between">
                <p className="text-sm uppercase tracking-wide mb-4">
                  MoonCart Baby Cares Products
                </p>
                <h2 className="text-3xl lg:text-4xl font-semibold mb-6">
                  Deal of the month
                </h2>
                <p className="text-lg font-light leading-relaxed mb-8">
                  Yes! Send me exclusive offers, personalised, and unique gift
                  ideas, tips for shopping on MoonCart
                </p>

                {/* Countdown Timer */}
                <div className="flex gap-8 lg:gap-12 mb-8">
                  <div className="text-center">
                    {/* <div className="text-4xl lg:text-5xl font-bold">{countdown.days}</div> */}
                    <div className="text-sm uppercase tracking-widest">Days</div>
                  </div>
                  <div className="text-center">
                    {/* <div className="text-4xl lg:text-5xl font-bold">{countdown.hours}</div> */}
                    <div className="text-sm uppercase tracking-widest">Hours</div>
                  </div>
                  <div className="text-center">
                    {/* <div className="text-4xl lg:text-5xl font-bold">{countdown.minutes}</div> */}
                    <div className="text-sm uppercase tracking-widest">Mins</div>
                  </div>
                  <div className="text-center">
                    {/* <div className="text-4xl lg:text-5xl font-bold">{countdown.seconds}</div> */}
                    <div className="text-sm uppercase tracking-widest">Secs</div>
                  </div>
                </div>

                <Button
                  variant="secondary"
                  size="lg"
                  className="bg-global-5 text-global-2 uppercase font-medium"
                >
                  View All Products
                </Button>
              </div>
              {/* Right: Product Image + Categories Grid */}
              <div className="w-full lg:w-1/2 flex flex-col items-center gap-8">
                <img
                  src="/images/img_product1_png.png"
                  alt="Deal product"
                  className="w-full h-auto max-w-lg mx-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Product Categories Section */}
        <section className="py-16 ">
          <div className="w-full max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
              {/* Newsletter Signup */}
              <div className="w-full lg:w-1/3">
                <div className="bg-global-7 border border-gray-300 p-8 mb-8">
                  <div className="mb-8">
                    <img
                      src="/images/img_product2_png.png"
                      alt="Baby Shoes"
                      className="w-full h-80 object-cover mb-4"
                    />
                    <div className="flex justify-between items-center">
                      <h3 className="text-lg font-medium text-global-2">Baby Shoes</h3>
                      <button className="text-sm font-medium text-global-2">Shop Now</button>
                    </div>
                  </div>
                </div>

                <div className="bg-global-7 border border-gray-400 p-8">
                  <h3 className="text-2xl font-semibold text-global-2 mb-4">Join our list</h3>
                  <p className="text-base text-global-3 mb-6 leading-relaxed">
                    Signup to be the first to hear about exclusive
                    deals,special offers and upcoming collections
                  </p>
                  <div className="space-y-6">
                    <input
                      type="email"
                      placeholder="Your Email Address"
                      className="w-full p-4 bg-global-5 border border-global-7 text-global-3"
                    />
                    <Button
                      variant="primary"
                      size="lg"
                      className="w-full bg-global-3 text-global-4 uppercase"
                    >
                      SUBSCRIBE
                    </Button>
                  </div>
                </div>
              </div>

              {/* Product Grid */}
              <div className="w-full lg:w-2/3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="space-y-8">
                    <div>
                      <img
                        src="/images/img_product3_png.png"
                        alt="Baby Games"
                        className="w-full h-80 object-cover mb-4"
                      />
                      <div className="flex justify-between items-center">
                        <h3 className="text-lg font-medium text-global-2">Baby Games</h3>
                        <button className="text-sm font-medium text-global-2">Shop Now</button>
                      </div>
                    </div>
                    <div>
                      <img
                        src="/images/img_product5_png.png"
                        alt="Baby Toy"
                        className="w-full h-80 object-cover mb-4"
                      />
                      <div className="flex justify-between items-center">
                        <h3 className="text-lg font-medium text-global-2">Baby Toy</h3>
                        <button className="text-sm font-medium text-global-2">Shop Now</button>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-8">
                    <div>
                      <img
                        src="/images/img_product4_png.png"
                        alt="Baby Bottles"
                        className="w-full h-80 object-cover mb-4"
                      />
                      <div className="flex justify-between items-center">
                        <h3 className="text-lg font-medium text-global-2">Baby Bottles</h3>
                        <button className="text-sm font-medium text-global-2">Shop Now</button>
                      </div>
                    </div>
                    <div>
                      <img
                        src="/images/img_product6_png.png"
                        alt="Baby Stroller"
                        className="w-full h-80 object-cover mb-4"
                      />
                      <div className="flex justify-between items-center">
                        <h3 className="text-lg font-medium text-global-2">Baby Stroller</h3>
                        <button className="text-sm font-medium text-global-2">Shop Now</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="relative py-32 bg-cover bg-center">
          <div className="absolute inset-0 bg-global-1"></div>
          <div className="relative w-full max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="transition-all duration-700 ease-out opacity-100 translate-y-0">
              <h2 className="text-3xl lg:text-4xl font-bold text-global-4 mb-8 leading-tight">
                Enjoy the best quality and<br />
                features made by MoonCart.
              </h2>
              <Button
                variant="secondary"
                size="lg"
                className="bg-global-5 text-global-2 uppercase font-medium"
              >
                Shop Now
              </Button>
            </div>
          </div>
        </section>

        {/* Expert Help Section */}
        <section className="bg-global-3 py-6">
          <div className="w-full max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <h3 className="text-2xl text-global-4">Questions ?</h3>
                <p className="text-base text-global-4">
                  Our experts will help find the gear that's right for you
                </p>
              </div>
              <Button
                variant="secondary"
                size="md"
                className="bg-global-5 text-global-2 uppercase font-medium"
              >
                Get In Touch
              </Button>
            </div>
          </div>
        </section>

        {/* Blog Section */}
        <section className="bg-global-8 py-16">
          <div className="w-full max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12 gap-4">
              <div>
                <h2 className="text-2xl lg:text-3xl font-semibold text-global-2 mb-2">
                  What's trending now
                </h2>
                <p className="text-base text-global-3">
                  Discover the most trending products in Ciseco.
                </p>
              </div>
              <button className="flex items-center gap-2 text-sm text-global-2">
                See all products
                <img src="/images/img_arrow_right.svg" alt="Arrow" className="w-4 h-4" />
              </button>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              {/* Large Blog Post */}
              <div className="space-y-6">
                <img
                  src={blogPosts[0].image}
                  alt={blogPosts[0].title}
                  className="w-full h-96 object-cover"
                />
                <div>
                  <Button
                    variant="secondary"
                    size="sm"
                    className="bg-button-1 text-button-1 mb-4"
                  >
                    {blogPosts[0].date}
                  </Button>
                  <h3 className="text-2xl lg:text-3xl font-semibold text-global-2 leading-tight">
                    {blogPosts[0].title}
                  </h3>
                </div>
              </div>


              {/* Blog Grid */}
              <div className="space-y-6">
                <div className="flex gap-6">
                  <div className="flex-1">
                    <Button
                      variant="secondary"
                      size="sm"
                      className="bg-button-1 text-button-1 mb-4"
                    >
                      {blogPosts[1].date}
                    </Button>
                    <h3 className="text-xl lg:text-3xl font-semibold text-global-2 leading-tight mb-4">
                      {blogPosts[1].title}
                    </h3>
                    <button className="flex items-center gap-2 text-sm text-global-2">
                      Read More
                      <img src="/images/img_arrow_right.svg" alt="Arrow" className="w-4 h-4" />
                    </button>
                  </div>
                  <img
                    src={blogPosts[1].image}
                    alt={blogPosts[1].title}
                    className="w-48 h-48 object-cover"
                  />
                </div>

                <div className="flex gap-6">
                  <img
                    src={blogPosts[2].image}
                    alt={blogPosts[2].title}
                    className="w-48 h-48 object-cover"
                  />
                  <div className="flex-1">
                    <Button
                      variant="secondary"
                      size="sm"
                      className="bg-button-1 text-button-1 mb-4"
                    >
                      {blogPosts[2].date}
                    </Button>
                    <h3 className="text-xl lg:text-3xl font-semibold text-global-2 leading-tight mb-4">
                      {blogPosts[2].title}
                    </h3>
                    <button className="flex items-center gap-2 text-sm text-global-2">
                      Read More
                      <img src="/images/img_arrow_right.svg" alt="Arrow" className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <div className="space-y-6">
                  <img
                    src={blogPosts[3].image}
                    alt={blogPosts[3].title}
                    className="w-full h-96 object-cover"
                  />
                  <div>
                    <Button
                      variant="secondary"
                      size="sm"
                      className="bg-button-1 text-button-1 mb-4"
                    >
                      {blogPosts[3].date}
                    </Button>
                    <h3 className="text-xl lg:text-3xl font-semibold text-global-2 leading-tight">
                      {blogPosts[3].title}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Company Logos Section */}
        <section className="bg-global-8 border-t border-gray-200 py-16">
          <div className="w-full max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="w-full lg:w-1/3">
                <h2 className="text-2xl lg:text-3xl font-semibold text-global-2 mb-4 leading-tight">
                  We're just keep<br />
                  growing with 6.3k<br />
                  trusted companies
                </h2>
                <p className="text-base text-global-3 leading-relaxed">
                  Nullam nec ipsum luctus, vehicula massa
                  in, dictum sapien. Aenean quis luctus ert
                  nulla quam augue.
                </p>
              </div>

              <div className="w-full lg:w-2/3">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {companyLogos.map((logo) => (
                    <div key={logo.id} className="bg-global-6 p-6 flex items-center justify-center">
                      <img
                        src={logo.image}
                        alt={logo.name}
                        className="w-16 h-12 object-contain"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default BabyProducts;