"use client";

import { useEffect, useState } from "react";
import { Clock } from "lucide-react";

// Define o tempo alvo: 4 horas
const FOUR_HOURS = 4 * 60 * 60 * 1000;

export const CountdownTimer = () => {
  // Estado para armazenar o tempo restante
  const [timeRemaining, setTimeRemaining] = useState({
    hours: 4,
    minutes: 0,
    seconds: 0
  });

  const [isSticky, setIsSticky] = useState(false);

  // Efeito para iniciar o contador regressivo
  useEffect(() => {
    // Verifica se já existe um tempo salvo no localStorage
    const savedEndTime = localStorage.getItem('offerEndTime');
    let endTime;

    if (savedEndTime) {
      endTime = parseInt(savedEndTime);
      
      // Se o tempo já expirou, define um novo
      if (endTime < Date.now()) {
        endTime = Date.now() + FOUR_HOURS;
        localStorage.setItem('offerEndTime', endTime.toString());
      }
    } else {
      // Primeira visita, define tempo de 4 horas
      endTime = Date.now() + FOUR_HOURS;
      localStorage.setItem('offerEndTime', endTime.toString());
    }

    const updateTimer = () => {
      const now = Date.now();
      const timeDiff = Math.max(0, endTime - now);
      
      const hours = Math.floor(timeDiff / (1000 * 60 * 60));
      const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);
      
      setTimeRemaining({ hours, minutes, seconds });
    };

    // Atualiza imediatamente e depois a cada segundo
    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    
    return () => clearInterval(interval);
  }, []);

  // Adiciona efeito para tornar o timer fixo após rolagem
  useEffect(() => {
    const checkScroll = () => {
      if (window.scrollY > 500) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    
    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  const { hours, minutes, seconds } = timeRemaining;

  // Formata o timer com zeros à esquerda
  const formattedHours = hours.toString().padStart(2, '0');
  const formattedMinutes = minutes.toString().padStart(2, '0');
  const formattedSeconds = seconds.toString().padStart(2, '0');

  return (
    <>
      {isSticky && (
        <div className="fixed bottom-4 right-4 z-40 bg-blue-600 text-white px-4 py-3 rounded-lg shadow-lg border border-white/20 animate-pulse">
          <div className="flex items-center">
            <Clock className="mr-2 h-4 w-4" />
            <p className="text-sm font-bold">
              Oferta expira em: {formattedHours}:{formattedMinutes}:{formattedSeconds}
            </p>
          </div>
        </div>
      )}

      <div className="bg-blue-800 py-3 text-white text-center">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center">
            <div className="flex items-center">
              <Clock className="h-5 w-5 mr-2 animate-pulse" />
              <p className="font-semibold">OFERTA POR TEMPO LIMITADO:</p>
            </div>
            
            <div className="flex items-center ml-0 md:ml-4 mt-2 md:mt-0">
              <div className="flex">
                <div className="bg-blue-900 px-3 py-1 rounded mx-1 min-w-[40px]">
                  {formattedHours}
                </div>
                <span className="mx-1">:</span>
                <div className="bg-blue-900 px-3 py-1 rounded mx-1 min-w-[40px]">
                  {formattedMinutes}
                </div>
                <span className="mx-1">:</span>
                <div className="bg-blue-900 px-3 py-1 rounded mx-1 min-w-[40px]">
                  {formattedSeconds}
                </div>
              </div>
            </div>
            
            <a 
              href="https://pay.kiwify.com.br/8GQXukA"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-4 py-1 rounded ml-0 md:ml-6 text-sm uppercase mt-2 md:mt-0"
            >
              Garanta agora
            </a>
          </div>
        </div>
      </div>
    </>
  );
};