import { en } from "./en";

export const de = {
  ...en,
  nav: { home: "Start", heritage: "Kultur", highlights: "Highlights", experience: "Route", tickets: "Tickets", contact: "Kontakt" },
  common: { buyTickets: "Tickets kaufen", explore: "Entdecken", contactUs: "Kontakt", learnMore: "Mehr erfahren", language: "Sprache", close: "Schließen", submit: "Senden" },
  hero: { ...en.hero, sideTitle: "Besuch planen", openLabel: "Besucherinformation" },
  ticketStrip: { ...en.ticketStrip, title: "Ein Ticket. Eine vollständige Kulturreise." },
  contact: { ...en.contact, title: "Planen Sie Ihren Besuch", form: { ...en.contact.form, name: "Name", phone: "WhatsApp / Telefon", date: "Besuchsdatum", size: "Gruppengröße", message: "Nachricht", submit: "Anfrage senden" } },
  tickets: { ...en.tickets, title: "Tickets", now: "Tickets kaufen", needHelp: "Brauchen Sie Hilfe?" },
  footer: { ...en.footer, quick: "Schnellzugriff", booking: "Ticketbuchung" }
};
