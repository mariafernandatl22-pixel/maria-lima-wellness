import Logo from "./Logo";
import { Instagram, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-primary py-16">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            {/* Logo & Tagline */}
            <div className="space-y-4">
              <Logo className="text-xl" />
              <p className="text-sm text-muted-foreground">
                Desenvolvido com amor e ciência.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Links Rápidos</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="#hero" className="text-muted-foreground hover:text-foreground transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-muted-foreground hover:text-foreground transition-colors">
                    Serviços
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
                    Contato
                  </a>
                </li>
              </ul>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Redes Sociais</h4>
              <div className="flex gap-4">
                <a 
                  href="https://www.instagram.com/nutri_mariafernandalima/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-eucalyptus-dark flex items-center justify-center hover:scale-110 transition-transform"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5 text-foreground" />
                </a>
                <a 
                  href="#" 
                  className="w-12 h-12 rounded-full bg-eucalyptus-dark flex items-center justify-center hover:scale-110 transition-transform"
                  aria-label="WhatsApp"
                >
                  <MessageCircle className="w-5 h-5 text-foreground" />
                </a>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="pt-8 border-t border-eucalyptus/30 text-center">
            <p className="text-sm text-muted-foreground">
              © 2025 Maria Fernanda T Lima. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
