import { en } from "./en";

export const pt = {
  ...en,
  nav: { home: "Início", heritage: "Patrimônio", highlights: "Destaques", experience: "Roteiro", tickets: "Ingressos", contact: "Contato" },
  common: { buyTickets: "Comprar ingressos", explore: "Explorar", contactUs: "Fale conosco", learnMore: "Saiba mais", language: "Idioma", close: "Fechar", submit: "Enviar" },
  hero: { ...en.hero, sideTitle: "Planeje a visita", openLabel: "Informações ao visitante", navVisit: "Visita e ingressos", navCollect: "Destaques", navStories: "Histórias", navConsult: "Planejar visita", ticketsLabel: "Ingressos Xiangxi Fu" },
  ticketStrip: { ...en.ticketStrip, title: "Um ingresso. Uma jornada cultural completa." },
  contact: { ...en.contact, title: "Planeje sua visita", form: { ...en.contact.form, name: "Nome", phone: "WhatsApp / Telefone", date: "Data da visita", size: "Tamanho do grupo", message: "Mensagem", submit: "Enviar consulta" } },
  tickets: { ...en.tickets, title: "Ingressos", now: "Comprar agora", needHelp: "Precisa de ajuda?" },
  footer: { ...en.footer, quick: "Links rápidos", booking: "Reserva de ingressos" }
};
