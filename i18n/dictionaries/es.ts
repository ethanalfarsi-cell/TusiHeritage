import { en } from "./en";

export const es = {
  ...en,
  nav: { home: "Inicio", heritage: "Patrimonio", highlights: "Espacios", experience: "Ruta", tickets: "Entradas", contact: "Contacto" },
  common: { buyTickets: "Comprar entradas", explore: "Explorar", contactUs: "Contactar", learnMore: "Más información", language: "Idioma", close: "Cerrar", submit: "Enviar" },
  hero: { ...en.hero, sideTitle: "Planifica tu visita", openLabel: "Información para visitantes" },
  ticketStrip: { ...en.ticketStrip, title: "Una entrada. Un recorrido cultural completo." },
  contact: { ...en.contact, title: "Planifica tu visita", form: { ...en.contact.form, name: "Nombre", phone: "WhatsApp / Teléfono", date: "Fecha de visita", size: "Tamaño del grupo", message: "Mensaje", submit: "Enviar consulta" } },
  tickets: { ...en.tickets, title: "Entradas", now: "Comprar ahora", needHelp: "¿Necesitas ayuda?" },
  footer: { ...en.footer, quick: "Enlaces", booking: "Reserva de entradas" }
};
