import { Check } from "lucide-react";

const salesPageFeatures = [
  "Página de vendas profissional, testada e otimizada para converter vendas",
  "Copywriting persuasivo e focado nos benefícios para o cliente final",
  "Design responsivo que funciona perfeitamente em celulares e tablets",
  "Sistema que trabalha 24 horas por dia no automático para você",
  "Basta divulgar o link e começar a receber vendas"
];

export const SalesPageSection = () => {
  return (
    <section className="py-20 sm:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-blue-700 mb-6">
              Página de vendas pronta para converter vendas
            </h2>
            
            <div className="space-y-4 mt-6">
              {salesPageFeatures.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <div className="rounded-full bg-green-500 p-1 mr-3 flex-shrink-0 mt-1">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <p className="text-gray-700">{feature}</p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            {/* Mockup da página de vendas */}
            <div className="bg-blue-50 rounded-xl overflow-hidden shadow-xl glow-effect">
              <div className="p-3 blue-gradient text-white text-center rounded-t-xl">
                <div className="flex space-x-2 justify-start mb-1">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                <p className="text-sm font-semibold">www.seunegociocristao.com.br</p>
              </div>
              
              <div className="bg-white p-4 space-y-3">
                {/* Simulação da estrutura da página */}
                <div className="h-10 bg-blue-100 rounded w-3/4 mx-auto"></div>
                <div className="h-6 bg-blue-50 rounded w-1/2 mx-auto"></div>
                <div className="h-24 bg-gray-100 rounded w-full mx-auto mt-4"></div>
                <div className="grid grid-cols-2 gap-2 mt-2">
                  <div className="h-16 bg-blue-50 rounded"></div>
                  <div className="h-16 bg-blue-50 rounded"></div>
                </div>
                <div className="h-8 bg-green-100 rounded-lg w-2/3 mx-auto mt-4"></div>
              </div>
            </div>
            
            {/* Elementos decorativos */}
            <div className="absolute -bottom-6 -right-6 w-12 h-12 bg-yellow-300 rounded-full opacity-60"></div>
            <div className="absolute -top-6 -left-6 w-12 h-12 bg-blue-300 rounded-full opacity-60"></div>
          </div>
        </div>
      </div>
    </section>
  );
};