import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ShoppingCart } from "lucide-react";
import ebookRefeicoes from "@/assets/ebook-refeicoes-livres.png";
import ebookArsenal from "@/assets/ebook-arsenal-receitas.png";
import ebookDoces from "@/assets/ebook-doces-inteligente.png";
import ebookCompras from "@/assets/ebook-compras-mercado.png";
import ebookMedidas from "@/assets/ebook-medidas-pratico.png";
import ebookOrganizar from "@/assets/ebook-organizar-alimentacao.png";

const ebooks = [
  {
    title: "Manual de refeições livres com consciência",
    description: "Como aproveitar refeições sociais sem culpa e com equilíbrio",
    image: ebookRefeicoes,
  },
  {
    title: "Arsenal de receitas diversas",
    description: "Variedade de receitas práticas e saborosas para o seu dia a dia",
    image: ebookArsenal,
  },
  {
    title: "Doces para incluir na dieta de forma inteligente",
    description: "Receitas de doces com média de 100kcal para matar a vontade sem culpa",
    image: ebookDoces,
  },
  {
    title: "Manual de compras no mercado",
    description: "Guia prático para fazer escolhas inteligentes no supermercado",
    image: ebookCompras,
  },
  {
    title: "Guia prático para tirar suas próprias medidas",
    description: "Aprenda a fazer suas medidas corporais corretamente em casa",
    image: ebookMedidas,
  },
  {
    title: "Guia prático para organizar a sua alimentação",
    description: "Passo a passo para planejar suas refeições da semana",
    image: ebookOrganizar,
  },
];

const Ebooks = () => {
  return (
    <section className="py-24 bg-pistachio-light">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Meus Ebooks
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Materiais práticos para te ajudar na jornada
            </p>
          </div>

          {/* Ebooks Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ebooks.map((ebook, index) => (
              <Card 
                key={index}
                className="group overflow-hidden bg-card hover:shadow-elegant transition-all duration-300 hover:scale-[1.02] border-eucalyptus/20 rounded-3xl"
              >
                {/* Ebook Cover Mockup */}
                <div className="h-80 bg-gradient-primary flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-card/50"></div>
                  <img 
                    src={ebook.image}
                    alt={ebook.title}
                    className="w-48 h-64 object-cover rounded-lg shadow-lg relative z-10 group-hover:scale-105 transition-transform duration-300"
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
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Compre aqui
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
