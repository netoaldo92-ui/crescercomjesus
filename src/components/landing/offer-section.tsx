import { Button } from "@/components/ui/button";

export const OfferSection = () => {
  return (
    <section className="bg-background py-20 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center bg-card p-8 sm:p-12 rounded-lg border-2 border-brand-yellow">
          <h2 className="text-2xl font-bold tracking-tight text-brand-yellow">
            OFERTA ESPECIAL POR TEMPO LIMITADO
          </h2>
          <p className="mt-4 text-lg text-gray-300">
            Acesso vitalício a todo o material por um preço único.
          </p>
          <div className="my-8">
            <p className="text-xl text-gray-400">De <span className="line-through">R$ 97,00</span> por apenas:</p>
            <p className="text-6xl sm:text-7xl font-extrabold text-white mt-2">
              R$ 27
            </p>
            <p className="font-semibold text-gray-300 mt-2">Pagamento único, acesso vitalício</p>
          </div>
          <Button size="lg" className="bg-brand-yellow text-gray-900 font-bold hover:bg-brand-yellow/90 shadow-lg text-xl px-10 py-8 rounded-md w-full">
            QUERO GARANTIR MEU ACESSO COM DESCONTO
          </Button>
        </div>
      </div>
    </section>
  );
};