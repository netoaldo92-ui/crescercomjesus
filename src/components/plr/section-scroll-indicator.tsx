"use client";

import { ChevronDown, ArrowDown } from "lucide-react";

interface SectionScrollIndicatorProps {
  nextSectionId: string;
  message: string;
  variant?: "default" | "urgent" | "highlight";
}

export const SectionScrollIndicator = ({ 
  nextSectionId, 
  message, 
  variant = "default" 
}: SectionScrollIndicatorProps) => {
  const scrollToNext = () => {
    const nextSection = document.getElementById(nextSectionId);
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const getVariantStyles = () => {
    switch (variant) {
      case "urgent":
        return "bg-red-500 hover:bg-red-600 text-white animate-pulse";
      case "highlight":
        return "bg-yellow-500 hover:bg-yellow-600 text-black font-bold";
      default:
        return "bg-blue-600 hover:bg-blue-700 text-white";
    }
  };

  return (
    <div className="flex justify-center py-8">
      <button
        onClick={scrollToNext}
        className={`group px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg ${getVariantStyles()}`}
      >
        <div className="flex items-center space-x-3">
          <span className="text-sm font-semibold">{message}</span>
          <div className="flex flex-col items-center">
            <ChevronDown className="h-5 w-5 animate-bounce group-hover:animate-pulse" />
            <ArrowDown className="h-4 w-4 -mt-2 opacity-60 animate-bounce" style={{ animationDelay: '0.2s' }} />
          </div>
        </div>
      </button>
    </div>
  );
};