import { en } from "./en";

export const ja = {
  ...en,
  nav: { home: "ホーム", heritage: "文化", highlights: "見どころ", experience: "体験", tickets: "チケット", contact: "お問い合わせ" },
  common: { buyTickets: "チケット購入", explore: "探索する", contactUs: "相談する", learnMore: "詳しく見る", language: "言語", close: "閉じる", submit: "送信" },
  hero: { ...en.hero, sideTitle: "来訪計画", openLabel: "来館情報" },
  ticketStrip: { ...en.ticketStrip, title: "一枚のチケットで、文化の旅を完整に。" },
  contact: { ...en.contact, title: "訪問を相談する", form: { ...en.contact.form, name: "お名前", phone: "WhatsApp / 電話", date: "訪問日", size: "人数", message: "内容", submit: "送信する" } },
  tickets: { ...en.tickets, title: "チケット", now: "今すぐ購入", needHelp: "サポートが必要ですか？" },
  footer: { ...en.footer, quick: "クイックリンク", booking: "チケット予約" }
};
