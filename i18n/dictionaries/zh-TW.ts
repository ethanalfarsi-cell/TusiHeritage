import { zhCN } from "./zh-CN";

export const zhTW = {
  ...zhCN,
  nav: { home: "首頁", heritage: "文化", highlights: "展館", experience: "體驗", tickets: "購票", contact: "諮詢" },
  common: { buyTickets: "購票", explore: "探索景區", contactUs: "預約諮詢", learnMore: "了解更多", language: "語言", close: "關閉", submit: "提交" },
  hero: {
    ...zhCN.hero,
    title: "湘西府",
    line: "活化千年歷史，對話神秘湘西",
    copy: "坐落於張家界武陵源核心地段，湘西府以土司文化為核心，融合巫儺、婚俗、耕讀家風、辰州朱砂與禪意文博，開啟一場穿越湘西千年文脈的文化探秘之旅。",
    note: "您的旅程，由您從容掌握。門票包含景區常規文化參觀體驗，可選項目清晰展示，自主選擇。"
  },
  about: { ...zhCN.about, title: "一座濃縮湘西千年人文的沉浸式文化博物館" },
  contact: { ...zhCN.contact, title: "預約您的湘西府之旅" },
  tickets: { ...zhCN.tickets, title: "購票", now: "立即購票", modalTitle: "購票入口即將開放" },
  footer: { ...zhCN.footer, tagline: "活化千年歷史，對話神秘湘西" }
};
