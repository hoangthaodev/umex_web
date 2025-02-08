import { NextFont } from "next/dist/compiled/@next/font";
import { Noto_Sans, Titillium_Web } from "next/font/google";

const Titillium_200 = Titillium_Web({ weight: "200", subsets: ["latin"] });
const Titillium_300 = Titillium_Web({ weight: "300", subsets: ["latin"] });
const Titillium_400 = Titillium_Web({ weight: "400", subsets: ["latin"] });
const Titillium_600 = Titillium_Web({ weight: "600", subsets: ["latin"] });
const Titillium_700 = Titillium_Web({ weight: "700", subsets: ["latin"] });
const Titillium_900 = Titillium_Web({ weight: "900", subsets: ["latin"] });

const NotoSans_100 = Noto_Sans({ weight: "100", subsets: ["latin"] });
const NotoSans_200 = Noto_Sans({ weight: "200", subsets: ["latin"] });
const NotoSans_300 = Noto_Sans({ weight: "300", subsets: ["latin"] });
const NotoSans_400 = Noto_Sans({ weight: "400", subsets: ["latin"] });
const NotoSans_500 = Noto_Sans({ weight: "500", subsets: ["latin"] });
const NotoSans_600 = Noto_Sans({ weight: "600", subsets: ["latin"] });
const NotoSans_700 = Noto_Sans({ weight: "700", subsets: ["latin"] });
const NotoSans_800 = Noto_Sans({ weight: "800", subsets: ["latin"] });
const NotoSans_900 = Noto_Sans({ weight: "900", subsets: ["latin"] });

export const fontMap = {
  Titillium_200,
  Titillium_300,
  Titillium_400,
  Titillium_600,
  Titillium_700,
  Titillium_900,
  NotoSans_100,
  NotoSans_200,
  NotoSans_300,
  NotoSans_400,
  NotoSans_500,
  NotoSans_600,
  NotoSans_700,
  NotoSans_800,
  NotoSans_900,
};

export const getFontMap: Record<string, NextFont> = {
  "0_0": fontMap["Titillium_200"],
  "0_1": fontMap["Titillium_300"],
  "0_2": fontMap["Titillium_400"],
  "0_3": fontMap["Titillium_600"],
  "0_4": fontMap["Titillium_700"],
  "0_5": fontMap["Titillium_900"],
  "1_0": fontMap["NotoSans_100"],
  "1_1": fontMap["NotoSans_200"],
  "1_2": fontMap["NotoSans_300"],
  "1_3": fontMap["NotoSans_400"],
  "1_4": fontMap["NotoSans_500"],
  "1_5": fontMap["NotoSans_600"],
  "1_6": fontMap["NotoSans_700"],
  "1_7": fontMap["NotoSans_800"],
  "1_8": fontMap["NotoSans_900"],
};

const titilliumWeights = {
  "0": "200",
  "1": "300",
  "2": "400",
  "3": "600",
  "4": "700",
  "5": "900",
};

const NotoSansWeights = {
  "0": "100",
  "1": "200",
  "2": "300",
  "3": "400",
  "4": "500",
  "5": "600",
  "6": "700",
  "7": "800",
  "8": "900",
};

export const listFont: Record<string, string> = {
  "0": "Titillium_Web",
  "1": "Noto_Sans",
};

export const listFontWeight: Record<string, Record<string, string>> = {
  "0": titilliumWeights,
  "1": NotoSansWeights,
};
