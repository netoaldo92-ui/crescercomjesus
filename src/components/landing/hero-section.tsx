"use client";
import { Button } from "@/components/ui/button";
import { Volume2, VolumeX } from "lucide-react";
import { useState, useRef } from "react";

export const HeroSection = () => {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section className="relative h-screen flex items-center justify-center text-center text-white overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-black/60 z-10"></div>
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-1/2 left-1/2 w-full h-full object-cover transform -translate-x-1/2 -translate-y-1/2 z-0"
        src="https://videos.pexels.com/video-files/854711/854711-hd_1920_1080_25fps.mp4" // URL do vídeo de placeholder
      >
        Seu navegador não suporta o elemento de vídeo.
      </video>
      
      <div className="relative z-20 container mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
          A Maneira Divertida de Ensinar a Bíblia para seu Filho
        </h1>
        <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-gray-200">
          Transforme a educação cristã em uma aventura diária com histórias e atividades que encantam.
        </p>
        <div className="mt-10">
          <button 
            className="cta-button text-xl px-10 py-8 w-full max-w-md mx-auto"
          >
            QUERO ENSINAR A BÍBLIA DE FORMA DIVERTIDA
          </button>
        </div>
      </div>

      <button 
        onClick={toggleMute}
        className="absolute bottom-5 right-5 z-20 bg-black/50 p-2 rounded-full text-white hover:bg-black/70"
      >
        {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
      </button>
    </section>
  );
};