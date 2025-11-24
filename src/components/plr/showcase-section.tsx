import { ArrowRight } from "lucide-react";

export const ShowcaseSection = () => {
  return (
    <section className="py-20 sm:py-24 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-700">
            Um olhar no que você vai receber
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Conteúdo completo com atividades bíblicas ilustradas para todas as idades
          </p>
        </div>
        
        {/* Grid de imagens do produto */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto">
          {[...Array(8)].map((_, index) => (
            <div 
              key={index} 
              className="aspect-[3/4] bg-white rounded-lg overflow-hidden shadow-md card-hover"
            >
              <div className="h-full flex flex-col">
                <div className="flex-1 bg-blue-100 p-2 flex items-center justify-center">
                  <p className="text-center text-blue-500 text-sm">
                    {index % 2 === 0 ? 
                      "Atividade bíblica ilustrada" : 
                      "Personagem bíblico infantil"}
                  </p>
                </div>
                <div className="p-3 bg-white">
                  <p className="text-sm font-medium text-gray-800 text-center">
                    {index % 4 === 0 ? "Arca de Noé" : 
                     index % 4 === 1 ? "Daniel e os Leões" : 
                     index % 4 === 2 ? "Davi e Golias" : 
                     "Jesus e as Crianças"}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Botão "Ver mais exemplos" */}
        <div className="text-center mt-12">
          <button className="inline-flex items-center justify-center text-blue-600 font-semibold hover:text-blue-800">
            Ver mais exemplos
            <ArrowRight className="ml-2 h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
};