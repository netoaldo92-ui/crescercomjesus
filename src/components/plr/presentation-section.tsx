import { Check } from "lucide-react";

const bullets = [
  "Está cansada de tentar equilibrar as contas e ver o dinheiro acabar antes do mês?",
  "Sonha em ter um produto digital seu, mas não sabe por onde começar?",
  "Gostaria de empreender sem abrir mão da fé, da rotina e dos valores cristãos?",
  "Já tentou vender algo que não representava você — e não deu resultado?",
  "Gostaria de um negócio que combina propósito, fé e renda extra?"
];

export const PresentationSection = () => {
  return (
    <section className="py-20 sm:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-600 mb-12">
            Apresentamos o PLR Luz Infantil
          </h2>
        </div>
        
        <div className="mt-8 max-w-3xl mx-auto space-y-6">
          {bullets.map((bullet, index) => (
            <div 
              key={index} 
              className="flex items-start p-6 bg-blue-50 rounded-xl shadow-sm card-hover border border-blue-100"
            >
              <div className="rounded-full bg-blue-500 p-1 mr-4 flex-shrink-0 mt-1">
                <Check className="h-5 w-5 text-white" />
              </div>
              <p className="text-lg text-gray-700">{bullet}</p>
            </div>
          ))}
          
          <div className="mt-10 text-center">
            <p className="text-xl font-semibold text-blue-700 mt-12">
              Se você respondeu "sim", esse PLR foi feito especialmente para você.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};