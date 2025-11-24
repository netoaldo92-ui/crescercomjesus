"use client";

import { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// Simulação de compras recentes
const recentBuyers = [
  { name: "Rafael", time: "agora mesmo" },
  { name: "Patrícia", time: "há 3 minutos" },
  { name: "Eduardo", time: "há 7 minutos" },
  { name: "Gabriela", time: "há 12 minutos" },
];

// Imagens de atividades bíblicas
const biblicalActivities = [
  {
    image: "https://i.pinimg.com/736x/e4/e1/0e/e4e10e6cf6c607073ddd0041799e765a.jpg",
    title: "Arca de Noé",
    type: "Atividade: Pintura Bíblica"
  },
  {
    image: "https://i.pinimg.com/736x/d3/13/e9/d313e933218e8794d5108710298d6c7d.jpg",
    title: "Daniel e os Leões",
    type: "Jogo: Memória Cristã"
  },
  {
    image: "https://i.pinimg.com/736x/c1/64/0b/c1640bc59c80f104bda3e79f3dd09c42.jpg",
    title: "Davi e Golias",
    type: "Desafio: Versículos"
  },
  {
    image: "https://i.pinimg.com/736x/cb/c4/a7/cbc4a702620bc869c5949e243a05fb64.jpg",
    title: "Jesus e as Crianças",
    type: "Atividade: Pintura Bíblica"
  },
  {
    image: "https://i.pinimg.com/736x/15/0b/33/150b33202bc4bf472cf3c5d93c893939.jpg",
    title: "José do Egito",
    type: "História: Perdão e Esperança"
  },
  // Repetindo algumas imagens para ter mais itens no carrossel
  {
    image: "https://i.pinimg.com/736x/e4/e1/0e/e4e10e6cf6c607073ddd0041799e765a.jpg",
    title: "Arca de Noé - Colorir",
    type: "Jogo: Memória Cristã"
  },
  {
    image: "https://i.pinimg.com/736x/15/0b/33/150b33202bc4bf472cf3c5d93c893939.jpg",
    title: "José - A Túnica",
    type: "Atividade: Colorir"
  },
  {
    image: "https://i.pinimg.com/736x/c1/64/0b/c1640bc59c80f104bda3e79f3dd09c42.jpg",
    title: "Davi - História",
    type: "Atividade: Pintura Bíblica"
  }
];

export const ActivitySamplesSection = () => {
  const [currentBuyer, setCurrentBuyer] = useState<null | typeof recentBuyers[0]>(null);
  
  // Efeito para mostrar compras recentes
  useEffect(() => {
    const showRandomBuyer = () => {
      const randomIndex = Math.floor(Math.random() * recentBuyers.length);
      setCurrentBuyer(recentBuyers[randomIndex]);
      
      // Esconder após 4 segundos
      setTimeout(() => {
        setCurrentBuyer(null);
      }, 4000);
    };
    
    // Mostrar a primeira compra após 10 segundos
    const firstTimer = setTimeout(showRandomBuyer, 10000);
    
    // Configurar intervalo
    const interval = setInterval(showRandomBuyer, 30000);
    
    return () => {
      clearTimeout(firstTimer);
      clearInterval(interval);
    };
  }, []);

  return (
    <section className="py-20 sm:py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-700">
            Veja exemplos das atividades que você vai receber
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Material completo, visualmente atraente e com alto valor percebido
          </p>
        </div>
        
        <Carousel
          opts={{
            align: "center",
            loop: true,
          }}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent>
            {biblicalActivities.map((activity, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-2">
                  <div className="bg-blue-50 rounded-xl overflow-hidden shadow-md card-hover border border-blue-100 aspect-[3/4]">
                    <div className="h-full flex flex-col">
                      <div className="flex-1 overflow-hidden">
                        <img
                          src={activity.image}
                          alt={activity.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-4 bg-white">
                        <p className="text-sm font-medium text-blue-600">{activity.type}</p>
                        <p className="text-sm font-medium text-gray-800 mt-1">{activity.title}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="ml-4 lg:ml-10" />
          <CarouselNext className="mr-4 lg:mr-10" />
        </Carousel>
      </div>
      
      {/* Notificação de compra */}
      {currentBuyer && (
        <div className="fixed bottom-4 right-4 bg-white p-4 rounded-lg shadow-lg border-l-4 border-green-500 z-30 animate-in slide-in-from-right">
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-3">
              <span className="text-green-600">✓</span>
            </div>
            <div>
              <p className="font-semibold text-gray-800">{currentBuyer.name} acabou de comprar</p>
              <p className="text-xs text-gray-500">{currentBuyer.time}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};