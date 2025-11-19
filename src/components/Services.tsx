import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, Sparkles, Zap, Target, Trophy } from "lucide-react";

const services = [
  {
    icon: Sparkles,
    title: "Consulta Individual Premium",
    description: "Atendimento personalizado com avaliação completa e plano nutricional exclusivo.",
    benefits: [
      "Anamnese detalhada",
      "Avaliação corporal",
      "Plano alimentar personalizado",
      "Material educativo",
    ],
  },
  {
    icon: Zap,
    title: "Plano Mensal Completo",
    description: "Acompanhamento intensivo com ajustes semanais e suporte contínuo.",
    benefits: [
      "4 consultas mensais",
      "Ajustes de cardápio",
      "Suporte via WhatsApp",
      "Receitas e dicas exclusivas",
    ],
  },
  {
    icon: Target,
    title: "Acompanhamento Trimestral",
    description: "Programa de 3 meses para transformação sustentável e resultados duradouros.",
    benefits: [
      "12 consultas trimestrais",
      "Monitoramento completo",
      "Educação nutricional",
      "Acompanhamento de exames",
    ],
  },
  {
    icon: Trophy,
    title: "Plano Performance",
    description: "Nutrição esportiva especializada para corrida e musculação.",
    benefits: [
      "Estratégia pré/pós treino",
      "Suplementação adequada",
      "Periodização nutricional",
      "Acompanhamento de treinos",
    ],
  },
];

const Services = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Como posso te ajudar
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Escolha o plano que melhor se adapta aos seus objetivos e estilo de vida
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card 
                  key={index}
                  className="p-8 bg-card hover:shadow-elegant transition-all duration-300 hover:scale-[1.02] border-eucalyptus/20 rounded-3xl"
                >
                  <div className="space-y-6">
                    {/* Icon */}
                    <div className="w-14 h-14 rounded-2xl bg-eucalyptus/20 flex items-center justify-center">
                      <Icon className="w-7 h-7 text-eucalyptus-dark" />
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-foreground">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>

                    {/* Benefits */}
                    <ul className="space-y-3">
                      {service.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-eucalyptus flex-shrink-0 mt-0.5" />
                          <span className="text-foreground">{benefit}</span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA */}
                    <Button 
                      className="w-full bg-eucalyptus hover:bg-eucalyptus-dark text-foreground font-semibold rounded-full transition-all hover:scale-105"
                    >
                      Quero este plano
                    </Button>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
