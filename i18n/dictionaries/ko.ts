import { en } from "./en";

export const ko = {
  ...en,
  nav: { home: "홈", heritage: "문화", highlights: "전시 공간", experience: "동선", tickets: "티켓", contact: "문의" },
  common: { buyTickets: "티켓 구매", explore: "둘러보기", contactUs: "문의하기", learnMore: "자세히", language: "언어", close: "닫기", submit: "제출" },
  hero: { ...en.hero, sideTitle: "방문 계획", openLabel: "방문 정보" },
  ticketStrip: { ...en.ticketStrip, title: "한 장의 티켓, 하나의 완전한 문화 여정." },
  contact: { ...en.contact, title: "방문 문의", form: { ...en.contact.form, name: "이름", phone: "WhatsApp / 전화", date: "방문일", size: "인원", message: "문의 내용", submit: "문의 제출" } },
  tickets: { ...en.tickets, title: "티켓", now: "지금 구매", needHelp: "도움이 필요하신가요?" },
  footer: { ...en.footer, quick: "빠른 링크", booking: "티켓 예약" }
};
