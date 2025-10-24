import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const LanguageToggle: React.FC = () => {
  const { language, setLanguage, isRTL, isTransitioning, t } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ar' : 'en');
  };

  const targetLang = language === 'en' ? 'Arabic' : 'English';

  return (
    <button
      onClick={toggleLanguage}
      disabled={isTransitioning}
      className={`
        group relative flex items-center justify-center px-4 py-2 rounded-lg
        bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700
        text-white shadow-lg hover:shadow-xl transition-all duration-300
        hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2
        mt-[50px]
        ${isRTL ? 'ml-3' : 'mr-3'} ${isTransitioning ? 'opacity-75 cursor-not-allowed' : ''}
      `}
      aria-label={`${t('common.convert')} to ${targetLang}`}
      title={`${t('common.convert')} to ${targetLang}`}
    >
      {/* Conversion text */}
      <span className="text-sm font-medium">
        {t('common.convert')} to {targetLang}
      </span>

      {/* Animated background */}
      <div className="absolute inset-0 rounded-lg bg-white/20 scale-0 group-hover:scale-100 transition-transform duration-300" />

      {/* RTL indicator dot */}
      {isRTL && (
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-orange-400 rounded-full border-2 border-white animate-pulse" />
      )}

      {/* Converting overlay */}
      {isTransitioning && (
        <div className="absolute inset-0 rounded-lg bg-white/30 flex items-center justify-center">
          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
        </div>
      )}
    </button>
  );
};

export default LanguageToggle;
