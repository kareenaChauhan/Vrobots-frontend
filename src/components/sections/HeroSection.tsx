import React from 'react';
import ChipView from '../ui/ChipView';
import { useScrollReveal } from '../../hooks/UseScrollReveal';
import { safetyCertifications, safetyFeatures, chipItems } from '../../data/DetailBlogData';

interface HeroSectionProps {
  product: any;
  slug: string;
  onChipClick: (chipId: string) => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ product, slug, onChipClick }) => {
  console.log(" product details found in detail page.............", product);
  const [ref, visible] = useScrollReveal();

  return (
    <section
      className="relative min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/img__0x0.png')" }}
    >
      <div className="w-full max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div
          ref={ref}
          className={`flex flex-col lg:flex-row items-start justify-between gap-8 lg:gap-12 transition-all duration-700 ease-out ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          {/* Product Info */}
          <div className="w-full lg:w-1/3 order-2 lg:order-1">
            <div className="mb-4">
              <p className="text-sm text-global-3 uppercase tracking-wide mb-4">
                Convertible car seats slug name : {slug}
              </p>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-global-2 leading-tight mb-6">
                {product.name}
              </h1>
              <p className="text-base text-global-3 mb-8 leading-relaxed">
                Sell globally in minutes with localized currencies,
                languages, and experiences in every market.
              </p>
            </div>

            {/* Price and Color */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-4">
                <span className="text-sm text-global-3">Price</span>
                <span className="text-sm text-global-3">Color</span>
              </div>
              <div className="flex justify-between items-center mb-8">
                <span className="text-2xl font-medium text-global-2">$125.75</span>
                <img
                  src="/images/img_container.svg"
                  alt="Color options"
                  className="w-20 h-6"
                />
              </div>
            </div>

            {/* Action Buttons */}
            <ChipView
              items={chipItems}
              onChipClick={onChipClick}
              className="mb-6"
            />
          </div>

          {/* Product Image */}
          <div className="w-full lg:w-1/2 order-1 lg:order-2">
            <img
              src={product?.image?.replace("http://localhost:8000", "http://13.200.195.70:8000") || '/images/placeholder.png'}
              alt={product?.name || 'Product image'}
              className="w-full h-auto max-w-lg mx-auto transition-all duration-700 ease-out"
            />
          </div>

          {/* Safety Certifications */}
          <div className="w-full lg:w-1/4 order-3">
            <h2 className="text-2xl font-semibold text-global-2 mb-6">Safety Certified</h2>
            <div className="space-y-6 mb-8">
              {safetyCertifications.map((cert) => (
                <div key={cert.id} className="flex items-center gap-4">
                  <img
                    src={cert.icon}
                    alt={cert.title}
                    className="w-12 h-12 transition-all duration-700 ease-out"
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
                    className="w-6 h-6 transition-all duration-700 ease-out"
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
                  className="w-32 h-32 mx-auto rounded-lg transition-all duration-700 ease-out"
                />
                <button className="absolute inset-0 flex items-center justify-center">
                  <img
                    src="/images/img_link.svg"
                    alt="Play video"
                    className="w-12 h-12 transition-all duration-700 ease-out"
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
  );
};

export default HeroSection;