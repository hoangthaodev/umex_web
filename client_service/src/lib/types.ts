export type ComponentType = {
  comp_id?: number;
  comp_name?: string;
  comp_position?: number;
  comp_index?: number;
};

export type ConfigType = {
  config_id: number;
  config_key: string;
  config_value: string;
  config_style: string;
};

export type ImageType = {
  img_id: number;
  img_src: string;
  img_title: string;
  img_alt: string;
  img_caption: string;
};

export type BreadcrumbType = {
  name: string;
  link: string;
};

export type LayoutType = {
  themeMode: string;
  layoutMode: string;
  dropShadow: boolean;
  siteWidth: number;
  containerWidth: number;
  backgroundsColor: string;
  backgroundImage: number;
  backgroundRepeat: string;
  contentBackground: string;
};

export type TypographyType = {
  fontHeadline: string;
  fontHeadlineWeight: string;
  fontBase: string;
  fontBaseWeight: string;
  fontBaseSize: number;
  fontNavigation: string;
  fontNavigationWeight: string;
};

export type ColorType = {
  primaryColor: string;
  secondaryColor: string;
  successColor: string;
  alertColor: string;
  baseColor: string;
  headlineColor: string;
  linkColor: string;
  linkColorHover: string;
};

export type DrawerType = {
  backdropColor: string;
  drawerWidth: number;
};
