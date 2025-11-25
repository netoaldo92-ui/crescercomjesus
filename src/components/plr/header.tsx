"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-500 ${
      isScrolled ? "py-2 bg-white/95 shadow-lg backdrop-blur-md" : "py-4 bg-transparent"
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            {/* Logo/ícone simples */}
            <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
              isScrolled ? "bg-blue-600" : "bg-white/20 backdrop-blur-sm"
            }`}>
              <span className="text-white font-bold text-lg">✨</span>
            </div>
          </div>
          
          <a 
            href="https://pay.kiwify.com.br/8GQXukA" 
            target="_blank"
            rel="noopener noreferrer" 
            className={`px-6 py-3 rounded-lg text-sm font-bold transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${
              isScrolled 
                ? "bg-blue-600 hover:bg-blue-700 text-white shadow-md" 
                : "bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm border border-white/30"
            }`}
          >
            Garantir Agora
          </a>
        </div>
      </div>
    </header>
  );
};