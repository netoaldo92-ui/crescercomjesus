import { Button } from "@/components/ui/button";
import { Check, Lock } from "lucide-react";

export const FinalCtaSection = () => {
  return (
    <section className="py-20 sm:py-24 bg-gradient-to-b from-blue-500 to-blue-600 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-5xl font-extrabold mb-8">
            Garanta agora seu PLR Cristão e comece a lucrar hoje!
          </h2>
          
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Invista em um negócio digital com propósito e potencial ilimitado
          </p>
          
          <div className="flex justify-center space-x-6 mb-12">
            <div className="flex items-center">
              <Check className="h-5 w-5 mr-2 text-green-300" />
              <span>Acesso imediato</span>
            </div>
            <div className="flex items-center">
              <Check className="h-5 w-5 mr-2 text-green-300" />
              <span>100% digital</span>
            </div>
            <div className="flex items-center">
              <Check className="h-5 w-5 mr-2 text-green-300" />
              <span>100% de lucro</span>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 shadow-xl border border-white/20">
            <div className="flex flex-col sm:flex-row justify-between items-center mb-8">
              <div className="text-left mb-6 sm:mb-0">
                <p className="text-xl opacity-80">Investimento único:</p>
                <div className="flex items-center">
                  <p className="text-lg line-through opacity-70 mr-3">R$ 497</p>
                  <p className="text-4xl sm:text-5xl font-bold">R$ 197</p>
                </div>
                <p className="text-sm opacity-80 mt-2">ou 12x de R$ 19,70</p>
              </div>
              
              <div className="text-right">
                <p className="text-lg font-semibold mb-1">Garantia de 7 dias</p>
                <p className="text-sm opacity-80">Satisfação total ou seu dinheiro de volta</p>
              </div>
            </div>
            
            <Button size="lg" className="w-full bg-yellow-500 hover:bg-yellow-600 text-xl font-bold py-8 text-gray-900">
              QUERO MEU PLR AGORA
            </Button>
            
            <div className="flex justify-center mt-4 text-sm opacity-80">
              <Lock className="h-4 w-4 mr-2" />
              <span>Pagamento 100% seguro</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};