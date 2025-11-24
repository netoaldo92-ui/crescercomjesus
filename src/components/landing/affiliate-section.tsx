import { Handshake } from "lucide-react";

export const AffiliateSection = () => {
  return (
    <section className="py-20 sm:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex justify-center mb-4">
            <Handshake className="h-16 w-16 text-brand-gold" />
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Seja um Parceiro da Fé e Gere Renda
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-700">
            Ao adquirir nosso material, você não apenas transforma sua família, mas também recebe o direito de se tornar um parceiro. Ajude a espalhar a Palavra de Deus para outras famílias e seja abençoado financeiramente por isso, recebendo comissões por cada venda indicada.
          </p>
          <p className="mt-4 font-semibold text-brand-blue">
            É a sua chance de transformar vidas e prosperar com um propósito divino.
          </p>
        </div>
      </div>
    </section>
  );
};