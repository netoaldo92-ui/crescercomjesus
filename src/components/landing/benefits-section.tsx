import { BookOpen, HeartHandshake, Sparkles, DownloadCloud } from "lucide-react";

const benefits = [
  {
    icon: BookOpen,
    text: "Histórias bíblicas ilustradas que fazem as crianças entenderem a Palavra de forma leve e divertida.",
  },
  {
    icon: HeartHandshake,
    text: "Atividades lúdicas que reforçam valores cristãos como obediência, amor, gratidão e bondade.",
  },
  {
    icon: Sparkles,
    text: "Ajuda os pais a ensinar a fé em casa de forma prática e prazerosa — sem brigas, sem telas, sem dificuldade.",
  },
  {
    icon: DownloadCloud,
    text: "Entrega 100% digital e imediata para começar hoje mesmo.",
  },
];

export const BenefitsSection = () => {
  return (
    <section className="py-20 sm:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Educar na fé ficou mais fácil, bonito e divertido
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Um material pensado para fortalecer os laços da sua família com Deus.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2 xl:grid-cols-4">
            {benefits.map((benefit) => (
              <div key={benefit.text} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <benefit.icon className="h-8 w-8 flex-none text-brand-blue" aria-hidden="true" />
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{benefit.text}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
};