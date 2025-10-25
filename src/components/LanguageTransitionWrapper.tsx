import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import LanguageToggle from './LanguageToggle';

interface LanguageTransitionWrapperProps {
  children: React.ReactNode;
  showConversionButton?: boolean;
  buttonPosition?: 'top' | 'bottom' | 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';
}

const LanguageTransitionWrapper: React.FC<LanguageTransitionWrapperProps> = ({
  children,
  showConversionButton = true,
  buttonPosition = 'bottom-leftt'
}) => {
  const { isTransitioning, isRTL } = useLanguage();

  return (
    <div
      className={`
        relative transition-all duration-300 ease-in-out
        ${isTransitioning ? 'opacity-50 scale-98' : 'opacity-100 scale-100'}
        ${isRTL ? 'rtl' : 'ltr'}
      `}
      style={{
        transform: isTransitioning ? 'translateY(2px)' : 'translateY(0)',
      }}
    >
      {/* Language Conversion Button */}
      {showConversionButton && (
        <div className="absolute top-4 right-4 z-10">
        </div>
      )}
      
      {children}
    </div>
  );
};

export default LanguageTransitionWrapper;
