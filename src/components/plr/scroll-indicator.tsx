"use client";

import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";

export const ScrollIndicator = () => {
  const [isVisible, setIsVisible] = useState(true);

  // Esconder o indicador após rolagem
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToContent = () => {
    // Rola para a seção de apresentação
    const presentationSection = document.getElementById("presentation");
    if (presentationSection) {
      presentationSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (!isVisible) return null;

  return (
    <div 
      className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center cursor-pointer z-20 group"
      onClick={scrollToContent}
    >
      <div className="bg-blue-600/80 backdrop-blur-sm px-4 py-2 rounded-full mb-4 interactive-card hover:bg-blue-700/90 transition-all duration-300">
        <p className="text-white text-sm font-medium group-hover:scale-105 transition-transform">
          Descubra como iniciar seu negócio digital cristão
        </p>
      </div>
      <div className="flex flex-col items-center animate-bounce group-hover:animate-pulse">
        <ChevronDown className="h-8 w-8 text-white stroke-[3] transform group-hover:scale-110 transition-transform" />
        <ChevronDown className="h-8 w-8 text-white stroke-[3] -mt-6 transform group-hover:scale-110 transition-transform" />
      </div>
    </div>
  );
};