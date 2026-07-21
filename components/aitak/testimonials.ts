export type TestimonialData = {
  name: string;
  avatar: string;
  avatarScale: number;
  review: string;
};

export const TESTIMONIALS: TestimonialData[] = [
  {
    name: "Francine Rosa",
    avatar: "/assets/aitak/avaliacoes/avatars/01_francine_rosa_avatar.webp",
    avatarScale: 1.2,
    review: "Fui muito bem atendida, desde a recepção até o procedimento, recepção atenciosa e educada, avaliação ótima e com valores acessíveis, sem falar na dentista dra Natália a qual realizou o procedimento, mãos maravilhosas. Super recomendo a clínica.",
  },
  {
    name: "Quezia Rodrigues",
    avatar: "/assets/aitak/avaliacoes/avatars/02_quezia_rodrigues_avatar.webp",
    avatarScale: 1.19,
    review: "Minha experiência para remoção do siso foi incrível. A Dr Katia é super atenciosa, passou segurança durante todo procedimento, falou todas as informações necessárias, além de ter uma mão de fada. Além da recepcionista, que é uma querida, super carismática. Parabéns à toda equipe, estou muito satisfeita.",
  },
  {
    name: "Danilo Souza",
    avatar: "/assets/aitak/avaliacoes/avatars/03_danilo_souza_avatar.webp",
    avatarScale: 1.22,
    review: "Fui bem atendido desde a recepção às Dr Beatriz e Dr Daiane. Com certeza uma das melhores clínica de Sorocaba SP. Deus abençoe a todos.",
  },
  {
    name: "Ricky de Camargo",
    avatar: "/assets/aitak/avaliacoes/avatars/04_ricky_de_camargo_avatar.webp",
    avatarScale: 1.2,
    review: "Excelente, as meninas foram excelentes. Recomendo muito para operação de siso.",
  },
  {
    name: "Geraldo Almeida",
    avatar: "/assets/aitak/avaliacoes/avatars/05_geraldo_almeida_avatar.webp",
    avatarScale: 1.2,
    review: "Clínica excelente. Atendimento rápido e super educados. Profissionais especializados com ferramentas e tecnologia que surpreende. Nota 1.000.",
  },
  {
    name: "Claudia Ribeiro Santos",
    avatar: "/assets/aitak/avaliacoes/avatars/06_claudia_ribeiro_santos_avatar.webp",
    avatarScale: 1.2,
    review: "Clínica maravilhosa. Me senti acolhida e tranquila. Profissionais excelentes. Estou muito feliz, agradeço todos que me atenderam da recepção ao atendimento.",
  },
];

// TODO: substituir pelo link direto de escrita de avaliação fornecido pela clínica.
export const REVIEW_WRITE_URL_PLACEHOLDER = "https://search.google.com/local/writereview?placeid=REVIEW_WRITE_URL_PLACEHOLDER";
