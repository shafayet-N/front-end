import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";


const LostFoundHero: React.FC = () => {
  const { t, isRTL } = useLanguage();
  return (
    <LanguageTransitionWrapper>
      <section className="bg-gradient-to-r from-pet-primary to-pet-secondary py-24 relative overflow-hidden hero-bg">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed opacity-1"
        style={{ 
          backgroundImage: `url("https://pet-microchip-system.mrehman.com/assets/images/baner.jpg")`,
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full  flex-col items-center justify-start pt-16 text-center">
        <div className="mb-6">
          <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg">
            <svg
              className="w-6 h-6 text-white mr-2"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" />
            </svg>
            <span className="text-sm font-semibold text-white">
              {t('lostFoundHero.emergencyServices')}
            </span>
          </div>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
          {t('lostFoundHero.title')}
        </h1>
        <p className="text-xl text-red-100 max-w-3xl mx-auto mb-8">
          {t('lostFoundHero.subtitle')}
        </p>

        {/* Quick Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() =>
              document.getElementById("report-lost")?.scrollIntoView()
            }
            className="bg-white text-red-600 px-8 py-4 rounded-xl text-lg font-bold hover:bg-gray-100 transition-all duration-200"
          >
            {t('lostFoundHero.reportLost')}
          </button>
          <button
            onClick={() =>
              document.getElementById("report-found")?.scrollIntoView()
            }
            className="bg-yellow-500 text-white px-8 py-4 rounded-xl text-lg font-bold hover:bg-yellow-600 transition-all duration-200"
          >
            {t('lostFoundHero.reportFound')}
          </button>
        </div>
      </div>
    </section>
    </LanguageTransitionWrapper>
  );
};

export default LostFoundHero;
