import { Check, Award } from "lucide-react";

const licenseRights = [
  "Pode vender como se fosse o criador do produto",
  "Pode colocar seu nome e marca pessoal",
  "Pode revender com 100% de lucro para você",
  "Pode criar sua própria marca e identidade visual",
  "Pode editar, personalizar e adaptar o conteúdo"
];

export const LicenseSection = () => {
  return (
    <section className="py-20 sm:py-24 bg-blue-50 relative overflow-hidden">
      {/* Elementos decorativos */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-yellow-100 via-yellow-200 to-yellow-100 p-8 md:p-12 rounded-2xl border-2 border-yellow-300 shadow-xl">
            <div className="flex flex-col items-center text-center">
              <Award className="h-24 w-24 text-yellow-600 mb-6" />
              
              <h2 className="text-3xl sm:text-4xl font-bold text-blue-800 mb-6">
                Você recebe a licença completa de revenda PLR
              </h2>
              
              <p className="mb-8 text-gray-700 max-w-2xl">
                Nosso certificado PLR (Private Label Rights) garante a você todos os direitos necessários para comercializar este produto como seu, gerando 100% de lucro sem complicações.
              </p>
              
              <div className="w-full max-w-md space-y-4 mt-4">
                {licenseRights.map((right, index) => (
                  <div 
                    key={index}
                    className="flex items-center bg-white/80 p-3 rounded-lg shadow-sm"
                  >
                    <div className="mr-3 bg-green-500 rounded-full p-1 flex-shrink-0">
                      <Check className="h-4 w-4 text-white" />
                    </div>
                    <p className="font-medium text-gray-800">{right}</p>
                  </div>
                ))}
              </div>
              
              <div className="mt-10 w-full max-w-sm">
                <div className="bg-blue-600 text-white text-center py-3 px-6 rounded-lg shadow-lg font-bold transform rotate-[-2deg]">
                  CERTIFICADO OFICIAL DE LICENÇA PLR
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};