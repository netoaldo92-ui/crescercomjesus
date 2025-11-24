import { ShieldCheck } from "lucide-react";

export const GuaranteeSection = () => {
  return (
    <section className="bg-blue-50 py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-center md:text-left">
          <ShieldCheck className="h-20 w-20 text-brand-gold" />
          <div>
            <h3 className="text-2xl font-bold text-gray-900">Garantia Incondicional de 7 Dias</h3>
            <p className="mt-2 text-lg text-gray-600">
              Se você não amar o material ou não ver valor para sua família, basta nos enviar um e-mail e devolvemos 100% do valor pago. Sem perguntas, sem burocracia.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};