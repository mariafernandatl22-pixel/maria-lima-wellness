import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const whatsappLink = "https://whatsa.me/5532999139341/?t=Ol%C3%A1!%20%F0%9F%98%8A%20Que%20bom%20receber%20sua%20mensagem!%20%20Sou%20nutricionista%20e%20vou%20ficar%20muito%20feliz%20em%20te%20ajudar%20a%20conquistar%20seus%20objetivos%20com%20sa%C3%BAde,%20leveza%20e%20estrat%C3%A9gias%20realmente%20personalizadas.%20%20Para%20te%20orientar%20da%20melhor%20forma,%20me%20conta:%20%E2%80%A2%20Qual%20%C3%A9%20o%20seu%20objetivo%20no%20momento?%20%20Assim%20j%C3%A1%20te%20explico%20como%20funciona%20meu%20trabalho%20e%20qual%20o%20melhor%20caminho%20para%20voc%C3%AA.%20Estou%20%C3%A0%20disposi%C3%A7%C3%A3o!%20%F0%9F%92%9A";

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20BA5C] text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110 animate-pulse hover:animate-none"
      aria-label="Fale conosco pelo WhatsApp"
    >
      <MessageCircle className="w-7 h-7" />
    </a>
  );
};

export default WhatsAppButton;