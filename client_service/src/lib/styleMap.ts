export const depthMap: Record<number, string> = {
  1: "",
  2: "shadow-sm",
  3: "shadow",
  4: "shadow-md",
  5: "shadow-lg",
  6: "shadow-xl",
  7: "shadow-2xl",
};

export const depthHoverMap: Record<number, string> = {
  1: "",
  2: "hover:shadow-sm hover:transition-all",
  3: "hover:shadow hover:transition-all",
  4: "hover:shadow-md hover:transition-all hover:-translate-y-1",
  5: "hover:shadow-lg hover:transition-all hover:-translate-y-1",
  6: "hover:shadow-xl hover:transition-all hover:-translate-y-2",
  7: "hover:shadow-2xl hover:transition-all hover:-translate-y-2",
};

export const sizeMap: Record<number, string> = {
  1: "XS",
  2: "S",
  3: "Default",
  4: "M",
  5: "L",
  6: "XL",
};

export const sizeStyleMap: Record<number, string> = {
  1: "text-xs",
  2: "text-sm",
  3: "",
  4: "text-base",
  5: "text-lg",
  6: "text-2xl",
};

export const textCaseMap: Record<number, string> = {
  1: "Abc",
  2: "ABC",
};

export const textCaseStyleMap: Record<number, string> = {
  1: "",
  2: "text-uppercase",
};

export const linkTargetMap: Record<number, string> = {
  1: "Same Window",
  2: "New Window",
};

export const linkTargetStyleMap: Record<number, string> = {
  1: "_self",
  2: "_blank",
};

export const layoutModeMap: Record<number, string> = {
  1: "Full Width",
  2: "Boxed",
};

export const colorMap: Record<number, string> = {
  1: "Plain",
  2: "Primary",
  3: "Secondary",
  4: "Success",
  5: "Alert",
};

export const styleMap: Record<number, string> = {
  1: "Default",
  2: "Outline",
  3: "Underline",
  4: "Shade",
  5: "Bevel",
  6: "Gloss",
  7: "Link",
};
