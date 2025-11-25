"use client";

import { useEffect, useState } from "react";
import { ChevronDown, Eye, Gift, DollarSign } from "lucide-react";

const scrollSections = [
  { id: "presentation", label: "Descubra o Kit", icon: Eye },
  { id: "benefits", label: "Veja os Benefícios", icon: Gift },
  { id: "showcase", label: "Exemplos do Material", icon: Eye },
  { id: "offer", label: "Oferta Especial", icon: DollarSign },
];

export const FloatingScrollGuide = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      
      // Esconder se estiver no topo
      if (scrollY < 100) {
        setIsVisible(false);
        return;
      }
      
      setIsVisible(true);

      // Detectar seção atual
      const sections = scrollSections.map(section => 
        document.getElementById(section.id)
      ).filter(Boolean);

      let current = 0;
      sections.forEach((section, index) => {
        if (section && section.offsetTop <= scrollY + 200) {
          current = index;
        }
      });

      setCurrentSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToNextSection = () => {
    const nextIndex = Math.min(currentSection + 1, scrollSections.length - 1);
    const nextSection = document.getElementById(scrollSections[nextIndex].id);
    
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  if (!isVisible) return null;

  const currentSectionData = scrollSections[currentSection];
  const isLastSection = currentSection >= scrollSections.length - 1;

  return (
    <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-40">
      <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-xl border border-gray-200 p-4 max-w-xs">
        {/* Progresso visual */}
        <div className="flex flex-col space-y-2 mb-4">
          {scrollSections.map((section, index) => (
            <div 
              key={section.id}
              className={`flex items-center space-x-2 transition-all duration-300 ${
                index <= currentSection ? 'text-blue-600' : 'text-gray-400'
              }`}
            >
              <div className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index <= currentSection ? 'bg-blue-600' : 'bg-gray-300'
              }`} />
              <span className="text-xs font-medium">{section.label}</span>
            </div>
          ))}
        </div>

        {/* Botão de ação */}
        {!isLastSection && (
          <button
            onClick={scrollToNextSection}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-lg text-sm font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
          >
            <currentSectionData.icon className="h-4 w-4" />
            <span>Continue Lendo</span>
            <ChevronDown className="h-4 w-4 animate-bounce" />
          </button>
        )}

        {isLastSection && (
          <a
            href="https://pay.kiwify.com.br/8GQXukA"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-3 rounded-lg text-sm font-bold transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
          >
            <DollarSign className="h-4 w-4" />
            <span>Garantir Agora</span>
          </a>
        )}
      </div>
    </div>
  );
};