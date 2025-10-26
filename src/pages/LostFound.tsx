import Header from "@/components/Header";
import LostFoundHero from "@/components/LostFoundHero";
import LostFoundQuickActions from "@/components/LostFoundQuickActions";
import LostFoundLostreport from "@/components/LostFoundLostreport";
import LostFoundFoundreport from "@/components/LostFoundFoundreport";

import Footer from "@/components/Footer";

const LostFound = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1 bg-white">
        <LostFoundHero />
        <LostFoundQuickActions />
        <LostFoundLostreport />
        <LostFoundFoundreport />

      </main>
      <Footer />
    </div>
  );
};

export default LostFound;
