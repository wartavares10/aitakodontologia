export type FaqItemData = {
  id: string;
  question: string;
  answer: string;
};

export const FAQ_WHATSAPP_URL = "https://wa.me/5515998289890?text=Ol%C3%A1%2C%20tenho%20uma%20d%C3%BAvida%20sobre%20o%20atendimento%20da%20Aitak%20Odontologia.";
export const FAQ_MAP_URL = "https://www.google.com/maps/search/?api=1&query=Rua%20da%20Penha%2C%201310%2C%20Centro%2C%20Sorocaba%2C%20SP";
export const FAQ_PHONE_URL = "tel:+551532347575";

export const FAQ_ITEMS: FaqItemData[] = [
  {
    id: "convenios",
    question: "A Aitak Odontologia atende convênios?",
    answer: "Sim. A clínica trabalha com diferentes convênios odontológicos. A cobertura e os procedimentos disponíveis variam conforme a operadora e o plano contratado. Consulte nossa equipe para confirmar as condições do seu convênio.",
  },
  {
    id: "agendamento",
    question: "Como funciona o agendamento?",
    answer: "O agendamento pode ser feito pelo WhatsApp ou telefone da clínica. Nossa equipe confirma a disponibilidade e orienta você sobre os próximos passos para a avaliação.",
  },
  {
    id: "primeira-avaliacao",
    question: "Como funciona a primeira avaliação?",
    answer: "A primeira etapa inclui uma conversa sobre suas necessidades, avaliação da saúde bucal e análise das possibilidades de cuidado. Quando necessário, a equipe pode solicitar exames complementares antes de definir o planejamento.",
  },
  {
    id: "tratamentos",
    question: "A clínica realiza implantes, próteses e tratamentos ortodônticos?",
    answer: "Sim. A Aitak oferece diferentes áreas de atendimento, incluindo implantes, próteses, aparelhos ortodônticos, alinhadores, prevenção, limpeza, restaurações e estética dental. A indicação depende de avaliação individual.",
  },
  {
    id: "medo-de-dentista",
    question: "A Aitak atende pacientes com medo de dentista?",
    answer: "A equipe trabalha com acolhimento, explicações claras e respeito ao ritmo de cada paciente. Também podem ser avaliados recursos para tornar determinados atendimentos mais tranquilos, quando houver indicação profissional.",
  },
  {
    id: "oxido-nitroso",
    question: "O que é o óxido nitroso?",
    answer: "O óxido nitroso é um recurso que pode auxiliar no relaxamento durante determinados procedimentos odontológicos. Sua indicação depende de avaliação profissional e das condições de cada paciente.",
  },
  {
    id: "cobertura-convenio",
    question: "Quais procedimentos podem ser realizados pelo convênio?",
    answer: "A cobertura depende das regras da operadora e do plano contratado. Alguns procedimentos podem exigir autorização ou pagamento particular. A equipe da Aitak pode verificar essas informações antes do atendimento.",
  },
  {
    id: "localizacao",
    question: "Onde fica a Aitak Odontologia?",
    answer: "A clínica está localizada na Rua da Penha, 1310 — Centro, Sorocaba/SP.",
  },
  {
    id: "contato",
    question: "Como posso falar com a equipe?",
    answer: "Você pode entrar em contato pelo WhatsApp no número (15) 99828-9890 ou pelo telefone (15) 3234-7575.",
  },
];

export const FAQ_FEATURES = [
  { title: "Agendamento fácil e rápido", icon: "calendar", tone: "green" },
  { title: "Atendimento humanizado", icon: "headset", tone: "lilac" },
  { title: "Segurança e tecnologia", icon: "shield", tone: "lilac" },
  { title: "Tratamentos completos", icon: "heart", tone: "mixed" },
] as const;

export const FAQ_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};
