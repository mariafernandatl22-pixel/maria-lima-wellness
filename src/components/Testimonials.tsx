import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "J.C.S.P",
    text: "O que me deixa mais satisfeita é que o processo foi tão prazeroso que virou hábito. Hoje eu não fico bitolada com dieta e muito menos balança, porque as escolhas são totalmente diferentes e a qualidade de vida também. 🥰",
    rating: 5,
  },
  {
    name: "R.T.M",
    text: "Minhas cólicas melhoraram demais, tinha dias que eu dormia apertando a barriga pra ver se melhorava! Desses dias com a alimentação organizada nem me lembro qd deu dor abdominal… fora a organização! E a calça que eu usei ontem ficou bem mais confortável! ❤️ Estou amando 🙏🏻",
    rating: 5,
  },
  {
    name: "F.E.A.F",
    text: "Os atendimentos são perfeitos, me dá total atenção em todos os aspectos na consulta, super flexível nas dietas, entende o que eu gosto e encaixa a dieta conforme e ainda é super educada!!!",
    rating: 5,
  },
  {
    name: "R.R.S.C",
    text: "Ao longo de um ano, tive uma experiência incrível, com orientação personalizada e estratégias que realmente funcionaram para o meu corpo. Em menos de um mês já eliminei 2 kg e, depois de ficar estagnado, consegui ganhar massa magra e manter resultados consistentes. Acompanhamento de qualidade e experiência única, vale a pena demais!",
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
