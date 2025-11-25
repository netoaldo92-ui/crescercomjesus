"use client";

import { CheckCircle2, Gift, DollarSign, Zap, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

export const BenefitsSection = () => {
  return (
    <section className="py-20 sm:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-semibold mb-4">
            <Zap className="h-4 w-4 mr-2" />
            OPORTUNIDADE EXCLUSIVA
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-blue-700 mb-4">
            COMECE A FATURAR ATÉ R$5.000 POR MÊS COM SEU PRÓPRIO NEGÓCIO DIGITAL CRISTÃO
          </h2>
          <p className="text-xl text-gray-700">
            Descubra como empreendedores cristãos estão gerando renda extra com um produto digital completo e pronto para vender — sem precisar criar nada do zero!
          </p>
        </div>

        <div className="h-1 w-32 bg-blue-500 mx-auto mb-16"></div>

        {/* Seção de Potencial de Faturamento */}
        <div className="bg-blue-50 p-6 md:p-8 rounded-xl border-2 border-blue-200 my-10 max-w-4xl mx-auto shadow-md">
          <h3 className="text-2xl font-bold text-blue-700 mb-4 flex items-center">
            <DollarSign className="h-6 w-6 mr-2 text-blue-500" />
            POTENCIAL DE FATURAMENTO IMEDIATO
          </h3>
          <p className="text-xl font-semibold text-blue-800 mb-2">
            Comece hoje mesmo a faturar de <span className="bg-yellow-200 px-2 py-1 rounded-md">R$2.000 a R$5.000 por mês</span> com seu próprio produto digital cristão!
          </p>
          <p className="text-gray-700">
            Sem precisar criar conteúdo, sem estoque, sem complicações — apenas personalize e comece a vender!
          </p>
        </div>

        {/* O que Está Incluído */}
        <div className="max-w-4xl mx-auto mt-16">
          <h3 className="text-2xl font-bold text-blue-700 text-center mb-8">
            📦 PACOTE COMPLETO KIT CRISTÃO
          </h3>
          <p className="text-center text-xl font-medium mb-8">
            Você recebe <span className="font-bold text-blue-600">TUDO ISSO</span> em um único pacote:
          </p>

          <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden mb-12">
            <div className="p-6 md:p-8">
              <h4 className="text-xl font-bold text-blue-700 flex items-center mb-4">
                <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">
                  1
                </span>
                Sistema Completo "Pronto Para Vender"
              </h4>
              
              <div className="space-y-3 ml-11">
                <div className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-800">Materiais profissionais e textos de vendas já testados e aprovados</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-800">Página de vendas de alta conversão totalmente configurada</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-800">Sistema de checkout automático pronto para receber pagamentos</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-800">Artes exclusivas para área de membros que impressionam clientes</p>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-200 p-6 md:p-8 bg-blue-50">
              <h4 className="text-xl font-bold text-blue-700 flex items-center mb-4">
                <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">
                  2
                </span>
                Direitos Completos de Revenda
              </h4>
              
              <div className="space-y-3 ml-11">
                <div className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-800">Direitos completos para usar, modificar e vender como seu</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-800">100% do lucro fica com VOCÊ em cada venda realizada</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-800">Sem royalties, sem mensalidades, sem taxas ocultas</p>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <p className="font-semibold text-blue-700">
                    BÔNUS ESPECIAL: Devocional exclusivo incluso!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bônus Exclusivos */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute -top-10 right-0 bg-red-500 text-white px-4 py-2 rounded-full text-sm font-bold animate-pulse">
              TEMPO LIMITADO
            </div>
            <h3 className="text-2xl font-bold text-blue-700 text-center mb-8">
              <Gift className="inline-block h-6 w-6 mr-2 text-yellow-500" />
              SUPER BÔNUS EXCLUSIVOS
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-gradient-to-r from-blue-100 to-blue-50 p-6 rounded-lg border border-blue-200 shadow-sm">
              <h4 className="text-xl font-bold text-blue-700 flex items-center">
                <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-2">1</span>
                Curso Turbinar Instagram
              </h4>
              <p className="mt-3 text-gray-700">
                Atraia seguidores qualificados e converta-os em clientes com estratégias exclusivas para criadores de conteúdo cristão.
              </p>
              <p className="mt-3 font-semibold text-gray-900">
                Valor: <span className="line-through">R$97</span>{" "}
                <span className="text-green-600 font-bold">GRÁTIS</span>
              </p>
            </div>
            
            <div className="bg-gradient-to-r from-blue-100 to-blue-50 p-6 rounded-lg border border-blue-200 shadow-sm">
              <h4 className="text-xl font-bold text-blue-700 flex items-center">
                <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-2">2</span>
                Curso Tráfego Avançado
              </h4>
              <p className="mt-3 text-gray-700">
                Técnicas práticas para atrair visitantes altamente interessados no seu produto, mesmo sem experiência.
              </p>
              <p className="mt-3 font-semibold text-gray-900">
                Valor: <span className="line-through">R$147</span>{" "}
                <span className="text-green-600 font-bold">GRÁTIS</span>
              </p>
            </div>
            
            <div className="bg-gradient-to-r from-blue-100 to-blue-50 p-6 rounded-lg border border-blue-200 shadow-sm">
              <h4 className="text-xl font-bold text-blue-700 flex items-center">
                <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-2">3</span>
                30 Modelos Prontos para Instagram
              </h4>
              <p className="mt-3 text-gray-700">
                Templates exclusivos para Stories e Feed que captam atenção e geram interesse instantâneo no seu produto.
              </p>
              <p className="mt-3 font-semibold text-gray-900">
                Valor: <span className="line-through">R$67</span>{" "}
                <span className="text-green-600 font-bold">GRÁTIS</span>
              </p>
            </div>
            
            <div className="bg-gradient-to-r from-blue-100 to-blue-50 p-6 rounded-lg border border-blue-200 shadow-sm">
              <h4 className="text-xl font-bold text-blue-700 flex items-center">
                <span className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-2">4</span>
                Curso Vendas em Dólar
              </h4>
              <p className="mt-3 text-gray-700">
                Expanda seu negócio internacionalmente e multiplique seus ganhos vendendo para o mercado global.
              </p>
              <p className="mt-3 font-semibold text-gray-900">
                Valor: <span className="line-through">R$197</span>{" "}
                <span className="text-green-600 font-bold">GRÁTIS</span>
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-yellow-100 to-yellow-50 p-6 rounded-lg border-2 border-yellow-200 shadow-md my-10 relative">
            <div className="absolute -top-4 -right-4 bg-yellow-500 text-white px-3 py-1 rounded-md text-sm font-bold transform rotate-6">
              EXCLUSIVO
            </div>
            <h4 className="text-xl font-bold text-blue-800 flex items-center justify-center mb-3">
              <span className="bg-yellow-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-2">5</span>
              BÔNUS ESPECIAL: IA Criativa Histórias de Luz
            </h4>
            <p className="text-gray-800 text-center">
              Ferramenta exclusiva que gera novas ideias de conteúdo cristão infantil automaticamente. Nunca fique sem inspiração!
            </p>
            <p className="mt-4 font-semibold text-center text-gray-900">
              Valor: <span className="line-through">R$247</span>{" "}
              <span className="text-green-600 font-bold text-xl">GRÁTIS</span>
            </p>
          </div>
        </div>

        {/* CTA Final */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-blue-600 text-white p-8 rounded-xl text-center my-8 transform hover:scale-[1.01] transition-all shadow-xl">
            <div className="flex justify-center items-center mb-3">
              <Clock className="h-6 w-6 mr-2 animate-pulse" />
              <p className="uppercase font-bold">Oferta por tempo limitado</p>
            </div>
            <div className="my-4">
              <p className="text-xl">Investimento único:</p>
              <p className="text-6xl font-bold my-3">R$ 29,90</p>
              <p>ou 3x de R$ 9,97 sem juros</p>
            </div>
            
            <a 
              href="https://pay.kiwify.com.br/8GQXukA" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-6 px-8 rounded-lg text-xl uppercase mt-4 transform hover:scale-105 transition duration-200 shadow-lg"
            >
              QUERO COMEÇAR AGORA MESMO
            </a>
            
            <p className="mt-6 text-sm text-gray-200">
              Oferta válida por tempo limitado! Não perca esta oportunidade!
            </p>
          </div>

          <div className="text-center max-w-2xl mx-auto mb-10 mt-16">
            <h3 className="text-2xl font-bold text-blue-700">Imagine em 24 horas...</h3>
            <p className="text-lg text-gray-700 mt-3">
              Você com seu próprio produto digital cristão, pronto para vender, enquanto outros ainda estão tentando descobrir por onde começar.
            </p>
            <p className="font-semibold text-blue-800 mt-3">
              Esta é sua chance de iniciar um negócio com propósito, que impacta vidas e gera renda.
            </p>
          </div>

          <div className="text-center mt-12">
            <h3 className="text-2xl font-bold text-blue-700 mb-6">
              ⏰ NÃO ESPERE MAIS!
            </h3>
            <a 
              href="https://pay.kiwify.com.br/8GQXukA" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-5 px-10 rounded-lg text-xl uppercase shadow-lg"
            >
              GARANTIR MEU ACESSO AGORA
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};