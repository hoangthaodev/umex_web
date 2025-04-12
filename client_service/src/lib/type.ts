export type ComponentType = {
  component_id?: number;
  component_name: string;
  component_position: number;
  component_index: number;
  component_map: string;
};

export type ConfigType = {
  config_id?: number;
  config_key: string;
  config_value: string;
  config_style: string;
};

export type ImageType = {
  image_id?: number;
  image_url: string;
  image_title?: string;
  image_alt?: string;
  image_caption?: string;
};

export type BreadcrumbType = {
  name: string;
  link: string;
};

export type LayoutType = {
  themeMode: number;
  layoutMode: number;
  dropShadow: boolean;
  siteWidth: number;
  containerWidth: number;
  backgroundsColor: string;
  backgroundImage: number;
  backgroundRepeat: number;
  contentBackground: string;
};

export type TypographyType = {
  fontHeadline: number;
  fontHeadlineWeight: number;
  fontBase: number;
  fontBaseWeight: number;
  fontBaseSize: number;
  fontNavigation: number;
  fontNavigationWeight: number;
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
  logoMaxWidth: number;
  logoPadding: number;
  logoLink: string;
};

export type TopbarType = {
  topbarEnable: boolean;
  topbarLayoutHeight: number;
  topbarLayoutTextColor: number;
  topbarLayoutBackgroundColor: string;
  topbarLayoutBackgroundImage: number;
  topbarLayoutBackgroundRepeat: number;
  topbarIsUppercase: boolean;
  topbarNavColor: string;
  topbarNavColorHover: string;
  topbarNavHeight: number;
  topbarNavStyle: number;
};

export type HeaderMainType = {
  mainLayoutHeight: number;
  mainLayoutTextColor: number;
  mainLayoutBackgroundColor: string | undefined;
  mainLayoutBackgroundImage: number;
  mainLayoutBackgroundRepeat: number;
  mainIsUppercase: boolean;
  mainNavColor: string | undefined;
  mainNavColorHover: string | undefined;
  mainNavHeight: number;
  mainNavStyle: number;
};

export type HeaderBottomType = {
  bottomLayoutHeight: number;
  bottomLayoutTextColor: number;
  bottomLayoutBackgroundColor: string | undefined;
  bottomLayoutBackgroundImage: number;
  bottomLayoutBackgroundRepeat: number;
  bottomIsUppercase: boolean;
  bottomNavColor: string | undefined;
  bottomNavColorHover: string | undefined;
  bottomNavHeight: number;
  bottomNavStyle: number;
};

export type StickyType = {
  stickyStyle: number;
  stickyHideScrolldown: boolean;
  stickyTopCheck: boolean;
  stickyMainCheck: boolean;
  stickyBottomCheck: boolean;
  stickyLogo: number;
};

export type SearchType = {
  searchStyle: number;
  searchType: number;
  searchPlaceholder: string;
  searchWidth: number;
  searchCategory: boolean;
};

export type FollowIconsType = {
  iconStyle: number;
  facebook: string;
  instagram: string;
  tiktok: string;
  xTwitter: string;
  email: string;
  phone: string;
  pinterest: string;
  rss: string;
  linkedIn: string;
  youtube: string;
  flickr: string;
  icon500px: string;
  telegram: string;
  twitch: string;
  discord: string;
};

export type HTMLType = {
  htmlBlock1: number;
  htmlBlock2: number;
  htmlBlock3: number;
  htmlBlock4: number;
  html1: string;
  html2: string;
  html3: string;
  html4: string;
  html5: string;
};

export type ContactType = {
  contactIconStyle: number;
  contactIconSize: number;
  contactLocation: string;
  contactLocationLabel: string;
  contactEmail: string;
  contactEmailLabel: string;
  contactOpenhours: string;
  contactOpenhoursDetails: string;
  contactPhone: string;
};

export type VerticalType = {
  verticalOpenerIcon: number;
  verticalOpenerHeight: number;
  verticalOpenerWidth: number;
  verticalOpenerTagline: string;
  verticalOpenerText: string;
  verticalOpenerBaseColor: number;
  verticalOpenerColor: string | undefined;
  verticalOpenerBackgroundColor: string | undefined;
  verticalFlyoutKeepOpen: boolean;
  verticalFlyoutAddShadow: boolean;
  verticalFlyoutWidth: number;
  verticalFlyoutBackgroundColor: string | undefined;
  verticalFlyoutDivider: boolean;
  verticalFlyoutNavHeight: number;
  verticalFlyoutBaseColor: number;
  verticalFlyoutNavColor: string | undefined;
  verticalFlyoutNavColorHover: string | undefined;
  verticalFlyoutNavBackgroundHover: string | undefined;
};

export type ButtonType = {
  button1Case: number;
  button1Color: number;
  button1Icon: string;
  button1Link: string;
  button1Radius: number;
  button1Rel: string;
  button1Size: number;
  button1Style: number;
  button1Text: string;
  button1Target: number;
  button2Case: number;
  button2Color: number;
  button2Icon: string;
  button2Link: string;
  button2Radius: number;
  button2Rel: string;
  button2Size: number;
  button2Style: number;
  button2Text: string;
  button2Target: number;
};

export type ListMenuElementType = {
  componentId: number;
  status: number;
};

export type NaviconType = {
  naviconHeight: number;
  naviconStyle: number;
  naviconShowTitle: boolean;
  naviconOverlay: number;
  naviconBehavior: number;
  naviconSubmenuEffect: number;
  naviconTopContent: string;
  naviconTabs: number;
  naviconTab1Text: string;
  naviconTab2Text: string;
  naviconTab1Element: string;
  naviconTab2Element: string;
  naviconOverlayColor: number;
  naviconBackgroundColor: string | undefined;
};

export type FooterType = {
  footerBlock: number;
  footer1Checked: boolean;
  footer1Columns: number;
  footer1TextColor: number;
  footer1BackgroundColor: string | undefined;
  footer1BackgroundImage: number;
  footer2Checked: boolean;
  footer2Columns: number;
  footer2TextColor: number;
  footer2BackgroundColor: string | undefined;
  footer2BackgroundImage: number;
  footerAbsoluteTextColor: number;
  footerAbsoluteAlign: number;
  footerAbsoluteBackgroundColor: string | undefined;
  footerAbsoluteBottomTextPrimary: string;
  footerAbsoluteBottomTextSecondary: string;
  footerBTTEnable: boolean;
  footerBTTShape: number;
  footerBTTPosition: number;
  footerBTTShowMobile: boolean;
  footerHTMLBefore: string;
  footerHTMLAfter: string;
};

export type ShareType = {
  shareIconStyle: number;
  shareIcons: number[];
};

export type HomepageType = {
  homepageDisplay: number;
  homepagePage: number;
};

export type PageType = {
  page_id?: number;
  page_title: string;
  page_slug: string;
  page_content: string;
  page_description: string;
  page_status: number;
  page_publish_year: number;
  page_publish_month: number;
  page_publish_day: number;
  page_feature_image: number;
  user_id: number;
  type_id: number;
  template_id: number;
};

export type UserType = {
  user_id?: number;
  user_name: string;
  user_email: string;
  user_active: number;
  user_display_name: string;
};

export type CategoryType = {
  category_id?: number;
  category_name: string;
  category_slug: string;
  category_description: string;
  category_parent: number;
  type_id: number;
};

export type TagType = {
  tag_id?: number;
  tag_name: string;
  tag_slug: string;
  tag_description: string;
  type_id: number;
};

export type PageCategoryType = {
  pagecategory_id?: number;
  page_id: number;
  category_id: number;
  pagecategory_slug: string;
};

export type PageTagType = {
  pagetag_id?: number;
  page_id: number;
  tag_id: number;
  pagetag_slug: string;
};

export type MenuLocationType = {
  location_id?: number;
  location_name: string;
  menu_id: number;
};

export type MenuType = {
  menu_id?: number;
  menu_name: string;
  menu_value: string;
  menu_slug: string;
};

export type MenuValueType = {
  value_id: number;
  type: number;
  content: {
    id: number;
    label: string;
    url: string;
  };
  depth: number;
};
