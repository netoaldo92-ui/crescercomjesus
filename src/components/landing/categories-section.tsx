import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

const categories = [
  {
    title: "Histórias Bíblicas Ilustradas",
    items: [
      { title: "A Criação do Mundo", image: "/placeholder.svg" },
      { title: "A Arca de Noé", image: "/placeholder.svg" },
      { title: "Davi e Golias", image: "/placeholder.svg" },
      { title: "O Nascimento de Jesus", image: "/placeholder.svg" },
      { title: "A Multiplicação dos Pães", image: "/placeholder.svg" },
      { title: "Jonas e o Grande Peixe", image: "/placeholder.svg" },
    ],
  },
  {
    title: "Atividades de Valores Cristãos",
    items: [
      { title: "Jogo da Gratidão", image: "/placeholder.svg" },
      { title: "Caça ao Tesouro da Obediência", image: "/placeholder.svg" },
      { title: "Árvore do Amor ao Próximo", image: "/placeholder.svg" },
      { title: "Pote da Bondade", image: "/placeholder.svg" },
      { title: "Desafio do Perdão", image: "/placeholder.svg" },
    ],
  },
  {
    title: "Desenhos para Colorir com Fé",
    items: [
      { title: "Anjos e Arcanjos", image: "/placeholder.svg" },
      { title: "Personagens da Bíblia", image: "/placeholder.svg" },
      { title: "Cenas do Novo Testamento", image: "/placeholder.svg" },
      { title: "Salmos Ilustrados", image: "/placeholder.svg" },
      { title: "Frutos do Espírito", image: "/placeholder.svg" },
    ],
  },
];

export const CategoriesSection = () => {
  return (
    <section className="py-20 sm:py-24 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl lg:text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Explore Nosso Conteúdo
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Navegue por um universo de fé, aprendizado e diversão para seus filhos.
          </p>
        </div>
        <div className="space-y-12">
          {categories.map((category) => (
            <div key={category.title}>
              <h3 className="text-2xl font-bold tracking-tight text-gray-800 mb-4">
                {category.title}
              </h3>
              <Carousel
                opts={{
                  align: "start",
                  loop: true,
                }}
                className="w-full"
              >
                <CarouselContent>
                  {category.items.map((item, index) => (
                    <CarouselItem
                      key={index}
                      className="basis-1/2 md:basis-1/3 lg:basis-1/5"
                    >
                      <div className="p-1">
                        <Card className="overflow-hidden group">
                          <CardContent className="p-0">
                            <div className="aspect-[3/4] bg-gray-200 flex items-center justify-center relative">
                              <p className="text-gray-500 text-sm text-center p-2">{item.title}</p>
                              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <p className="text-white font-bold text-center p-2">{item.title}</p>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="ml-12" />
                <CarouselNext className="mr-12" />
              </Carousel>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};