import { Button } from "@/components/ui/button";

export const OfferSection = () => {
  return (
    <section className="bg-blue-50 py-20 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center bg-white p-8 sm:p-12 rounded-2xl shadow-2xl border-4 border-brand-yellow">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Garanta seu Acesso Vitalício Agora!
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Essa oferta especial pode encerrar a qualquer momento.
          </p>
          <div className="my-8">
            <p className="text-xl text-gray-500">De <span className="line-through">R$ 97</span> por apenas:</p>
            <p className="text-6xl sm:text-7xl font-extrabold text-brand-blue mt-2">
              R$ 27
            </p>
            <p className="font-semibold text-gray-700 mt-2">Acesso vitalício</p>
          </div>
          <Button size="lg" className="bg-brand-yellow text-black hover:bg-brand-yellow/90 shadow-lg text-xl px-10 py-8 rounded-full w-full">
            QUERO GARANTIR AGORA
          </Button>
        </div>
      </div>
    </section>
  );
};