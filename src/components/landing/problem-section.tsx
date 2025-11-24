import { Tv, Smartphone, Frown } from "lucide-react";

const problems = [
  {
    icon: Tv,
    text: "Seu filho passa horas em telas e não se interessa por atividades educativas?",
  },
  {
    icon: Frown,
    text: "Você sente dificuldade em explicar as histórias da Bíblia de uma forma que ele entenda e goste?",
  },
  {
    icon: Smartphone,
    text: "Os desenhos e jogos que ele consome não ensinam os valores cristãos que você considera importantes?",
  },
];

export const ProblemSection = () => {
  return (
    <section className="py-20 sm:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Seu filho não se interessa pela Bíblia?
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            Se você respondeu "sim" a alguma dessas perguntas, saiba que não está sozinho.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <div key={index} className="bg-card p-6 rounded-lg text-center">
              <div className="flex justify-center mb-4">
                <problem.icon className="h-12 w-12 text-brand-yellow" />
              </div>
              <p className="text-lg text-gray-200">{problem.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};