import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Como vou receber o acesso?",
    answer: "O acesso é imediato após a confirmação do pagamento. Você receberá um e-mail com todas as instruções para acessar a área de membros e baixar os materiais.",
  },
  {
    question: "O material é físico ou digital?",
    answer: "Todo o material é 100% digital (arquivos em PDF), para você baixar e imprimir quantas vezes quiser. Não há envio de produto físico.",
  },
  {
    question: "Posso usar no celular ou tablet?",
    answer: "Sim! Os arquivos PDF podem ser abertos em qualquer dispositivo: celular, tablet, computador ou podem ser impressos.",
  },
  {
    question: "O pagamento é seguro?",
    answer: "Sim, o pagamento é processado pela maior plataforma de produtos digitais do Brasil, utilizando criptografia de ponta para garantir sua segurança.",
  },
  {
    question: "O acesso é vitalício?",
    answer: "Sim! Com um pagamento único, você terá acesso para sempre a todo o material e a futuras atualizações, sem mensalidades.",
  },
];

export const FaqSection = () => {
  return (
    <section className="py-20 sm:py-24 bg-background">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-12">
          Perguntas Frequentes
        </h2>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="bg-card border-b-0 mb-2 rounded-md">
              <AccordionTrigger className="p-6 text-lg font-semibold text-left hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="p-6 pt-0 text-base text-gray-300">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};