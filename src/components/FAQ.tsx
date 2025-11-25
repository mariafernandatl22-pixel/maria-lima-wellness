import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Como funciona a consulta?",
    answer: "A consulta é feita de forma online ou presencial. Fazemos uma anamnese completa, avaliação de hábitos alimentares e objetivos. Em seguida, elaboro um plano nutricional personalizado para você.",
  },
  {
    question: "O plano é personalizado?",
    answer: "Sim! Cada plano é único e feito especialmente para você, levando em conta sua rotina, preferências alimentares, objetivos e condições de saúde. Não trabalho com dietas prontas.",
  },
  {
    question: "Você atende online?",
    answer: "Sim, atendo tanto presencialmente quanto online por videochamada. O atendimento online tem a mesma qualidade e eficiência do presencial.",
  },
  {
    question: "Quais são as formas de pagamento?",
    answer: "Aceito PIX, transferência bancária, cartão de crédito e parcelamento em até 3x com juros. Entre em contato para mais detalhes sobre valores e condições.",
  },
  {
    question: "Quanto tempo até ver resultados?",
    answer: "Os resultados variam de pessoa para pessoa, mas geralmente as mudanças começam a aparecer entre 2-4 semanas. O importante é seguir o plano de forma consistente e manter o acompanhamento.",
  },
  {
    question: "Preciso eliminar todos os alimentos que gosto?",
    answer: "Não! Acredito em uma alimentação equilibrada e sustentável. O plano inclui alimentos que você gosta, respeitando suas preferências. A ideia é criar hábitos saudáveis para a vida toda.",
  },
];

const FAQ = () => {
  return (
    <section className="py-24 bg-pistachio-light">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Perguntas Frequentes
            </h2>
            <p className="text-lg text-muted-foreground">
              Tire suas dúvidas sobre o atendimento
            </p>
          </div>

          {/* FAQ Accordion */}
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card border-eucalyptus/20 rounded-2xl px-6 shadow-soft"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-eucalyptus-dark transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
