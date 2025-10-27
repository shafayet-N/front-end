import React, { useState, useEffect } from 'react';
import Header from "@/components/Header";
import RegisterHeros from "@/components/RegisterHero1";
import Footer from "@/components/Footer";

const GetPetMicrochipped: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <div className="flex-1 bg-white">
        <RegisterHeros />
      </div>
      
      {/* The <main> element's min-height is set to 'screen', 
          which will make it take up the full viewport height regardless of content. 
          You might want to change it to 'flex-1' if you want it to fill the remaining 
          space between the Header and Footer. I've kept 'min-h-screen' as per your original code. */}
      <main className="flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 p-6 min-h-screen">
        <h1
          className="text-3xl md:text-5xl font-bold text-gray-800 mb-10 text-center"
        >
          Is your pet microchipped? 🐶
        </h1>

        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center">
          <button
            onClick={() => (window.location.href = "/registerpet")}
            className="w-full sm:w-auto bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-blue-700 transition-all duration-200"
          >
            Yes
          </button>

          <button
            onClick={() => (window.location.href = "/contact")}
            className="w-full sm:w-auto bg-gray-200 text-gray-800 font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-gray-300 transition-all duration-200"
          >
            No
          </button>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default GetPetMicrochipped;
