import { Check, Award, Shield, Star } from "lucide-react";

const benefits = [
  {
    icon: Check,
    title: "Venda como se fosse criadora do produto",
    description: "Coloque seu nome, sua marca e sua identidade visual"
  },
  {
    icon: Star,
    title: "100% do lucro é seu",
    description: "Cada venda que você fizer, todo o dinheiro fica com você"
  },
  {
    icon: Shield,
    title: "Sem taxas ou royalties",
    description: "Não há mensalidades, comissões ou taxas ocultas"
  },
  {
    icon: Award,
    title: "Personalize como quiser",
    description: "Edite, adapte e melhore o conteúdo do seu jeito"
  }
];

export const LicenseSection = () => {
  return (
    <section className="py-20 sm:py-24 bg-blue-50 relative overflow-hidden">
      {/* Elementos decorativos */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full font-semibold mb-4">
              <Award className="h-4 w-4 mr-2" />
              DIREITOS COMPLETOS INCLUSOS
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-blue-800 mb-6">
              Você recebe todos os direitos para usar e revender
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Não é apenas um produto que você compra. É um negócio completo que você pode chamar de seu e lucrar 100%.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all border border-gray-100"
              >
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-lg mr-4 flex-shrink-0">
                    <benefit.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-blue-800 mb-2">{benefit.title}</h3>
                    <p className="text-gray-700">{benefit.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Certificado visual */}
          <div className="bg-gradient-to-r from-yellow-100 via-yellow-50 to-yellow-100 p-8 md:p-12 rounded-2xl border-2 border-yellow-300 shadow-xl">
            <div className="text-center">
              <Award className="h-16 w-16 text-yellow-600 mx-auto mb-6" />
              
              <h3 className="text-2xl font-bold text-blue-800 mb-4">
                Certificado Oficial de Direitos de Revenda
              </h3>
              
              <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
                Este documento garante que você pode usar, modificar e vender este produto como se fosse o criador original, sem nenhuma restrição.
              </p>
              
              <div className="bg-blue-600 text-white text-center py-4 px-8 rounded-lg shadow-lg font-bold transform -rotate-1 inline-block">
                ✅ CERTIFICADO OFICIAL INCLUÍDO
              </div>
              
              <p className="text-sm text-gray-600 mt-6">
                Documento legal que comprova seus direitos de revenda
              </p>
            </div>
          </div>

          {/* CTA da seção */}
          <div className="text-center mt-12">
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 max-w-2xl mx-auto">
              <h4 className="text-xl font-bold text-blue-700 mb-3">
                Comece seu negócio digital hoje mesmo!
              </h4>
              <p className="text-gray-700 mb-6">
                Com todos os direitos garantidos, você pode começar a vender imediatamente.
              </p>
              <a 
                href="https://pay.kiwify.com.br/8GQXukA" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg text-lg transform hover:scale-105 transition-all"
              >
                GARANTIR MEUS DIREITOS AGORA
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};