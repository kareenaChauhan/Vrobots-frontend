import React from 'react';
import { useScrollReveal, useScrollRevealDirection } from '../../hooks/UseScrollReveal';

const StarRewardsSection: React.FC = () => {
  const [ref, visible] = useScrollReveal();

  return (
    <section className="bg-global-7 border-t border-gray-200 py-16">
      <div className="w-full max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className={`flex flex-col  lg:flex-row items-center justify-between gap-8 transition-all duration-700 ease-out ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex flex-col  items-center gap-8 xs:flex-col sm:flex-col  md:flex-col  lg:flex-row">
            <div>
              <h3 className="text-2xl font-bold text-global-2 mb-2">Hi there!</h3>
              <div className="flex items-center gap-2">
                {(() => { const [starRef, starClass] = useScrollRevealDirection(0); return (
                  <img 
                    ref={starRef}
                    src="/images/img_component_3_teal_700.svg" 
                    alt="Star icon" 
                    className={`w-4 h-4 ${starClass} transition-all duration-700 ease-out`}
                  />
                ); })()}
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
              {(() => { const [woodenRef, woodenClass] = useScrollRevealDirection(0); return (
                <img 
                  ref={woodenRef}
                  src="/images/img_1_png.png" 
                  alt="Wooden Water Bottles" 
                  className={`w-16 h-16 rounded ${woodenClass} transition-all duration-700 ease-out`}
                />
              ); })()}
              <div>
                <h5 className="text-base font-bold text-global-2">
                  Wooden Water<br />Bottles
                </h5>
                <p className="text-xs text-global-2">July 23, 2023</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              {(() => { const [ecoRef, ecoClass] = useScrollRevealDirection(1); return (
                <img 
                  ref={ecoRef}
                  src="/images/img_2_png.png" 
                  alt="Eco friendly bags" 
                  className={`w-16 h-16 rounded ${ecoClass} transition-all duration-700 ease-out`}
                />
              ); })()}
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
  );
};

export default StarRewardsSection;