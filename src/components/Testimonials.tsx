import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Ana Paula S.",
    text: "A Maria me ajudou a emagrecer 12kg sem passar fome. O atendimento é incrível, ela realmente se importa com a gente!",
    rating: 5,
  },
  {
    name: "Carlos M.",
    text: "Melhorei muito minha performance na corrida. O plano é personalizado e ela sempre ajusta conforme minha evolução.",
    rating: 5,
  },
  {
    name: "Juliana R.",
    text: "Finalmente entendi como me alimentar de forma saudável sem neuras. As orientações são claras e práticas.",
    rating: 5,
  },
  {
    name: "Roberto F.",
    text: "Profissional extremamente atenciosa. Consegui ganhar massa muscular e ainda perder gordura. Recomendo muito!",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Resultados reais
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Veja o que meus clientes dizem sobre a experiência
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index}
                className="p-8 bg-card hover:shadow-elegant transition-all duration-300 border-eucalyptus/20 rounded-3xl"
              >
                <div className="space-y-4">
                  {/* Stars */}
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-eucalyptus text-eucalyptus" />
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-foreground leading-relaxed italic">
                    "{testimonial.text}"
                  </p>

                  {/* Name */}
                  <p className="font-semibold text-foreground">
                    — {testimonial.name}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
