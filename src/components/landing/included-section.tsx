import { CheckCircle2 } from "lucide-react";

const includedItems = [
  "Histórias bíblicas ilustradas",
  "Atividades cristãs",
  "Desenhos para colorir",
  "Materiais educativos sobre valores",
  "Bônus surpresa mensal",
  "Acesso à comunidade exclusiva de pais cristãos",
];

export const IncludedSection = () => {
  return (
    <section className="bg-blue-50 py-20 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Um Kit Digital Completo Para a Educação Cristã do Seu Filho
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Você recebe acesso imediato a um arsenal de ferramentas para nutrir a fé da sua criança de forma criativa e envolvente.
            </p>
            <ul className="mt-8 space-y-4">
              {includedItems.map((item) => (
                <li key={item} className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-brand-blue mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700 text-lg">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-10 lg:mt-0">
             {/* Placeholder for an image/illustration of the kit */}
            <div className="relative mx-auto w-full max-w-md h-80 rounded-2xl bg-gray-200 flex items-center justify-center">
                <p className="text-gray-500">Ilustração do kit digital</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};