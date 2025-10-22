import { Link, useNavigate } from "react-router-dom";
import {
  Facebook,
  Instagram,
  Mail,
  Phone,
  Building2,
  Database,
  Plus,
  Search,
  AlertTriangle,
  Heart,
  CheckCircle,
  ArrowUp
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();
  const navigate = useNavigate();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-800 text-white relative">
      <div className="container mx-auto px-4 pt-12 pb-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Chipthem Information */}
          <div>
            <h3 className="font-bold text-xl mb-2">
              <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
                {t('footer.chipthem')}
              </span>
              <div className="text-sm text-gray-300 font-normal mt-1">{t('footer.petRegistry')}</div>
            </h3>
            <p className="text-sm text-gray-300 leading-relaxed mb-6">
              {t('footer.description')}
            </p>
            
            {/* Emergency Button */}
            <div className="bg-red-600 rounded-lg p-4 text-white">
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="h-5 w-5" />
                <span className="font-bold">{t('footer.lostPetEmergency')}</span>
              </div>
              <div className="flex items-center gap-2 mb-1">
                <Phone className="h-4 w-4 text-pink-300" />
                <span className="font-bold">{t('footer.emergencyPhone')}</span>
              </div>
              <p className="text-xs text-white/90">{t('footer.emergencyAvailable')}</p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-white mb-4 relative">
              {t('footer.services')}
              <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-cyan-400"></div>
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-3 text-gray-300">
                <Building2 className="h-4 w-4 text-blue-400" />
                <span onClick={() => { navigate('/about'); window.scrollTo(0, 0); }} className="hover:text-white transition-colors cursor-pointer">
                {t('footer.professionalMicrochipping')}
                </span>
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                
                <Database className="h-4 w-4 text-green-400" />
                <span onClick={() => { navigate('/about'); window.scrollTo(0, 0); }} className="hover:text-white transition-colors cursor-pointer">
                {t('footer.databaseRegistry')}
                </span>
              </li>
              <li className="flex items-center gap-3 text-gray-300">
               
                <Plus className="h-4 w-4 text-yellow-400" />
                 <span onClick={() => { navigate('/registerpet'); window.scrollTo(0, 0); }} className="hover:text-white transition-colors cursor-pointer">
                {t('footer.petRegistration')}
                </span>
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                
                <Search className="h-4 w-4 text-purple-400" />
                <span onClick={() => { navigate('/search'); window.scrollTo(0, 0); }} className="hover:text-white transition-colors cursor-pointer">
                {t('footer.microchipSearch')}
                </span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-white mb-4 relative">
              {t('footer.quickLinks')}
              <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-blue-400"></div>
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-3 text-gray-300">
                <Plus className="h-4 w-4 text-blue-400" />
                <span onClick={() => { navigate('/registerpet'); window.scrollTo(0, 0); }} className="hover:text-white transition-colors cursor-pointer">
                  {t('footer.registerYourPet')}
                </span>
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <AlertTriangle className="h-4 w-4 text-red-400" />
                <span onClick={() => { navigate('/lostfound'); window.scrollTo(0, 0); }} className="hover:text-white transition-colors cursor-pointer">
                  {t('footer.reportLostPet')}
                </span>
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <Search className="h-4 w-4 text-green-400" />
                <span onClick={() => { navigate('/search'); window.scrollTo(0, 0); }} className="hover:text-white transition-colors cursor-pointer">
                  {t('footer.searchFoundPet')}
                </span>
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <Heart className="h-4 w-4 text-pink-400" />
                <span onClick={() => { navigate('/successstories'); window.scrollTo(0, 0); }} className="hover:text-white transition-colors cursor-pointer">
                  {t('footer.successStories')}
                </span>
              </li>
            </ul>
          </div>

          {/* 24/7 Support & Follow Us */}
          <div>
            <h3 className="font-bold text-white mb-4 relative">
              {t('footer.support247')}
              
              <div className="absolute bottom-0 left-0 w-8 h-0.5 bg-cyan-400"></div>
              
            </h3>

            {/* Email Contact */}
            <div className="mb-4">
              <div className="flex items-center gap-2 text-gray-300 mb-1">
                <Mail className="h-4 w-4 text-blue-400" />
                <Link to="mailto:Info@chipthem.com" className="hover:text-white transition-colors">
                <span>{t('footer.supportEmail')}</span>
                </Link>
              </div>
              <p className="text-xs text-gray-400 ml-6">{t('footer.generalInquiries')}</p>
            </div>

            {/* Phone Contact */}
            <div className="mb-6">
              <div className="flex items-center gap-2 text-gray-300 mb-1">
                <Phone className="h-4 w-4 text-green-400" />
                <Link to="tel:+962-7-98-980504" className="hover:text-white transition-colors">
                <span>{t('footer.supportPhone')}</span>
                </Link>
              </div>
              <div className="text-xs text-gray-400 ml-6">
                <p>{t('footer.hoursSatThu')}</p>
                <p>{t('footer.hoursFri')}</p>
              </div>
            </div>

            {/* Follow Us */}
            <div>
              <h4 className="font-bold text-white mb-3">{t('footer.followUs')}</h4>
              <div className="flex gap-3">
                <a href="https://www.instagram.com/chipthem.jo?igsh=YnVnd2hkODJkMWVq" className="w-8 h-8 rounded bg-gray-700 flex items-center justify-center hover:bg-gray-600 transition-colors">
                  <Instagram className="h-4 w-4 text-white" />
                </a>
                <a href="https://www.facebook.com/share/17HX8wVHuN/" className="w-8 h-8 rounded bg-gray-700 flex items-center justify-center hover:bg-gray-600 transition-colors">
                  <Facebook className="h-4 w-4 text-white" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-slate-900 border-t border-slate-700">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <div className="text-sm text-gray-300">
              {t('footer.copyright')}
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center gap-6 text-sm text-gray-300">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-400" />
                <span>{t('footer.sslSecured')}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-blue-400" />
                <span>{t('footer.successRate')}</span>
              </div>
              <div>
                {t('footer.trustedBy')}
              </div>
            </div>

            {/* Legal Links */}
            <div className="flex items-center gap-4 text-sm text-gray-300">
              <Link to="/privacy" className="hover:text-white transition-colors">{t('footer.privacyPolicy')}</Link>
              <Link to="/pages/terms.tsx" className="hover:text-white transition-colors">{t('footer.termsOfService')}</Link>
              <Link to="/contact" className="hover:text-white transition-colors">{t('footer.contactUs')}</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button - Always visible */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-4 right-4 w-10 h-10 bg-blue-600 hover:bg-blue-700 rounded flex items-center justify-center text-white shadow-lg transition-all duration-300 ease-in-out z-50 opacity-100 translate-y-0"
        aria-label="Scroll to top"
      >
        <ArrowUp className="h-5 w-5" />
      </button>
    </footer>
  );
};

export default Footer;
