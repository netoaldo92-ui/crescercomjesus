export const ProductSection = () => {
  return (
    <section className="py-20 sm:py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              A Solução Para Ensinar a Fé de Forma Divertida
            </h2>
            <p className="mt-6 text-lg text-gray-300">
              O "Histórias de Luz" é um kit digital completo com tudo que você precisa para criar momentos de aprendizado e conexão com seu filho.
            </p>
            <p className="mt-4 text-lg text-gray-300">
              São dezenas de histórias bíblicas ilustradas, atividades lúdicas e desenhos para colorir que ensinam valores cristãos de um jeito que as crianças amam.
            </p>
          </div>
          <div>
            {/* Placeholder for product mockup image */}
            <div className="bg-gray-700 h-80 rounded-lg flex items-center justify-center">
              <p className="text-gray-400">Imagem do produto (mockup em tablet/celular)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};