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
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? "py-2 bg-white/95 shadow-md backdrop-blur-sm" : "py-4 bg-transparent"
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className={`font-bold text-xl ${isScrolled ? "text-blue-600" : "text-white"}`}>
              PLR Luz Infantil
            </h1>
          </div>
          
          <a 
            href="https://pay.kiwify.com.br/8GQXukA" 
            target="_blank"
            rel="noopener noreferrer" 
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              isScrolled 
                ? "bg-blue-600 hover:bg-blue-700 text-white" 
                : "bg-white/20 hover:bg-white/30 text-white backdrop-blur-sm"
            }`}
          >
            Garantir Agora
          </a>
        </div>
      </div>
    </header>
  );
};