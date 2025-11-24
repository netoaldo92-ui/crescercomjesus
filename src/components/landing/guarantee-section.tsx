import { ShieldCheck } from "lucide-react";

export const GuaranteeSection = () => {
  return (
    <section className="bg-card py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-center md:text-left max-w-3xl mx-auto">
          <ShieldCheck className="h-24 w-24 text-brand-yellow flex-shrink-0" />
          <div>
            <h3 className="text-2xl font-bold text-white">Sua Satisfação ou Seu Dinheiro de Volta</h3>
            <p className="mt-2 text-lg text-gray-300">
              Você tem 7 dias para explorar todo o material. Se por qualquer motivo não ficar satisfeito, basta nos enviar um e-mail e devolvemos 100% do valor pago. Sem perguntas, sem burocracia. O risco é todo nosso.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};