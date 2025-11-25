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
      className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center cursor-pointer z-20"
      onClick={scrollToContent}
    >
      <p className="text-white text-sm mb-2 font-medium bg-blue-600/70 px-3 py-1 rounded-full backdrop-blur-sm">
        Descubra como iniciar seu negócio digital cristão
      </p>
      <div className="flex flex-col items-center animate-bounce">
        <ChevronDown className="h-7 w-7 text-white stroke-[3]" />
        <ChevronDown className="h-7 w-7 text-white stroke-[3] -mt-5" />
      </div>
    </div>
  );
};