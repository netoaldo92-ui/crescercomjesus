import { Check } from "lucide-react";

const kitItems = [
  "Kit completo com mais de 600 atividades bíblicas ilustradas criadas para ensinar a Palavra de Deus de forma leve e divertida.",
  "Licença PLR completa para personalizar tudo no Canva gratuito e revender com 100% do lucro.",
  "Layouts profissionais e encantadores, com estética infantil cristã.",
  "Materiais voltados para pais, professores, ministérios infantis e igrejas."
];

export const KitContentsSection = () => {
  return (
    <section className="py-20 sm:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-700 mb-12">
            O que tem no Kit PLR Cristão
          </h2>
        </div>
        
        <div className="mt-8 max-w-4xl mx-auto space-y-6">
          {kitItems.map((item, index) => (
            <div 
              key={index} 
              className="flex items-start p-6 blue-gradient rounded-xl shadow-lg text-white glow-effect"
            >
              <div className="rounded-full bg-green-500 p-1 mr-4 flex-shrink-0 mt-1">
                <Check className="h-5 w-5 text-white" />
              </div>
              <p className="text-lg">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};