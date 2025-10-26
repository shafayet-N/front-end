import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const ContactSection: React.FC = () => {
  const { t } = useLanguage();

  return (
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
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">{t('contact.title')}</h1>
        <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
          {t('contact.subtitle')}
        </p>

        {/* Emergency Contact */}
        <div className="bg-red-500 rounded-xl p-6 max-w-2xl mx-auto">
          <h3 className="text-xl font-bold text-white mb-2">{t('contact.emergencyTitle')}</h3>
          <p className="text-red-100 mb-4">
            {t('contact.emergencyDesc')}
          </p>
    
          <a
            href="tel:+1-800-CHIP-PET"
            className="bg-white text-red-600 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors inline-block"
          >
            📞 1-800-CHIP-PET
          </a>
 
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
