import { Button } from "@/components/ui/button";
import { Tag } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="w-full bg-blue-50 py-20 md:py-32">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-4 inline-flex items-center rounded-full bg-brand-yellow/30 px-4 py-1 text-sm font-semibold text-yellow-800">
          <Tag className="mr-2 h-4 w-4" />
          Promoção válida por tempo limitado
        </div>
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
          Transforme os momentos com seus filhos em experiências de fé, alegria e valores
        </h1>
        <p className="mt-6 max-w-3xl mx-auto text-lg leading-8 text-gray-600 sm:text-xl">
          Tenha acesso imediato a histórias cristãs ilustradas + atividades divertidas que fazem seu filho amar aprender a Palavra.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Button size="lg" className="bg-brand-yellow text-black hover:bg-brand-yellow/90 shadow-lg text-lg px-8 py-6 rounded-full">
            Quero garantir agora
          </Button>
          <Button size="lg" variant="outline" className="bg-transparent text-lg px-8 py-6 rounded-full">
            Entrar na Comunidade no WhatsApp
          </Button>
        </div>
        <div className="mt-16">
            {/* Placeholder for an image/illustration */}
            <div className="relative mx-auto w-full max-w-4xl h-64 md:h-96 rounded-2xl bg-gray-200 flex items-center justify-center">
                <p className="text-gray-500">Ilustração de família lendo a Bíblia</p>
            </div>
        </div>
      </div>
    </section>
  );
};