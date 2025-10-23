import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import LanguageTransitionWrapper from "@/components/LanguageTransitionWrapper";

import Index from "./pages/Index";
import About from "./pages/About";
import FindClinic from "./pages/FindClinic";
import Search from "./pages/Search";
import LostFound from "./pages/LostFound";
import NotFound from "./pages/NotFound";
import SuccessStories from "./pages/SuccessStories";
import Contact from "./pages/Contact";
import RegisterPet from "./pages/RegisterPet";
import Registersuccess from "./pages/Registersuccess";
import Registersuccessvet from "./pages/Registersuccessvet";
import VetRegister from "./pages/VetRegister";
import POLogin from "./pages/POLogin";
import VLogin from "./pages/VLogin";
import ALogin from "./pages/ALogin";
import PrivacyPolicy from '@/pages/privacy';
import TermsOfService from '@/pages/terms';

const queryClient = new QueryClient();

const App = () => {
  return (
    <LanguageProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <LanguageTransitionWrapper>
            {/* Toast notifications */}
            <Toaster />
            <Sonner />

            {/* BrowserRouter for client-side routing */}
            <BrowserRouter>
              <Routes>
                <Route path="/privacy" element={<PrivacyPolicy />} />
                <Route path="/terms" element={<TermsOfService />} />
                <Route path="/" element={<Index />} />
                <Route path="/about" element={<About />} />
                <Route path="/findclinic" element={<FindClinic />} />
                <Route path="/search" element={<Search />} />
                <Route path="/lostfound" element={<LostFound />} />
                <Route path="/successstories" element={<SuccessStories />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/registerpet" element={<RegisterPet />} />
                <Route path="/registersuccess" element={<Registersuccess />} />
                <Route path="/registersuccessvet" element={<Registersuccessvet />} />
                <Route path="/vetregister" element={<VetRegister />} />
                <Route path="/pologin" element={<POLogin />} />
                <Route path="/vlogin" element={<VLogin />} />
                <Route path="/alogin" element={<ALogin />} />
                {/* Catch-all route for 404 */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </BrowserRouter>
          </LanguageTransitionWrapper>
        </TooltipProvider>
      </QueryClientProvider>
    </LanguageProvider>
  );
};

export default App;
