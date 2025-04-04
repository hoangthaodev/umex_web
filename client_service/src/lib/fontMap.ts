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
  "1_1": fontMap["Titillium_200"],
  "1_2": fontMap["Titillium_300"],
  "1_3": fontMap["Titillium_400"],
  "1_4": fontMap["Titillium_600"],
  "1_5": fontMap["Titillium_700"],
  "1_6": fontMap["Titillium_900"],
  "2_1": fontMap["NotoSans_100"],
  "2_2": fontMap["NotoSans_200"],
  "2_3": fontMap["NotoSans_300"],
  "2_4": fontMap["NotoSans_400"],
  "2_5": fontMap["NotoSans_500"],
  "2_6": fontMap["NotoSans_600"],
  "2_7": fontMap["NotoSans_700"],
  "2_8": fontMap["NotoSans_800"],
  "2_9": fontMap["NotoSans_900"],
};

const titilliumWeights = [
  { id: 1, name: "200" },
  { id: 2, name: "300" },
  { id: 3, name: "400" },
  { id: 4, name: "600" },
  { id: 5, name: "700" },
  { id: 6, name: "900" },
];

const NotoSansWeights = [
  { id: 1, name: "100" },
  { id: 2, name: "200" },
  { id: 3, name: "300" },
  { id: 4, name: "400" },
  { id: 5, name: "500" },
  { id: 6, name: "600" },
  { id: 7, name: "700" },
  { id: 8, name: "800" },
  { id: 9, name: "900" },
];

export const listFont = [
  { id: 1, name: "Titillium_Web" },
  { id: 2, name: "Noto_Sans" },
];

export const listFontWeight: Record<number, { id: number; name: string }[]> = {
  1: titilliumWeights,
  2: NotoSansWeights,
};
