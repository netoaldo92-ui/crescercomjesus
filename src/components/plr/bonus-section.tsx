import { Gift, CheckCircle } from "lucide-react";

const bonusFeatures = [
  "Artes exclusivas para personalizar a área de entrega",
  "Imagens prontas e profissionais",
  "Visual acolhedor e cristão",
  "Aumenta valor percebido do PLR"
];

export const BonusSection = () => {
  return (
    <section className="py-20 sm:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center bg-blue-100 text-blue-600 px-4 py-2 rounded-full font-bold mb-6">
                <Gift className="h-5 w-5 mr-2" />
                BÔNUS EXCLUSIVO
              </div>
              
              <h2 className="text-3xl sm:text-4xl font-bold text-blue-700 mb-6">
                Bônus Especial: Artes para Área de Membros
              </h2>
              
              <div className="space-y-4 mt-6">
                {bonusFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" />
                    <p className="text-gray-700">{feature}</p>
                  </div>
                ))}
              </div>
              
              <div className="mt-8">
                <p className="text-blue-700 font-semibold">
                  Valor deste bônus: R$ 97,00 <span className="line-through text-gray-500">— GRÁTIS para você!</span>
                </p>
              </div>
            </div>
            
            <div className="relative">
              {/* Mockup da área de membros */}
              <div className="bg-white rounded-xl overflow-hidden shadow-xl border border-gray-200">
                <div className="p-3 bg-blue-600 text-white text-center">
                  <p className="font-semibold">Área de Membros</p>
                </div>
                
                <div className="p-6 space-y-4">
                  <div className="rounded-lg bg-blue-50 h-48 flex items-center justify-center p-4">
                    <p className="text-blue-500 text-center">Banner de boas-vindas personalizado</p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="rounded bg-gray-100 h-24 flex items-center justify-center">
                      <p className="text-gray-500 text-sm text-center">Botão de acesso</p>
                    </div>
                    <div className="rounded bg-gray-100 h-24 flex items-center justify-center">
                      <p className="text-gray-500 text-sm text-center">Botão de download</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Badge do bônus */}
              <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-red-500 text-white flex items-center justify-center shadow-lg transform rotate-12">
                <div className="text-center">
                  <p className="text-sm font-bold">BÔNUS</p>
                  <p className="text-xs">GRÁTIS</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};