import portraitImage from "@/assets/portrait-nutritionist.jpg";

const About = () => {
  return (
    <section className="py-24 bg-pistachio-light">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Portrait */}
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-full h-full bg-eucalyptus/30 rounded-3xl"></div>
              <img 
                src={portraitImage}
                alt="Maria Fernanda T Lima - Nutricionista" 
                className="relative rounded-3xl shadow-elegant w-full h-[500px] object-cover"
              />
            </div>

            {/* Content */}
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                Quem sou eu
              </h2>
              
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Sou nutricionista com foco em <span className="font-semibold text-foreground">praticidade, 
                  orientação humanizada e resultados sustentáveis</span>.
                </p>
                
                <p>
                  Trabalho com emagrecimento, performance esportiva, saúde da mulher 
                  e alimentação real para o dia a dia. Acredito que nutrição deve ser 
                  <span className="font-semibold text-foreground"> leve, possível e feita para você</span>.
                </p>
                
                <p>
                  Meu objetivo é te ajudar a alcançar seus resultados sem radicalismo, 
                  com um plano personalizado que respeita sua rotina e seus gostos.
                </p>
              </div>

              {/* Decorative element */}
              <div className="flex gap-2 pt-4">
                <div className="h-1 w-16 bg-eucalyptus rounded-full"></div>
                <div className="h-1 w-8 bg-eucalyptus/50 rounded-full"></div>
                <div className="h-1 w-4 bg-eucalyptus/30 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
