export const ProductDescriptionSection = () => {
  return (
    <section className="py-20 sm:py-24 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-blue-700 mb-6">
                Um kit de atividades bíblicas que transforma aprendizagem em propósito
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  O <span className="font-semibold text-blue-600">PLR Luz Infantil</span> é um material completo com centenas de atividades cristãs prontas para você editar, personalizar e vender como se fosse seu próprio produto.
                </p>
                <p>
                  Cada atividade foi cuidadosamente desenvolvida para ensinar passagens bíblicas importantes de forma lúdica e divertida, estimulando valores cristãos fundamentais como amor, obediência, bondade e gratidão.
                </p>
                <p>
                  O material é 100% digital e de entrega imediata, permitindo que você comece seu negócio cristão ainda hoje - sem precisar criar conteúdo do zero.
                </p>
                <p className="font-semibold text-blue-700">
                  E o melhor: você pode revender com 100% do lucro para você!
                </p>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg glow-effect">
              {/* Placeholder para imagem do produto */}
              <div className="aspect-square rounded-lg bg-blue-100 flex items-center justify-center mb-4">
                <p className="text-blue-500 text-center p-4">
                  Imagem do produto em dispositivo digital (tablet mostrando atividades)
                </p>
              </div>
              <div className="text-center">
                <p className="font-semibold text-gray-800">
                  Material digital pronto para personalizar e vender
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  Acesso imediato após a compra
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};