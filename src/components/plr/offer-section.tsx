export const OfferSection = () => {
  return (
    <section className="bg-background py-20 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center bg-card p-8 sm:p-12 rounded-lg border-2 border-brand-yellow shadow-2xl">
          <h2 className="text-2xl font-bold text-brand-yellow mb-4">
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
          <a 
            href="https://pay.kiwify.com.br/8GQXukA" 
            target="_blank"
            rel="noopener noreferrer"
            className="cta-button text-xl px-10 py-8 w-full inline-block"
          >
            QUERO GARANTIR MEU ACESSO COM DESCONTO
          </a>
        </div>
      </div>
    </section>
  );
};