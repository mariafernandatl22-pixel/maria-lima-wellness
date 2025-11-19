import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Download } from "lucide-react";
import ebookMedidas from "@/assets/ebook-medidas.jpg";
import ebookOrganizacao from "@/assets/ebook-organizacao.jpg";
import ebookDoces from "@/assets/ebook-doces.jpg";
import ebookRefeicoes from "@/assets/ebook-refeicoes.jpg";

const ebooks = [
  {
    title: "Guia Prático para Tirar suas Medidas",
    description: "Aprenda a fazer suas medidas corporais corretamente em casa",
    image: ebookMedidas,
  },
  {
    title: "Guia Prático para Organizar sua Alimentação",
    description: "Passo a passo para planejar suas refeições da semana",
    image: ebookOrganizacao,
  },
  {
    title: "Doces de até 100kcal",
    description: "Receitas deliciosas e saudáveis para matar a vontade de doce",
    image: ebookDoces,
  },
  {
    title: "Manual de Refeições Livres com Consciência",
    description: "Como aproveitar refeições sociais sem culpa e com equilíbrio",
    image: ebookRefeicoes,
  },
];

const Ebooks = () => {
  return (
    <section className="py-24 bg-pistachio-light">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Meus Ebooks
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Materiais práticos e gratuitos para te ajudar na jornada
            </p>
          </div>

          {/* Ebooks Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ebooks.map((ebook, index) => (
              <Card 
                key={index}
                className="group overflow-hidden bg-card hover:shadow-elegant transition-all duration-300 hover:scale-[1.05] border-eucalyptus/20 rounded-3xl"
              >
                {/* Ebook Cover Mockup */}
                <div className="h-64 bg-gradient-primary flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-card/50"></div>
                  <img 
                    src={ebook.image}
                    alt={ebook.title}
                    className="w-40 h-56 object-cover rounded-lg shadow-lg relative z-10 group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <h3 className="text-lg font-bold text-foreground line-clamp-2 min-h-[3.5rem]">
                    {ebook.title}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {ebook.description}
                  </p>

                  <Button 
                    size="sm"
                    className="w-full bg-eucalyptus hover:bg-eucalyptus-dark text-foreground font-semibold rounded-full transition-all"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Baixar agora
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ebooks;
