import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Entre em Contato
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Vamos conversar sobre seus objetivos e como posso te ajudar
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="p-8 bg-card border-eucalyptus/20 rounded-3xl shadow-soft">
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Nome completo
                  </label>
                  <Input 
                    placeholder="Seu nome"
                    className="rounded-xl border-eucalyptus/30 focus:border-eucalyptus"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    E-mail
                  </label>
                  <Input 
                    type="email"
                    placeholder="seu@email.com"
                    className="rounded-xl border-eucalyptus/30 focus:border-eucalyptus"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    WhatsApp
                  </label>
                  <Input 
                    placeholder="(00) 00000-0000"
                    className="rounded-xl border-eucalyptus/30 focus:border-eucalyptus"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Qual seu objetivo?
                  </label>
                  <Textarea 
                    placeholder="Conte um pouco sobre o que você busca..."
                    className="rounded-xl border-eucalyptus/30 focus:border-eucalyptus min-h-[120px]"
                  />
                </div>

                <Button 
                  className="w-full bg-eucalyptus hover:bg-eucalyptus-dark text-foreground font-semibold py-6 rounded-full transition-all hover:scale-105"
                >
                  Enviar mensagem
                </Button>
              </form>
            </Card>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">
                  Informações de Contato
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-eucalyptus/20 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-eucalyptus-dark" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">E-mail</p>
                      <p className="text-muted-foreground">contato@mariafernanda.com.br</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-eucalyptus/20 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-eucalyptus-dark" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">WhatsApp</p>
                      <p className="text-muted-foreground">(00) 00000-0000</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-eucalyptus/20 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-eucalyptus-dark" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Localização</p>
                      <p className="text-muted-foreground">Atendimento online e presencial</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <Card className="h-64 bg-pistachio-light rounded-3xl overflow-hidden border-eucalyptus/20">
                <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                  <MapPin className="w-12 h-12" />
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
