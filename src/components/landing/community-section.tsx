import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

export const CommunitySection = () => {
  return (
    <section className="py-20 sm:py-24 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Entre na Comunidade de Pais Cristãos no WhatsApp
        </h2>
        <p className="mt-4 max-w-3xl mx-auto text-lg leading-8 text-gray-600">
          Receba materiais exclusivos, dicas bíblicas para crianças, novas histórias, suporte e convivência com famílias que compartilham da mesma fé.
        </p>
        <div className="mt-10">
          <Button size="lg" className="bg-green-500 text-white hover:bg-green-600 shadow-lg text-lg px-8 py-6 rounded-full">
            <MessageCircle className="mr-2 h-5 w-5" />
            Entrar agora no WhatsApp
          </Button>
        </div>
      </div>
    </section>
  );
};