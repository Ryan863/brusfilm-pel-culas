export const PHONE_DISPLAY = "+55 (47) 99978-9738";
export const WA_NUMBER = "5547999789738";

export const waLink = (msg = "Olá, gostaria de solicitar um orçamento para aplicação de películas na Brusfilm.") =>
  `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;

export const WA_HERO = waLink();

export const ADDRESS_LINES = [
  "Rua Sete de Setembro, 534 - Sala 01",
  "Bairro Santa Rita, Brusque - SC",
  "CEP 88352-001",
];

const MAPS_QUERY = encodeURIComponent(
  "Brusfilm Películas, Rua Sete de Setembro, 534, Santa Rita, Brusque - SC, 88352-001",
);
export const MAPS_LINK = `https://www.google.com/maps/search/?api=1&query=${MAPS_QUERY}`;
export const MAPS_EMBED = `https://www.google.com/maps?q=${MAPS_QUERY}&output=embed`;

export const NAV_LINKS = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Avaliações", href: "#avaliacoes" },
  { label: "Contato", href: "#contato" },
];

export const HOURS = [
  { day: "Segunda a Sexta", time: "08h às 12h | 13h30 às 18h" },
  { day: "Sábado", time: "08h às 12h" },
  { day: "Domingo", time: "Fechado" },
];

export const REVIEWS = [
  {
    text: "Atendimento pontual, no horário marcado e sem espera. O acabamento dos vidros ficou impecável, sem uma bolha.",
    tag: "Pontualidade",
  },
  {
    text: "O serviço de leva e traz é um diferencial enorme. Deixei o carro de manhã e voltou perfeito, com tudo cuidado.",
    tag: "Leva e Traz",
  },
  {
    text: "Notei a diferença no calor dentro do carro logo no primeiro dia. Película de nano-cerâmica vale cada centavo.",
    tag: "Nano-cerâmica",
  },
  {
    text: "Equipe muito profissional, explicaram cada opção de película e a garantia. Recomendo de olhos fechados.",
    tag: "Atendimento",
  },
  {
    text: "Apliquei nas janelas de casa e a sala ficou bem mais fresca, com privacidade e sem perder a luz natural.",
    tag: "Residencial",
  },
];
