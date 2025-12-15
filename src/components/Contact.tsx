import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin, ExternalLink } from "lucide-react";

const Contact = () => {
  const whatsappLink = "https://whatsa.me/5532999139341/?t=Ol%C3%A1!%20%F0%9F%98%8A%20Que%20bom%20receber%20sua%20mensagem!%20%20Sou%20nutricionista%20e%20vou%20ficar%20muito%20feliz%20em%20te%20ajudar%20a%20conquistar%20seus%20objetivos%20com%20sa%C3%BAde,%20leveza%20e%20estrat%C3%A9gias%20realmente%20personalizadas.%20%20Para%20te%20orientar%20da%20melhor%20forma,%20me%20conta:%20%E2%80%A2%20Qual%20%C3%A9%20o%20seu%20objetivo%20no%20momento?%20%20Assim%20j%C3%A1%20te%20explico%20como%20funciona%20meu%20trabalho%20e%20qual%20o%20melhor%20caminho%20para%20voc%C3%AA.%20Estou%20%C3%A0%20disposi%C3%A7%C3%A3o!%20%F0%9F%92%9A";

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Entre em Contato
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Vamos conversar sobre seus objetivos e como posso te ajudar
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <Card className="p-8 bg-card border-eucalyptus/20 rounded-3xl shadow-soft">
              <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
                Informações de Contato
              </h3>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="flex flex-col items-center text-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-eucalyptus/20 flex items-center justify-center">
                    <Mail className="w-6 h-6 text-eucalyptus-dark" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">E-mail</p>
                    <p className="text-muted-foreground">nutrimariafernandalima@gmail.com</p>
                  </div>
                </div>

                <div className="flex flex-col items-center text-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-eucalyptus/20 flex items-center justify-center">
                    <Phone className="w-6 h-6 text-eucalyptus-dark" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">WhatsApp</p>
                    <p className="text-muted-foreground">(32) 99913-9341</p>
                    <a 
                      href={whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 mt-2 text-eucalyptus-dark hover:text-eucalyptus font-semibold transition-colors"
                    >
                      Fale comigo agora
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                <div className="flex flex-col items-center text-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-eucalyptus/20 flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-eucalyptus-dark" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Localização</p>
                    <p className="text-muted-foreground">Rua Padre Joaquim Carlos, 268, Centro, Resende Costa, MG CEP 36340-000</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Google Maps */}
            <Card className="h-64 bg-pistachio-light rounded-3xl overflow-hidden border-eucalyptus/20">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3745.8!2d-44.088!3d-20.878!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sRua%20Padre%20Joaquim%20Carlos%2C%20268%20-%20Centro%2C%20Resende%20Costa%20-%20MG%2C%2036340-000!5e0!3m2!1spt-BR!2sbr!4v1699999999999!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização do consultório"
                className="rounded-3xl"
              />
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
