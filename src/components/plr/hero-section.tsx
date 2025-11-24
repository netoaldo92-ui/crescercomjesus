"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

// Simulação de notificações de venda
const salesNotifications = [
  { name: "Maria L.", location: "São Paulo", time: "agora mesmo" },
  { name: "João P.", location: "Belo Horizonte", time: "há 2 minutos" },
  { name: "Ana C.", location: "Rio de Janeiro", time: "há 5 minutos" },
  { name: "Pedro S.", location: "Curitiba", time: "há 10 minutos" },
  { name: "Fernanda M.", location: "Salvador", time: "há 15 minutos" }
];

export const HeroSection = () => {
  const [notification, setNotification] = useState<null | typeof salesNotifications[0]>(null);
  
  // Efeito para mostrar notificações aleatórias a cada 15 segundos
  useEffect(() => {
    const showRandomNotification = () => {
      const randomIndex = Math.floor(Math.random() * salesNotifications.length);
      setNotification(salesNotifications[randomIndex]);
      
      // Esconder a notificação após 5 segundos
      setTimeout(() => {
        setNotification(null);
      }, 5000);
    };
    
    // Mostrar a primeira notificação após 5 segundos
    const firstTimer = setTimeout(showRandomNotification, 5000);
    
    // Configurar intervalo para mostrar notificações
    const interval = setInterval(showRandomNotification, 15000);
    
    return () => {
      clearTimeout(firstTimer);
      clearInterval(interval);
    };
  }, []);
  
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight tracking-tight mb-6 max-w-5xl mx-auto">
            SEJA DONO(A) DO SEU PRÓPRIO PRODUTO CRISTÃO E FIQUE COM 100% DO LUCRO AINDA HOJE!
          </h1>
          <p className="mt-6 text-xl md:text-2xl text-white max-w-3xl mx-auto">
            Comece a ganhar entre R$ 2.000 e R$ 5.000 ainda hoje revendendo um produto cristão com propósito.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <Button className="cta-button text-xl bg-blue-400 hover:bg-blue-500 text-white px-12 py-8 rounded-xl w-full sm:w-auto">
              QUERO MEU PLR AGORA
            </Button>
            <Button variant="outline" className="bg-white/90 text-blue-600 hover:bg-white text-lg px-8 py-6 rounded-xl border-2 border-blue-300 w-full sm:w-auto">
              Saiba mais
            </Button>
          </div>
        </div>
        
        <div className="mt-16 flex justify-center">
          {/* Imagem do Canva (primeira página) */}
          <div className="relative w-full max-w-5xl rounded-2xl overflow-hidden shadow-xl">
            <div className="flex justify-center items-center bg-white p-5 rounded-2xl shadow-lg">
              <img 
                src="/canva-primeira-pagina.jpg" 
                alt="Material infantil cristão PLR" 
                className="w-full h-auto rounded-lg max-w-4xl"
              />
            </div>
            
            {/* Elementos decorativos */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-yellow-300 rounded-full opacity-30 pulse-animation"></div>
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-blue-300 rounded-full opacity-40"></div>
          </div>
        </div>
      </div>
      
      {/* Notificações de venda */}
      {notification && (
        <div className="pop-notification flex items-center">
          <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-3">
            <span className="text-green-600 text-lg">✓</span>
          </div>
          <div>
            <p className="font-semibold text-gray-800">{notification.name} de {notification.location}</p>
            <p className="text-xs text-gray-500">Comprou {notification.time}</p>
          </div>
        </div>
      )}
    </section>
  );
};