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

export const sizeStyleMap: Record<number, string> = {
  1: "text-xs",
  2: "text-sm",
  3: "",
  4: "text-base",
  5: "text-lg",
  6: "text-2xl",
};

export const textCaseStyleMap: Record<number, string> = {
  1: "",
  2: "text-uppercase",
};

export const linkTargetStyleMap: Record<number, string> = {
  1: "_self",
  2: "_blank",
};
