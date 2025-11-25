import portraitImage from "@/assets/portrait-nutritionist.jpg";
const About = () => {
  return <section className="py-24 bg-pistachio-light">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Portrait */}
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-full h-full bg-eucalyptus/30 rounded-3xl"></div>
              <img src={portraitImage} alt="Maria Fernanda T Lima - Nutricionista" className="relative rounded-3xl shadow-elegant w-full h-[500px] object-cover" />
            </div>

            {/* Content */}
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                Quem sou eu
              </h2>
              
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Olá, sou Maria Fernanda, Prazer! Adotar uma alimentação saudável pode ter uma série de impactos positivos para nossa saúde e, por isso, uma paixão sobre o assunto tomou conta de mim. Sou formada pelo Centro Universitário Presidente Tancredo de Almeida Neves (UNIPTAN) e posso falar sobre o assunto e atender pessoas com propriedade e de forma individualizada.  Além do meu bacharelado, possuo duas pós graduações, sendo uma na parte clínica e esportiva e a outra a nutrição no transtorno do espectro autista. Contudo, percebo que minha missão neste mundo vai além! Por meio da nutrição, almejo auxiliar todas as pessoas a experimentarem plenitude, felicidade e saúde.          .          .
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
    </section>;
};
export default About;