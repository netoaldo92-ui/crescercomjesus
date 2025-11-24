export const ProductSection = () => {
  return (
    <section className="py-20 sm:py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">
              A Solução Para Ensinar a Fé de Forma Divertida
            </h2>
            <div className="space-y-4">
              <p className="text-lg text-gray-300">
                O <span className="text-brand-yellow font-semibold">Histórias de Luz</span> é um kit digital completo com tudo que você precisa para criar momentos de aprendizado e conexão com seu filho.
              </p>
              <p className="text-lg text-gray-300">
                São dezenas de histórias bíblicas ilustradas, atividades lúdicas e desenhos para colorir que ensinam valores cristãos de um jeito que as crianças amam.
              </p>
              <p className="text-lg text-gray-300">
                Material pensado para aproximar sua família de Deus através de momentos divertidos de aprendizado.
              </p>
            </div>
          </div>
          <div>
            {/* Placeholder for product mockup image */}
            <div className="bg-gray-700 h-80 rounded-lg flex items-center justify-center border border-gray-600 shadow-lg overflow-hidden">
              <p className="text-gray-400">Imagem do produto (mockup em tablet/celular)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};