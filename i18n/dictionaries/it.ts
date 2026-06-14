import { en } from "./en";

export const it = {
  ...en,
  nav: { home: "Home", heritage: "Patrimonio", highlights: "Spazi", experience: "Percorso", tickets: "Biglietti", contact: "Contatti" },
  common: { buyTickets: "Acquista biglietti", explore: "Esplora", contactUs: "Contattaci", learnMore: "Scopri di più", language: "Lingua", close: "Chiudi", submit: "Invia" },
  hero: { ...en.hero, sideTitle: "Pianifica la visita", openLabel: "Informazioni visitatori" },
  ticketStrip: { ...en.ticketStrip, title: "Un biglietto. Un viaggio culturale completo." },
  contact: { ...en.contact, title: "Pianifica la tua visita", form: { ...en.contact.form, name: "Nome", phone: "WhatsApp / Telefono", date: "Data visita", size: "Numero persone", message: "Messaggio", submit: "Invia richiesta" } },
  tickets: { ...en.tickets, title: "Biglietti", now: "Acquista ora", needHelp: "Hai bisogno di aiuto?" },
  footer: { ...en.footer, quick: "Link rapidi", booking: "Biglietteria" }
};
