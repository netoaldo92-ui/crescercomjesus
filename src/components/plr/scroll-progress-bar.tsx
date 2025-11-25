"use client";

import { useEffect, useState } from "react";

export const ScrollProgressBar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      setScrollProgress(Math.min(progress, 100));
    };

    window.addEventListener("scroll", updateScrollProgress);
    updateScrollProgress(); // Calcular progresso inicial

    return () => window.removeEventListener("scroll", updateScrollProgress);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-50">
      <div 
        className="h-full bg-gradient-to-r from-blue-500 to-yellow-500 transition-all duration-150 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />
      {scrollProgress < 100 && (
        <div 
          className="absolute top-0 h-full w-8 bg-gradient-to-r from-transparent to-white opacity-50 animate-pulse"
          style={{ left: `${Math.max(0, scrollProgress - 5)}%` }}
        />
      )}
    </div>
  );
};