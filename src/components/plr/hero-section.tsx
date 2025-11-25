"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ScrollIndicator } from "@/components/plr/scroll-indicator";
import { Shield, CheckCircle } from "lucide-react";

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

  // Função para scroll suave
  const handleSaibaMais = () => {
    const presentationSection = document.getElementById('presentation');
    if (presentationSection) {
      presentationSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };
  
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center">
          {/* Público-alvo */}
          <div className="inline-flex items-center bg-blue-100/90 text-blue-700 px-4 py-2 rounded-full font-semibold mb-6">
            Para cristãos que querem impactar vidas e gerar renda com propósito
          </div>

          {/* Título principal mais direto */}
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight tracking-tight mb-4 max-w-5xl mx-auto">
            Kit Profissional Cristão – Materiais Prontos para Usar e Vender
          </h1>

          {/* Subtítulo que clarifica o que NÃO é */}
          <p className="text-xl md:text-2xl text-blue-100 font-semibold mb-4 max-w-3xl mx-auto">
            Não é ebook simples. É uma estrutura completa para seu negócio digital cristão.
          </p>

          {/* Benefício-chave */}
          <p className="mt-4 text-lg md:text-xl text-white max-w-3xl mx-auto">
            Comece a lucrar com seu projeto digital cristão ainda hoje — sem criar do zero, sem estoque, sem complicação.
          </p>

          {/* Licença simplificada */}
          <p className="mt-4 text-lg text-blue-200 max-w-2xl mx-auto font-medium">
            Licença completa para usar e revender, 100% do lucro para você.
          </p>

          {/* Botões de ação */}
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="https://pay.kiwify.com.br/8GQXukA" 
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button text-xl bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-12 py-8 rounded-xl w-full sm:w-auto inline-block shadow-2xl transform hover:scale-105 transition-all"
            >
              GARANTA AGORA O KIT
            </a>
            <Button 
              variant="outline" 
              className="bg-white/90 text-blue-600 hover:bg-white text-lg px-8 py-6 rounded-xl border-2 border-blue-300 w-full sm:w-auto"
              onClick={handleSaibaMais}
            >
              Saiba mais
            </Button>
          </div>

          {/* Garantia + Segurança */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6 text-white">
            <div className="flex items-center">
              <Shield className="h-5 w-5 mr-2 text-green-300" />
              <span className="text-sm font-medium">Garantia de 7 dias – Satisfação ou seu dinheiro de volta</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 mr-2 text-green-300" />
              <span className="text-sm font-medium">Pagamento 100% seguro</span>
            </div>
          </div>

          {/* Preço suavizado */}
          <div className="mt-6 bg-white/10 backdrop-blur-sm rounded-lg p-4 max-w-md mx-auto border border-white/20">
            <p className="text-white text-lg">
              Valor único de apenas <span className="text-2xl font-bold text-yellow-300">R$ 29,90</span> hoje
            </p>
            <p className="text-blue-200 text-sm mt-1">ou 3x de R$ 9,97 sem juros</p>
          </div>
        </div>
        
        <div className="mt-16 flex justify-center">
          {/* Imagem do Pinterest */}
          <div className="relative w-full max-w-5xl rounded-2xl overflow-hidden shadow-xl">
            <div className="flex justify-center items-center bg-white p-5 rounded-2xl shadow-lg">
              <img 
                src="https://i.pinimg.com/736x/22/a9/bb/22a9bb4e6ba8ebb16c7efee0a2b3e16f.jpg" 
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
      
      {/* Indicador de rolagem */}
      <ScrollIndicator />
      
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