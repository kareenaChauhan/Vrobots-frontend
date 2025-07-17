import React from 'react';
import { useScrollReveal } from '../../hooks/UseScrollReveal';
import { features } from '../../data/DetailBlogData';

const FeaturesSection: React.FC = () => {
  const [ref, visible] = useScrollReveal();

  return (
    <section className="bg-global-8 py-16">
      <div className="w-full max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 transition-all duration-700 ease-out ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
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
  );
};

export default FeaturesSection;