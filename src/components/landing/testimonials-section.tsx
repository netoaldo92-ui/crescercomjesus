import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "Meu filho nunca tinha pedido para ler a Bíblia… agora ele me chama TODA NOITE para a história do dia!",
    author: "Ana",
    role: "mãe da Sofia (5)",
  },
  {
    quote: "Finalmente achei um material cristão que prende atenção e ensina valores. Virou rotina aqui em casa!",
    author: "Marcos",
    role: "pai do Davi (7)",
  },
  {
    quote: "As atividades são muito fofas! Minha filha aprendeu sobre gratidão enquanto coloria!",
    author: "Juliana",
    role: "mãe da Clara (4)",
  },
];

export const TestimonialsSection = () => {
  return (
    <section className="py-20 sm:py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Veja o que as famílias estão dizendo
          </h2>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.author} className="p-6 bg-background border-brand-yellow/20">
              <CardContent className="p-0">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-brand-yellow fill-current" />
                  ))}
                </div>
                <blockquote className="text-gray-300 italic">“{testimonial.quote}”</blockquote>
                <footer className="mt-4">
                  <p className="font-semibold text-white">{testimonial.author}</p>
                  <p className="text-gray-400">{testimonial.role}</p>
                </footer>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};