import { ArrowRight } from "lucide-react";

// Adicionando imagens reais para as histórias bíblicas
const biblicalStories = [
  { 
    image: "https://i.pinimg.com/736x/e4/e1/0e/e4e10e6cf6c607073ddd0041799e765a.jpg",
    title: "Arca de Noé",
    type: "Atividade bíblica ilustrada"
  },
  { 
    image: "https://i.pinimg.com/736x/d3/13/e9/d313e933218e8794d5108710298d6c7d.jpg",
    title: "Daniel e os Leões",
    type: "Personagem bíblico infantil"
  },
  { 
    image: "https://i.pinimg.com/736x/c1/64/0b/c1640bc59c80f104bda3e79f3dd09c42.jpg",
    title: "Davi e Golias",
    type: "Atividade bíblica ilustrada"
  },
  { 
    image: "https://i.pinimg.com/736x/cb/c4/a7/cbc4a702620bc869c5949e243a05fb64.jpg",
    title: "Jesus e as Crianças",
    type: "Personagem bíblico infantil"
  },
  { 
    image: "https://i.pinimg.com/736x/15/0b/33/150b33202bc4bf472cf3c5d93c893939.jpg",
    title: "José do Egito",
    type: "História bíblica ilustrada"
  },
  { 
    image: "https://i.pinimg.com/736x/e4/e1/0e/e4e10e6cf6c607073ddd0041799e765a.jpg",
    title: "Arca de Noé - Colorir",
    type: "Atividade bíblica ilustrada"
  },
  { 
    image: "https://i.pinimg.com/736x/d3/13/e9/d313e933218e8794d5108710298d6c7d.jpg",
    title: "Daniel - Jogo da Memória",
    type: "Jogo bíblico infantil"
  },
  { 
    image: "https://i.pinimg.com/736x/15/0b/33/150b33202bc4bf472cf3c5d93c893939.jpg",
    title: "José - Atividades",
    type: "Jogo bíblico infantil"
  },
];

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
          {biblicalStories.map((story, index) => (
            <div 
              key={index} 
              className="aspect-[3/4] bg-white rounded-lg overflow-hidden shadow-md card-hover"
            >
              <div className="h-full flex flex-col">
                <div className="flex-1 overflow-hidden">
                  <img 
                    src={story.image} 
                    alt={story.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-3 bg-white">
                  <p className="text-xs text-blue-500 font-medium">{story.type}</p>
                  <p className="text-sm font-medium text-gray-800 mt-1">{story.title}</p>
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