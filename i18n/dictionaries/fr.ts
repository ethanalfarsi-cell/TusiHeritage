import { en } from "./en";

export const fr = {
  ...en,
  nav: { home: "Accueil", heritage: "Patrimoine", highlights: "Espaces", experience: "Parcours", tickets: "Billets", contact: "Contact" },
  common: { buyTickets: "Acheter des billets", explore: "Explorer", contactUs: "Nous contacter", learnMore: "En savoir plus", language: "Langue", close: "Fermer", submit: "Envoyer" },
  hero: { ...en.hero, sideTitle: "Préparer la visite", openLabel: "Informations visiteurs" },
  ticketStrip: { ...en.ticketStrip, title: "Un billet. Un parcours culturel complet." },
  contact: { ...en.contact, title: "Préparer votre visite", form: { ...en.contact.form, name: "Nom", phone: "WhatsApp / Téléphone", date: "Date de visite", size: "Taille du groupe", message: "Message", submit: "Envoyer la demande" } },
  tickets: { ...en.tickets, title: "Billets", now: "Acheter maintenant", needHelp: "Besoin d’aide ?" },
  footer: { ...en.footer, quick: "Liens rapides", booking: "Billetterie" }
};
