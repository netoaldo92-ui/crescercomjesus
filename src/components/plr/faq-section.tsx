import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Eu realmente posso vender como se fosse meu produto?",
    answer: "Sim! Você recebe todos os direitos para usar, modificar e vender como se fosse a criadora original. Pode colocar seu nome, sua marca e vender com 100% do lucro para você."
  },
  {
    question: "Preciso ter experiência com produtos digitais?",
    answer: "Não! O kit vem com tudo pronto: materiais, página de vendas, textos e até mesmo um guia passo a passo. Mesmo quem nunca vendeu online consegue começar."
  },
  {
    question: "Como vou receber o material?",
    answer: "Após a confirmação do pagamento, você recebe imediatamente um email com acesso à área de membros onde pode baixar todos os arquivos."
  },
  {
    question: "Posso personalizar o material?",
    answer: "Sim! Você pode editar tudo no Canva (gratuito), mudar cores, textos, adicionar sua marca e adaptar como quiser. Os arquivos vêm em formatos editáveis."
  },
  {
    question: "Quanto posso ganhar vendendo este produto?",
    answer: "Isso depende do seu esforço e estratégia. Muitas pessoas vendem por R$27 a R$97. Se vender apenas 10 unidades por mês a R$47, já são R$470 de lucro líquido."
  },
  {
    question: "O pagamento é seguro?",
    answer: "Sim! O pagamento é processado pela Kiwify, uma das maiores plataformas de produtos digitais do Brasil, com total segurança e criptografia."
  },
  {
    question: "Tenho garantia?",
    answer: "Sim! Você tem 7 dias para testar todo o material. Se não ficar satisfeita, devolvemos 100% do valor pago, sem perguntas."
  },
  {
    question: "Vou receber atualizações do produto?",
    answer: "Sim! Sempre que houver melhorias ou novos materiais, você receberá gratuitamente na sua área de membros."
  }
];

export const FaqSection = () => {
  return (
    <section className="py-20 sm:py-24 bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-blue-700 mb-6">
            Perguntas Frequentes
          </h2>
          <p className="text-xl text-gray-600">
            Tire suas dúvidas antes de garantir seu kit
          </p>
        </div>
        
        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`} 
              className="bg-blue-50 border border-blue-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all"
            >
              <AccordionTrigger className="p-6 text-lg font-semibold text-blue-800 text-left hover:no-underline hover:bg-blue-100 transition-colors">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6 text-base text-gray-700 bg-white">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* CTA após FAQ */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-8 rounded-xl shadow-xl">
            <h3 className="text-2xl font-bold mb-4">Ainda tem dúvidas?</h3>
            <p className="text-lg mb-6">
              Lembre-se: você tem 7 dias de garantia total. Pode testar tudo sem risco!
            </p>
            <a 
              href="https://pay.kiwify.com.br/8GQXukA" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-4 px-8 rounded-lg text-lg transform hover:scale-105 transition-all"
            >
              QUERO TESTAR SEM RISCO
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};