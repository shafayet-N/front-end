import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';


const PetOwnerPortal: React.FC = () => {
  const { t } = useLanguage();

  return (
    <>

      <div className="bg-blue-500 text-center from-pet-primary to-pet-secondary py-16">
        <div className="mb-8">
          <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg">
            <span className="text-2xl mr-3" role="img" aria-label="home">
              🏠
            </span>
            <span className="text-sm font-semibold text-white">{t('poHero.badge')}</span>
          </div>
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">{t('poHero.title')}</h1>
        <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
          {t('poHero.subtitle')}
        </p>
      </div>
    </>
  );
};

export default PetOwnerPortal;
