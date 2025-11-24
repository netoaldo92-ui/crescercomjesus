import { Heart, Coins, Users, BookOpen } from "lucide-react";

const purposePoints = [
  {
    icon: BookOpen,
    title: "Ensina valores cristãos",
    description: "O material ensina princípios bíblicos e valores cristãos de forma lúdica e atrativa para crianças."
  },
  {
    icon: Heart,
    title: "Propósito cristão",
    description: "Ao vender este PLR, você espalha a Palavra de Deus e fortalece famílias na fé cristã."
  },
  {
    icon: Users,
    title: "Ajuda outras famílias",
    description: "Você proporciona ferramentas educativas e cristãs para pais que desejam educar seus filhos na fé."
  },
  {
    icon: Coins,
    title: "Renda com significado",
    description: "Gere renda extra com um produto alinhado aos seus valores e princípios cristãos."
  }
];

export const PurposeSection = () => {
  return (
    <section className="py-20 sm:py-24 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-700">
            É mais do que um produto — é um negócio com propósito
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Empreenda com significado e impacto positivo na vida de famílias cristãs
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {purposePoints.map((point, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-xl shadow-md card-hover flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 rounded-full blue-gradient flex items-center justify-center mb-4">
                <point.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-blue-700 mb-2">{point.title}</h3>
              <p className="text-gray-600">{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};