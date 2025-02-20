export type ComponentType = {
  component_id: number;
  component_name: string;
  component_position: number;
  component_index: number;
  component_map: string;
};

export type ConfigType = {
  config_id: number;
  config_key: string;
  config_value: string;
  config_style: string;
};

export type ImageType = {
  image_id: number;
  image_url: string;
  image_title: string;
  image_alt: string;
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

export type SiteIdentifyType = {
  title: string;
  description: string;
  isDisplayBelowLogo: boolean;
  logo: number;
  favicon: number;
  logoContainerWidth: number;
  logoMaxWidth: string;
  logoPadding: number;
  logoLink: string;
};

export type CompItems = string[];

export type TopbarType = {
  topbarEnable: boolean;
  topbarLayoutHeight: number;
  topbarLayoutTextColor: string;
  topbarLayoutBackgroundColor: string;
  topbarLayoutBackgroundImage: number;
  topbarLayoutBackgroundRepeat: number;
  topbarIsUppercase: boolean;
  topbarNavColor: string;
  topbarNavColorHover: string;
  topbarNavHeight: number;
  topbarNavStyle: number;
};

export type PageType = {
  page_id: number;
  page_title: string;
  page_slug: string;
  page_content: string;
  page_description: string;
  page_status: number;
  page_publish_year: number;
  page_publish_month: number;
  page_publish_day: number;
  page_image: number;
  page_trash: number;
  user_id: number;
  type_id: number;
  category_id: number;
  temp_id: number;
};

export type UserType = {
  user_id: number;
  user_name: string;
  user_email: string;
  user_active: number;
};

export type TypeType = {
  type_id: number;
  type_name: string;
};
