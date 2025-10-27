import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import Header from "@/components/Header";
import RegisterHero1 from "@/components/RegisterHero1";
import Footer from "@/components/Footer";


  const GetPetMicrochipped: React.FC = () => {
return (
  <div className="min-h-screen flex flex-col bg-white">
      <Header />
            <div className="flex-1 bg-white">
        <RegisterHero1 />
                          </div>
<main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 p-6">
<motion.h1
initial={{ opacity: 0, y: -20 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.6 }}
className="text-3xl md:text-5xl font-bold text-gray-800 mb-10 text-center"
>
Is your pet microchipped?
</motion.h1>


<div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center">
<motion.button
whileHover={{ scale: 1.05 }}
whileTap={{ scale: 0.95 }}
onClick={() => (window.location.href = "/registerpet")}
className="w-full sm:w-auto bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-blue-700 transition-all duration-200"
>
Yes
</motion.button>


<motion.button
whileHover={{ scale: 1.05 }}
whileTap={{ scale: 0.95 }}
onClick={() => (window.location.href = "/contact")}
className="w-full sm:w-auto bg-gray-200 text-gray-800 font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-gray-300 transition-all duration-200"
>
No
</motion.button>
</div>
</main>
);
};


export default GetPetMicrochipped;
