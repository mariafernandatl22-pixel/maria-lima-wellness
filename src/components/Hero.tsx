import { Button } from "@/components/ui/button";
import { Sparkles, Heart, TrendingUp } from "lucide-react";
import heroImage from "@/assets/hero-wellness.jpg";
const Hero = () => {
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Floating shapes for visual interest */}
      <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-eucalyptus/20 blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-pistachio/30 blur-3xl animate-float" style={{
      animationDelay: '1s'
    }}></div>
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          {/* Trust Bar */}
          <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground mb-8">
            <div className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-eucalyptus" />
              <span>Resultados reais</span>
            </div>
            <div className="flex items-center gap-2">
              <Heart className="w-4 h-4 text-eucalyptus" />
              <span>Atendimento humanizado</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-eucalyptus" />
              <span>Baseado em evidências</span>
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight">
            Nutrição leve,<br />prática e possível.
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Por Maria Fernanda Lima — Nutricionista clínica e esportiva. <span className="font-semibold text-foreground">Nutricionista Maria Fernanda
 Lima</span> — 
            result-driven nutrition for real people.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button size="lg" className="bg-eucalyptus hover:bg-eucalyptus-dark text-foreground font-semibold px-8 py-6 rounded-full shadow-elegant transition-all hover:scale-105">
              Agendar Consulta
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-eucalyptus text-foreground font-semibold px-8 py-6 rounded-full hover:bg-eucalyptus/10 transition-all hover:scale-105">
              Conhecer Meus Serviços
            </Button>
          </div>

          {/* Hero Image */}
          <div className="pt-12">
            <div className="relative max-w-3xl mx-auto rounded-3xl overflow-hidden shadow-elegant">
              <img src={heroImage} alt="Wellness lifestyle - fresh healthy salad and nutrition" className="w-full h-[400px] object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;