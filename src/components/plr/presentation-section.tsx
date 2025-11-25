"use client";

import { Check, Heart, DollarSign, Clock } from "lucide-react";
import { SectionScrollIndicator } from "@/components/plr/section-scroll-indicator";

const problems = [
  {
    icon: DollarSign,
    text: "Está cansada de tentar equilibrar as contas e ver o dinheiro acabar antes do mês?",
    highlight: "Dificuldades financeiras"
  },
  {
    icon: Clock,
    text: "Sonha em ter um produto digital seu, mas não sabe por onde começar?",
    highlight: "Falta de direção"
  },
  {
    icon: Heart,
    text: "Gostaria de empreender sem abrir mão da fé, da rotina e dos valores cristãos?",
    highlight: "Negócio com propósito"
  },
  {
    icon: Check,
    text: "Já tentou vender algo que não representava você — e não deu resultado?",
    highlight: "Produtos sem identificação"
  },
  {
    icon: Heart,
    text: "Gostaria de um negócio que combina propósito, fé e renda extra?",
    highlight: "Empreendedorismo cristão"
  }
];

export const PresentationSection = () => {
  return (
    <section id="presentation" className="py-20 sm:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-600 mb-6">
            Se você é uma mulher cristã empreendedora...
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            E se identifica com pelo menos uma dessas situações, este kit foi feito especialmente para você:
          </p>
        </div>
        
        <div className="mt-8 max-w-4xl mx-auto space-y-6">
          {problems.map((problem, index) => (
            <div 
              key={index} 
              className="flex items-start p-6 bg-blue-50 rounded-xl shadow-sm hover:shadow-md transition-all border border-blue-100 group"
            >
              <div className="rounded-full bg-blue-500 p-3 mr-4 flex-shrink-0 group-hover:bg-blue-600 transition-colors">
                <problem.icon className="h-6 w-6 text-white" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-semibold text-blue-600 mb-1">{problem.highlight}</p>
                <p className="text-lg text-gray-700">{problem.text}</p>
              </div>
            </div>
          ))}
          
          <div className="mt-12 text-center bg-gradient-to-r from-blue-50 to-blue-100 p-8 rounded-xl border border-blue-200">
            <p className="text-2xl font-bold text-blue-700 mb-4">
              Se você respondeu "sim" a pelo menos uma pergunta...
            </p>
            <p className="text-xl text-gray-700 mb-6">
              Você está no lugar certo! Este kit vai transformar sua realidade financeira.
            </p>
            <div className="inline-flex items-center bg-yellow-100 text-yellow-800 px-6 py-3 rounded-full font-semibold">
              ✨ Sua solução está aqui!
            </div>
          </div>
        </div>

        {/* CTA intermediário */}
        <div className="mt-16 text-center">
          <div className="bg-blue-600 text-white p-6 rounded-xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Não espere mais para começar!</h3>
            <p className="mb-6">Milhares de mulheres cristãs já estão faturando com produtos digitais.</p>
            <a 
              href="https://pay.kiwify.com.br/8GQXukA" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-4 px-8 rounded-lg text-lg transform hover:scale-105 transition-all"
            >
              QUERO MEU KIT AGORA
            </a>
          </div>
        </div>

        {/* Indicador para próxima seção */}
        <SectionScrollIndicator 
          nextSectionId="benefits"
          message="👇 Veja todos os benefícios que você vai receber"
          variant="highlight"
        />
      </div>
    </section>
  );
};