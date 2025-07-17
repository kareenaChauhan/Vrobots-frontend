import React from 'react';
import { useScrollReveal, useScrollRevealDirection } from '../../hooks/UseScrollReveal';
import { companyLogos } from '../../data/DetailBlogData';

const CompanyLogosSection: React.FC = () => {
  const [ref, visible] = useScrollReveal();

  return (
    <section className="bg-global-8 border-t border-gray-200 py-16">
      <div className="w-full max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`flex flex-col lg:flex-row items-center gap-12 transition-all duration-700 ease-out ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
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
                  {(() => { const [logoRef, logoClass] = useScrollRevealDirection(companyLogos.indexOf(logo)); return (
                    <img 
                      ref={logoRef}
                      src={logo.image} 
                      alt={logo.name} 
                      className={`w-16 h-12 object-contain ${logoClass} transition-all duration-700 ease-out`}
                    />
                  ); })()}
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* <button className="fixed bottom-8 right-8 w-12 h-12 bg-global-3 rounded-full flex items-center justify-center shadow-lg">
          <img 
            src="/images/img_button.svg" 
            alt="Scroll to top" 
            className="w-6 h-6"
          />
        </button> */}
      </div>
    </section>
  );
};

export default CompanyLogosSection;