"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ScrollIndicator } from "@/components/plr/scroll-indicator";
import { Shield, CheckCircle, Sparkles } from "lucide-react";

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
  const [isVisible, setIsVisible] = useState(false);
  
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

  // Animação de entrada
  useEffect(() => {
    setIsVisible(true);
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
      {/* Elementos decorativos animados */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-yellow-300 rounded-full opacity-20 float-animation"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-blue-300 rounded-full opacity-30 float-animation" style={{animationDelay: '1s'}}></div>
      <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-white rounded-full opacity-25 float-animation" style={{animationDelay: '2s'}}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Público-alvo */}
          <div className="inline-flex items-center bg-blue-100/90 text-blue-700 px-6 py-3 rounded-full font-semibold mb-8 interactive-card bounce-in">
            <Sparkles className="h-4 w-4 mr-2 icon-bounce" />
            Para cristãos que querem impactar vidas e gerar renda com propósito
          </div>

          {/* Título principal mais direto */}
          <h1 className={`text-4xl md:text-6xl font-extrabold text-white leading-tight tracking-tight mb-6 max-w-5xl mx-auto text-hover-effect transition-all duration-700 ${isVisible ? 'slide-in-up' : ''}`}>
            Kit Profissional Cristão – Materiais Prontos para Usar e Vender
          </h1>

          {/* Subtítulo que clarifica o que NÃO é */}
          <p className={`text-xl md:text-2xl text-blue-100 font-semibold mb-6 max-w-3xl mx-auto transition-all duration-700 delay-200 ${isVisible ? 'slide-in-up' : ''}`}>
            Não é ebook simples. É uma estrutura completa para seu negócio digital cristão.
          </p>

          {/* Benefício-chave */}
          <p className={`mt-4 text-lg md:text-xl text-white max-w-3xl mx-auto transition-all duration-700 delay-300 ${isVisible ? 'slide-in-up' : ''}`}>
            Comece a lucrar com seu projeto digital cristão ainda hoje — sem criar do zero, sem estoque, sem complicação.
          </p>

          {/* Licença simplificada */}
          <p className={`mt-6 text-lg text-blue-200 max-w-2xl mx-auto font-medium transition-all duration-700 delay-400 ${isVisible ? 'slide-in-up' : ''}`}>
            Licença completa para usar e revender, 100% do lucro para você.
          </p>

          {/* Botões de ação */}
          <div className={`mt-12 flex flex-col sm:flex-row justify-center gap-6 transition-all duration-700 delay-500 ${isVisible ? 'slide-in-up' : ''}`}>
            <a 
              href="https://pay.kiwify.com.br/8GQXukA" 
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-12 py-8 rounded-xl text-xl w-full sm:w-auto inline-block shadow-2xl transform hover:scale-105 transition-all duration-300 ripple-effect pulse-glow"
            >
              <span className="relative z-10">GARANTA AGORA O KIT</span>
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
            <Button 
              variant="outline" 
              className="bg-white/90 text-blue-600 hover:bg-white text-lg px-8 py-6 rounded-xl border-2 border-blue-300 w-full sm:w-auto interactive-button hover:shadow-xl"
              onClick={handleSaibaMais}
            >
              Saiba mais
            </Button>
          </div>

          {/* Garantia + Segurança */}
          <div className={`mt-10 flex flex-col sm:flex-row items-center justify-center gap-8 text-white transition-all duration-700 delay-600 ${isVisible ? 'slide-in-up' : ''}`}>
            <div className="flex items-center group">
              <Shield className="h-6 w-6 mr-3 text-green-300 icon-bounce" />
              <span className="text-sm font-medium group-hover:text-green-200 transition-colors">Garantia de 7 dias – Satisfação ou seu dinheiro de volta</span>
            </div>
            <div className="flex items-center group">
              <CheckCircle className="h-6 w-6 mr-3 text-green-300 icon-bounce" />
              <span className="text-sm font-medium group-hover:text-green-200 transition-colors">Pagamento 100% seguro</span>
            </div>
          </div>

          {/* Preço suavizado */}
          <div className={`mt-8 bg-white/10 backdrop-blur-sm rounded-lg p-6 max-w-md mx-auto border border-white/20 interactive-card pulse-glow transition-all duration-700 delay-700 ${isVisible ? 'slide-in-up' : ''}`}>
            <p className="text-white text-lg">
              Valor único de apenas <span className="text-3xl font-bold text-yellow-300 animate-pulse">R$ 29,90</span> hoje
            </p>
            <p className="text-blue-200 text-sm mt-2">ou 3x de R$ 9,97 sem juros</p>
          </div>
        </div>
        
        <div className={`mt-20 flex justify-center transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Imagem do Pinterest */}
          <div className="relative w-full max-w-5xl rounded-2xl overflow-hidden shadow-xl interactive-card">
            <div className="flex justify-center items-center bg-white p-5 rounded-2xl shadow-lg">
              <img 
                src="https://i.pinimg.com/736x/22/a9/bb/22a9bb4e6ba8ebb16c7efee0a2b3e16f.jpg" 
                alt="Material infantil cristão PLR" 
                className="w-full h-auto rounded-lg max-w-4xl hover:scale-105 transition-transform duration-500"
              />
            </div>
            
            {/* Elementos decorativos */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-yellow-300 rounded-full opacity-30 pulse-animation"></div>
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-blue-300 rounded-full opacity-40 float-animation"></div>
          </div>
        </div>
      </div>
      
      {/* Indicador de rolagem */}
      <ScrollIndicator />
      
      {/* Notificações de venda */}
      {notification && (
        <div className="fixed bottom-6 left-6 bg-white p-4 rounded-xl shadow-2xl border-l-4 border-green-500 z-50 bounce-in interactive-card">
          <div className="flex items-center">
            <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mr-4 pulse-glow">
              <span className="text-green-600 text-xl">✓</span>
            </div>
            <div>
              <p className="font-semibold text-gray-800">{notification.name} de {notification.location}</p>
              <p className="text-xs text-gray-500">Comprou {notification.time}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};