import React from 'react';
import Button from '../ui/Button';
import { useScrollReveal, useScrollRevealDirection } from '../../hooks/UseScrollReveal';
import type { CountdownTimer } from '../../types/BabyProducts';

interface DealCountdownSectionProps {
  countdown: CountdownTimer;
}

const DealCountdownSection: React.FC<DealCountdownSectionProps> = ({ countdown }) => {
  const [mainRef, mainVisible] = useScrollReveal();

  return (
    <section 
      className="relative py-16 lg:py-20 bg-cover bg-center"
      style={{ backgroundImage: "url('/images/img__1.png')" }}
    >
      <div className="absolute inset-0 bg-global-1"></div>
      <div className="relative w-full max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={mainRef}
          className={`flex flex-col lg:flex-row gap-12 transition-all duration-700 ease-out ${mainVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
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
                <div className="text-4xl lg:text-5xl font-bold">{countdown.days}</div>
                <div className="text-sm uppercase tracking-widest">Days</div>
              </div>
              <div className="text-center">
                <div className="text-4xl lg:text-5xl font-bold">{countdown.hours}</div>
                <div className="text-sm uppercase tracking-widest">Hours</div>
              </div>
              <div className="text-center">
                <div className="text-4xl lg:text-5xl font-bold">{countdown.minutes}</div>
                <div className="text-sm uppercase tracking-widest">Mins</div>
              </div>
              <div className="text-center">
                <div className="text-4xl lg:text-5xl font-bold">{countdown.seconds}</div>
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

          {/* Right: Product Image */}
          <div className="w-full lg:w-1/2 flex flex-col items-center gap-8">
            {(() => { const [imgRef, imgClass] = useScrollRevealDirection(0); return (
              <img 
                ref={imgRef}
                src="/images/img_product1_png.png" 
                alt="Deal product" 
                className={`w-full h-auto max-w-lg mx-auto ${imgClass} transition-all duration-700 ease-out`}
              />
            ); })()}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DealCountdownSection;