import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
    "./i18n/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        paper: "#F5EFE3",
        ink: "#151515",
        cinnabar: "#9E2F24",
        cinnabarDark: "#7B2119",
        jade: "#1F3D35",
        gold: "#C6A15B",
        wood: "#3A2618"
      },
      fontFamily: {
        serifCn: ["Source Han Serif SC", "Noto Serif CJK SC", "Noto Serif SC", "STZhongsong", "Songti SC", "STSong", "Georgia", "serif"],
        sans: ["Avenir Next", "SF Pro Display", "HarmonyOS Sans SC", "Microsoft YaHei UI", "PingFang SC", "Inter", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"]
      },
      boxShadow: {
        museum: "0 22px 60px rgba(58,38,24,0.13)"
      }
    }
  },
  plugins: []
};

export default config;
