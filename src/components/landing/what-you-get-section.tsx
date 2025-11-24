import { Check } from "lucide-react";

const items = [
  "Histórias Bíblicas Ilustradas em PDF",
  "Atividades de Valores Cristãos",
  "Desenhos para Colorir com Temas Bíblicos",
  "Jogos e Passatempos Educativos",
  "Acesso Vitalício a Todo o Material",
  "Bônus: Guia para Pais",
];

export const WhatYouGetSection = () => {
  return (
    <section className="py-20 sm:py-24 bg-background">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
          O que você vai receber
        </h2>
        <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
          Acesso imediato e vitalício a um pacote completo de materiais digitais.
        </p>
        <div className="mt-12 max-w-2xl mx-auto text-left">
          <ul className="space-y-4">
            {items.map((item) => (
              <li key={item} className="flex items-center bg-card p-4 rounded-md">
                <Check className="h-6 w-6 text-green-500 mr-4 flex-shrink-0" />
                <span className="text-lg text-gray-200">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};