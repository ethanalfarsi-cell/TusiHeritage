import type { Locale } from "@/i18n/config";

export type LocalizedString = Partial<Record<Locale, string>> & { en: string; "zh-CN": string };

export type Attraction = {
  slug: string;
  image: string;
  name: LocalizedString;
  englishName: string;
  description: LocalizedString;
};

export const attractions: Attraction[] = [
  {
    slug: "wufeng-gate",
    image: "/images/wufenglou.jpg",
    name: { en: "Wufeng Gate", "zh-CN": "五凤楼", "zh-TW": "五鳳樓" },
    englishName: "Wufeng Gate",
    description: {
      en: "The ceremonial gateway to Xiangxi Fu. Its layered eaves rise like a phoenix, opening the journey into Tusi architecture and mountain heritage.",
      "zh-CN": "湘西府迎客之门，飞檐翘角，如凤凰展翅，是进入湘西府文化旅程的第一重仪式感。",
      "zh-TW": "湘西府迎客之門，飛簷翹角，如鳳凰展翅，是進入湘西府文化旅程的第一重儀式感。"
    }
  },
  {
    slug: "shizhong-hall",
    image: "/images/shizhongtang.jpg",
    name: { en: "Shizhong Hall", "zh-CN": "世忠堂", "zh-TW": "世忠堂" },
    englishName: "Shizhong Hall",
    description: {
      en: "The central hall traces eight centuries of Peng Tusi governance, border defense, tribute routes and the family glory of defending the realm.",
      "zh-CN": "景区中轴核心建筑，呈现彭氏土司八百年戍边守土、忠君报国与出征抗倭的家国荣光。",
      "zh-TW": "景區中軸核心建築，呈現彭氏土司八百年戍邊守土、忠君報國與出征抗倭的家國榮光。"
    }
  },
  {
    slug: "zhuoying-study",
    image: "/images/zhuoyingxuan.jpg",
    name: { en: "Zhuoying Study", "zh-CN": "濯缨轩", "zh-TW": "濯纓軒" },
    englishName: "Zhuoying Study",
    description: {
      en: "A fragrant camphor-wood study devoted to learning, family virtues and the cultured spirit that sustained Tusi society.",
      "zh-CN": "香樟木书香空间，讲述尊师重教、崇智尚学与耕读传家的土家六德家训。",
      "zh-TW": "香樟木書香空間，講述尊師重教、崇智尚學與耕讀傳家的土家六德家訓。"
    }
  },
  {
    slug: "tujia-wedding-residence",
    image: "/images/yaju.jpg",
    name: { en: "Tujia Wedding Residence", "zh-CN": "雅居", "zh-TW": "雅居" },
    englishName: "Tujia Wedding Residence",
    description: {
      en: "A refined reconstruction of Tujia wedding rituals, tea vows, dowry traditions and the quiet dignity of family ceremonies.",
      "zh-CN": "以土司大婚文化为主题，复原土家婚俗礼仪、亮嫁妆、三茶六礼与传统婚床。",
      "zh-TW": "以土司大婚文化為主題，復原土家婚俗禮儀、亮嫁妝、三茶六禮與傳統婚床。"
    }
  },
  {
    slug: "nuo-culture-pavilion",
    image: "/images/nuoyuan.jpg",
    name: { en: "Nuo Culture Pavilion", "zh-CN": "宝仁阁 · 傩愿馆", "zh-TW": "寶仁閣 · 儺願館" },
    englishName: "Nuo Culture Pavilion",
    description: {
      en: "A respectful presentation of Xiangxi Nuo culture, masks, ritual memory and the spiritual imagination of mountain communities.",
      "zh-CN": "展示湘西巫傩、还傩愿与民间信仰文化，呈现湘西人面对自然与人生的精神寄托。",
      "zh-TW": "展示湘西巫儺、還儺願與民間信仰文化，呈現湘西人面對自然與人生的精神寄託。"
    }
  },
  {
    slug: "sien-studio",
    image: "/images/sienzai.jpg",
    name: { en: "Si’en Studio", "zh-CN": "思恩斋", "zh-TW": "思恩齋" },
    englishName: "Si’en Studio",
    description: {
      en: "A calm museum-like space for rotating collections, wood-carved Buddhist art, hair embroidery and quiet reflection.",
      "zh-CN": "禅意文博空间，结合博物馆巡展、木雕造像与发绣艺术，呈现静心向善的东方审美。",
      "zh-TW": "禪意文博空間，結合博物館巡展、木雕造像與髮繡藝術，呈現靜心向善的東方審美。"
    }
  },
  {
    slug: "yongfu-pagoda",
    image: "/images/yongfuta.jpg",
    name: { en: "Yongfu Pagoda", "zh-CN": "永福塔", "zh-TW": "永福塔" },
    englishName: "Yongfu Pagoda",
    description: {
      en: "A five-storey timber pagoda carrying wishes of fortune, prosperity, longevity, joy and celebration for every visitor.",
      "zh-CN": "五层楼阁式木塔，寓意福、禄、寿、喜、庆，是园区标志性文化符号。",
      "zh-TW": "五層樓閣式木塔，寓意福、祿、壽、喜、慶，是園區標誌性文化符號。"
    }
  }
];

export function localize(value: LocalizedString, locale: Locale) {
  return value[locale] ?? value.en ?? value["zh-CN"];
}
