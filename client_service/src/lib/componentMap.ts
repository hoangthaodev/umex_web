import Logo from "@/components/component/Logo";
import React from "react";

export const componentMap: Record<string, () => React.JSX.Element> = {
  Logo: Logo,
};

export const listComponent: Record<number, string> = {
  0: "Comp0",
  1: "Comp1",
  2: "Comp2",
  3: "Comp3",
  4: "Comp4",
  5: "Comp5",
  6: "Comp6",
  7: "Comp7",
  8: "Comp8",
  9: "Comp9",
  10: "MobComp1",
  11: "MobComp2",
  12: "MobComp3",
  13: "MobComp4",
  14: "MobComp5",
};
