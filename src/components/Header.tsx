import { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

const Header = () => {
  const location = useLocation();
  const { t, isRTL, language, setLanguage, isTransitioning } = useLanguage();
  const [activeNav, setActiveNav] = useState("/");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileRegisterOpen, setMobileRegisterOpen] = useState(false);
  const [mobileLoginOpen, setMobileLoginOpen] = useState(false);
  const [registerOpen, setRegisterOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);

  const toggleRegister = () => setRegisterOpen((v) => !v);
  const toggleLogin = () => setLoginOpen((v) => !v);

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ar' : 'en');
  };

  const registerRef = useRef<HTMLDivElement>(null);
  const loginRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (registerRef.current && !registerRef.current.contains(event.target as Node)) {
        setRegisterOpen(false);
      }
      if (loginRef.current && !loginRef.current.contains(event.target as Node)) {
        setLoginOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    setActiveNav(location.pathname);
  }, [location.pathname]);

  return (
    <nav key={language} className={`header-glass fixed top-0 z-50 shadow-soft w-full ${isRTL ? 'rtl' : 'ltr'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex justify-between items-center h-20 ${isRTL ? 'flex-row-reverse' : ''}`}>
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center group">
              <div className={isRTL ? 'mr-4' : 'ml-4'}>
                <a
                  href="/"
                  className="font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
                >
                  Chipthem
                </a>
                <div className="text-xs text-gray-500 font-medium -mt-1">
                  {t('common.petRegistry')}
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex flex-1 justify-center">
            <div className={`flex items-center ${isRTL ? 'space-x-reverse space-x-2' : 'space-x-2'}`}>
              {[
                { href: "/", label: t('nav.home') },
                { href: "/about", label: t('nav.about') },
                { href: "/findclinic", label: t('nav.findClinic') },
                { href: "/search", label: t('nav.search') },
                { href: "/lostfound", label: t('nav.lostFound') },
                { href: "/successstories", label: t('nav.successStories') },
                { href: "/contact", label: t('nav.contact') },
              ].map(({ href, label }) => {
                const isActive = activeNav === href;
                return (
                  <a
                    key={href}
                    href={href}
                    onClick={() => setActiveNav(href)}
                    aria-current={isActive ? "page" : undefined}
                    className={`group relative nav-link px-3 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                      isActive ? "active text-blue-600" : "text-gray-700 hover:text-gray-900"
                    }`}
                  >
                    <span
                      className={`transition-all duration-300 ${
                        isActive
                          ? "text-blue-600"
                          : "group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-sky-500 group-hover:to-emerald-500"
                      }`}
                    >
                      {label}
                    </span>
                    <span
                      className={`pointer-events-none absolute left-3 right-3 bottom-0 h-0.5 rounded-full bg-gradient-to-r from-sky-400 to-emerald-400 transform transition-transform duration-300 origin-left ${
                        isActive ? "scale-x-100" : "scale-x-0"
                      }`}
                    />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Desktop CTA Buttons */}
          <div className={`hidden lg:flex items-center gap-3`}>
            {/* Language Toggle Button */}
            <button
              onClick={toggleLanguage}
              disabled={isTransitioning}
              className={`px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 text-sm font-semibold ${
                isTransitioning ? 'opacity-75 cursor-not-allowed' : ''
              }`}
              aria-label={`Switch to ${language === 'en' ? 'Arabic' : 'English'}`}
            >
              {language === 'en' ? 'العربية' : 'English'}
            </button>

            {/* Register Dropdown */}
            <div className="relative" ref={registerRef}>
              <button
                onClick={toggleRegister}
                className="px-6 py-2.5 rounded-xl text-sm font-semibold flex items-center border-0 text-white bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 shadow-lg shadow-amber-200/30 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 focus-visible:ring-offset-2"
                type="button"
                aria-expanded={registerOpen}
                aria-haspopup="true"
              >
                <svg
                  className="w-4 h-4 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
                {t('nav.register')}
                <svg
                  className={`w-4 h-4 ml-1 transform transition-transform duration-200 ${
                    registerOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {registerOpen && (
                <div
                  className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-elegant border border-gray-100 py-2 z-50"
                  role="menu"
                  aria-orientation="vertical"
                >
                  <a
                    href="/getpetmicrochipped"
                    className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-orange-50 transition-colors"
                    onClick={() => setRegisterOpen(false)}
                    role="menuitem"
                  >
                    <svg className="w-4 h-4 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                    {t('nav.registerPet')}
                  </a>
                  <a
                    href="/vetregister"
                    className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-green-50 transition-colors"
                    onClick={() => setRegisterOpen(false)}
                    role="menuitem"
                  >
                    <svg className="w-4 h-4 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    {t('nav.veterinaryRegister')}
                  </a>
                </div>
              )}
            </div>

            {/* Login Dropdown */}
            <div className="relative" ref={loginRef}>
              <button
                onClick={toggleLogin}
                className="px-6 py-2.5 rounded-xl text-sm font-semibold flex items-center border-0 text-white bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 shadow-lg shadow-blue-200/30 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300 focus-visible:ring-offset-2"
                type="button"
                aria-expanded={loginOpen}
                aria-haspopup="true"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                </svg>
                {t('nav.login')}
                <svg className={`w-4 h-4 ml-1 transform transition-transform duration-200 ${loginOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {loginOpen && (
                <div className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-elegant border border-gray-100 py-2 z-50" role="menu" aria-orientation="vertical">
                  <a href="/pologin" className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-blue-50 transition-colors" onClick={() => setLoginOpen(false)} role="menuitem">
                    <svg className="w-4 h-4 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                    {t('nav.petOwnerLogin')}
                  </a>
                  <a href="/vlogin" className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-green-50 transition-colors" onClick={() => setLoginOpen(false)} role="menuitem">
                    <svg className="w-4 h-4 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    {t('nav.veterinaryLogin')}
                  </a>
                  <a href="/alogin" className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 transition-colors border-t" onClick={() => setLoginOpen(false)} role="menuitem">
                    <svg className="w-4 h-4 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c1.657 0 3-1.343 3-3S13.657 5 12 5 9 6.343 9 8s1.343 3 3 3zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                    </svg>
                    {t('nav.adminLogin')}
                  </a>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu & Language Button */}
          <div className={`lg:hidden flex items-center gap-2`}>
            <button
              onClick={toggleLanguage}
              disabled={isTransitioning}
              className={`px-3 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white shadow-lg text-xs font-semibold transition-all duration-300 ${
                isTransitioning ? 'opacity-75 cursor-not-allowed' : ''
              }`}
              aria-label={`Switch to ${language === 'en' ? 'Arabic' : 'English'}`}
            >
              {language === 'en' ? 'ع' : 'EN'}
            </button>
            
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 rounded-lg text-gray-600 hover:text-pet-primary hover:bg-gray-100 transition-all duration-300 focus:outline-none"
              aria-label="Toggle mobile menu"
              aria-expanded={mobileOpen}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {!mobileOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-4 pt-2 pb-4" aria-label="Mobile menu">
          {/* Navigation Links */}
          <div className="space-y-1 mb-4">
            {[
              { href: "/", label: t('nav.home') },
              { href: "/about", label: t('nav.about') },
              { href: "/findclinic", label: t('nav.findClinic') },
              { href: "/search", label: t('nav.search') },
              { href: "/lostfound", label: t('nav.lostFound') },
              { href: "/successstories", label: t('nav.successStories') },
              { href: "/contact", label: t('nav.contact') },
            ].map(({ href, label }) => {
              const isActive = activeNav === href;
              return (
                <a
                  key={href}
                  href={href}
                  onClick={() => {
                    setActiveNav(href);
                    setMobileOpen(false);
                  }}
                  className={`block px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                    isActive ? "bg-blue-50 text-blue-600" : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  {label}
                </a>
              );
            })}
          </div>

          {/* Mobile Register Button */}
          <button
            onClick={() => setMobileRegisterOpen(!mobileRegisterOpen)}
            className="w-full flex items-center justify-between bg-gradient-to-r from-amber-500 to-orange-500 text-white py-2 px-4 rounded-lg text-sm font-semibold my-2 hover:from-amber-600 hover:to-orange-600 transition-all"
            aria-expanded={mobileRegisterOpen}
          >
            <span>{t('nav.register')}</span>
            <svg className={`w-4 h-4 transform transition-transform ${mobileRegisterOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {mobileRegisterOpen && (
            <div className="space-y-2 ml-2 mb-2">
              <a href="/getpetmicrochipped" className="block bg-orange-100 text-orange-800 py-2 px-4 rounded-lg text-sm font-medium" onClick={() => setMobileOpen(false)}>
                {t('nav.registerPet')}
              </a>
              <a href="/vetregister" className="block bg-orange-100 text-orange-800 py-2 px-4 rounded-lg text-sm font-medium" onClick={() => setMobileOpen(false)}>
                {t('nav.veterinaryRegister')}
              </a>
            </div>
          )}

          {/* Mobile Login Button */}
          <button
            onClick={() => setMobileLoginOpen(!mobileLoginOpen)}
            className="w-full flex items-center justify-between bg-gradient-to-r from-blue-500 to-blue-600 text-white py-2 px-4 rounded-lg text-sm font-semibold my-2 hover:from-blue-600 hover:to-blue-700 transition-all"
            aria-expanded={mobileLoginOpen}
          >
            <span>{t('nav.login')}</span>
            <svg className={`w-4 h-4 transform transition-transform ${mobileLoginOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {mobileLoginOpen && (
            <div className="space-y-2 ml-2">
              <a href="/pologin" className="block bg-blue-100 text-blue-800 py-2 px-4 rounded-lg text-sm font-medium" onClick={() => setMobileOpen(false)}>
                {t('nav.petOwnerLogin')}
              </a>
              <a href="/vlogin" className="block bg-blue-100 text-blue-800 py-2 px-4 rounded-lg text-sm font-medium" onClick={() => setMobileOpen(false)}>
                {t('nav.veterinaryLogin')}
              </a>
              <a href="/alogin" className="block bg-gray-100 text-gray-800 py-2 px-4 rounded-lg text-sm font-medium" onClick={() => setMobileOpen(false)}>
                {t('nav.adminLogin')}
              </a>
            </div>
          )}
        </div>
      )}
    </nav>
  );
};

export default Header;
