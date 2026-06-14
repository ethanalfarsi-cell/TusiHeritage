"use client";

import { contactConfig } from "@/data/contact";
import type { Locale } from "@/i18n/config";
import { useI18n } from "@/i18n/useI18n";

const locationIntro: Record<Locale, string> = {
  en: "Xiangxi Fu Scenic Area is located in the core area of Zhangjiajie Wulingyuan Scenic and Historic Interest Area, a UNESCO World Natural Heritage Site. It borders the Suoxi River and Gaoyun Bridge to the east, and faces the scenic area’s main entrance, the Sign Gate, across the water to the north.",
  "zh-CN": "湘西府景区坐落于世界自然遗产地张家界市武陵源风景名胜区的核心地段，它东邻索溪河畔、高云桥头，北与风景名胜区主入口“标志门”隔水相望。",
  "zh-TW": "湘西府景區坐落於世界自然遺產地張家界市武陵源風景名勝區的核心地段，東鄰索溪河畔、高雲橋頭，北與風景名勝區主入口「標誌門」隔水相望。",
  fr: "Le site touristique de Xiangxi Fu se trouve au cœur de la zone panoramique de Wulingyuan à Zhangjiajie, inscrite au patrimoine naturel mondial. À l’est, il borde la rivière Suoxi et le pont Gaoyun; au nord, il fait face, au-delà de l’eau, à l’entrée principale du site, la Porte Emblématique.",
  de: "Das Xiangxi-Fu-Gebiet liegt im Kernbereich des Wulingyuan-Landschaftsgebiets in Zhangjiajie, einer UNESCO-Weltnaturerbestätte. Im Osten grenzt es an den Suoxi-Fluss und die Gaoyun-Brücke; im Norden blickt es über das Wasser auf den Haupteingang des Landschaftsgebiets, das Sign Gate.",
  es: "El área escénica de Xiangxi Fu se encuentra en el núcleo de Wulingyuan, Zhangjiajie, sitio de Patrimonio Natural Mundial. Al este limita con el río Suoxi y el puente Gaoyun; al norte mira, al otro lado del agua, hacia la entrada principal del área escénica, la Puerta Emblemática.",
  it: "L’area scenica di Xiangxi Fu si trova nel cuore di Wulingyuan a Zhangjiajie, sito del Patrimonio Naturale Mondiale. A est confina con il fiume Suoxi e il ponte Gaoyun; a nord guarda, oltre l’acqua, l’ingresso principale dell’area scenica, la Porta Emblematica.",
  pt: "A Área Cênica de Xiangxi Fu está situada no núcleo de Wulingyuan, em Zhangjiajie, Patrimônio Natural Mundial. A leste, fica junto ao rio Suoxi e à ponte Gaoyun; ao norte, olha através da água para a entrada principal da área cênica, o Portão Emblemático.",
  ja: "湘西府景区は、世界自然遺産である張家界市武陵源風景名勝区の中心エリアに位置しています。東は索渓河畔と高雲橋に隣接し、北は水を隔てて景区の正門「標志門」と向かい合っています。",
  ko: "상서부 관광지는 세계자연유산인 장자제시 우링위안 풍경명승구의 핵심 구역에 자리하고 있습니다. 동쪽으로는 쒀시허 강변과 가오윈교에 인접하고, 북쪽으로는 물길을 사이에 두고 명승구 주 출입구인 ‘표지문’을 마주합니다."
};

const locationIntroScript = `
(() => {
  const intros = ${JSON.stringify(locationIntro)};
  const storageKey = "xiangxifu_locale";
  const eventName = "xiangxifu-locale-change";
  const normalize = (input) => {
    if (!input) return "en";
    if (intros[input]) return input;
    const base = input.split("-")[0];
    if (base === "zh") return "zh-CN";
    if (base === "pt") return "pt";
    return intros[base] ? base : "en";
  };
  const update = () => {
    const element = document.querySelector("[data-map-location-intro]");
    if (!element) return;
    const locale = normalize(window.localStorage.getItem(storageKey) || document.documentElement.lang);
    element.textContent = intros[locale] || intros.en;
  };
  window.addEventListener(eventName, update);
  window.addEventListener("storage", update);
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", update, { once: true });
  } else {
    update();
  }
})();
`;

export function GoogleMapCard() {
  const { locale, t } = useI18n();
  const query = encodeURIComponent(contactConfig.mapQuery);
  const intro = locationIntro[locale] ?? locationIntro.en;
  const mapSrc = `https://maps.google.com/maps?q=${query}&z=14&output=embed`;

  return (
    <>
    <article className="card-hover min-h-[360px] overflow-hidden border border-[#b88a5a]/45 bg-[#4f171b] text-white shadow-[0_24px_70px_rgba(77,36,26,0.12)] md:col-span-2 xl:col-span-2">
      <div className="grid h-full min-h-[360px] grid-cols-1 lg:grid-cols-[0.75fr_1.25fr]">
        <div className="relative flex flex-col justify-between overflow-hidden border-b border-[#d4a86a]/30 bg-[linear-gradient(145deg,#5b191d_0%,#762a22_52%,#9e4a2c_100%)] p-5 lg:border-b-0 lg:border-r">
          <div className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-gold/16 blur-3xl" />
          <div className="pointer-events-none absolute bottom-0 left-0 h-40 w-full bg-[linear-gradient(180deg,transparent,rgba(47,18,14,0.34))]" />
          <div className="relative">
            <p className="text-xs font-black uppercase text-gold">Google Maps</p>
            <h3 className="museum-title mt-3 text-4xl font-black leading-none text-white md:text-5xl">{t("contact.maps")}</h3>
            <p data-map-location-intro className="mt-5 max-w-md text-sm font-semibold leading-7 text-white/84 md:text-[15px]">{intro}</p>
          </div>
          <a
            href={contactConfig.googleMaps}
            target="_blank"
            rel="noreferrer"
            className="relative mt-6 inline-flex w-fit rounded-full border border-[#f0d4a0]/70 bg-white/10 px-5 py-3 text-xs font-black uppercase text-white shadow-[0_12px_34px_rgba(50,16,12,0.18)] transition hover:border-white hover:bg-white hover:text-cinnabarDark"
          >
            Open Map
          </a>
        </div>
        <iframe
          title="Xiangxi Fu Google Map"
          src={mapSrc}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="h-full min-h-[360px] w-full border-0 grayscale-[12%]"
        />
      </div>
    </article>
    <script dangerouslySetInnerHTML={{ __html: locationIntroScript }} />
    </>
  );
}
