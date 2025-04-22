import AccountMenu from "@/components/component/AccountMenu";
import Block1 from "@/components/component/Block1";
import Block2 from "@/components/component/Block2";
import Block3 from "@/components/component/Block3";
import Block4 from "@/components/component/Block4";
import Button1 from "@/components/component/Button1";
import Button2 from "@/components/component/Button2";
import Cart from "@/components/component/Cart";
import Checkout from "@/components/component/Checkout";
import Contact from "@/components/component/Contact";
import HTML1 from "@/components/component/HTML1";
import HTML2 from "@/components/component/HTML2";
import HTML3 from "@/components/component/HTML3";
import HTML4 from "@/components/component/HTML4";
import HTML5 from "@/components/component/HTML5";
import Language from "@/components/component/Language";
import Logo from "@/components/component/Logo";
import LogoMob from "@/components/component/LogoMob";
import MainMenu from "@/components/component/MainMenu";
import MainMenuMob from "@/components/component/MainMenuMob";
import PreviewAccountMenu from "@/components/component/preview/PreviewAccountMenu";
import PreviewBlock1 from "@/components/component/preview/PreviewBlock1";
import PreviewBlock2 from "@/components/component/preview/PreviewBlock2";
import PreviewBlock3 from "@/components/component/preview/PreviewBlock3";
import PreviewBlock4 from "@/components/component/preview/PreviewBlock4";
import PreviewButton1 from "@/components/component/preview/PreviewButton1";
import PreviewButton2 from "@/components/component/preview/PreviewButton2";
import PreviewCart from "@/components/component/preview/PreviewCart";
import PreviewCheckout from "@/components/component/preview/PreviewCheckout";
import PreviewContact from "@/components/component/preview/PreviewContact";
import PreviewHTML1 from "@/components/component/preview/PreviewHTML1";
import PreviewHTML2 from "@/components/component/preview/PreviewHTML2";
import PreviewHTML3 from "@/components/component/preview/PreviewHTML3";
import PreviewHTML4 from "@/components/component/preview/PreviewHTML4";
import PreviewHTML5 from "@/components/component/preview/PreviewHTML5";
import PreviewLanguage from "@/components/component/preview/PreviewLanguage";
import PreviewLogo from "@/components/component/preview/PreviewLogo";
import PreviewLogoMob from "@/components/component/preview/PreviewLogoMob";
import PreviewMainMenu from "@/components/component/preview/PreviewMainMenu";
import PreviewMainMenuMob from "@/components/component/preview/PreviewMainMenuMob";
import PreviewSearchForm from "@/components/component/preview/PreviewSearchForm";
import PreviewSearchIcon from "@/components/component/preview/PreviewSearchIcon";
import PreviewSecondaryMenu from "@/components/component/preview/PreviewSecondaryMenu";
import PreviewSocialIcons from "@/components/component/preview/PreviewSocialIcons";
import PreviewTopbarMenu from "@/components/component/preview/PreviewTopbarMenu";
import PreviewVerticalMenu from "@/components/component/preview/PreviewVerticalMenu";
import SearchForm from "@/components/component/SearchForm";
import SearchIcon from "@/components/component/SearchIcon";
import SecondaryMenu from "@/components/component/SecondaryMenu";
import SocialIcons from "@/components/component/SocialIcons";
import TopbarMenu from "@/components/component/TopbarMenu";
import VerticalMenu from "@/components/component/VerticalMenu";
import React from "react";

export const componentMap: Record<string, () => Promise<React.JSX.Element>> = {
  Logo: Logo,
  LogoMob: LogoMob,
  MainMenu: MainMenu,
  MainMenuMob: MainMenuMob,
  SecondaryMenu: SecondaryMenu,
  TopbarMenu: TopbarMenu,
  AccountMenu: AccountMenu,
  VerticalMenu: VerticalMenu,
  Block1: Block1,
  Block2: Block2,
  Block3: Block3,
  Block4: Block4,
  HTML1: HTML1,
  HTML2: HTML2,
  HTML3: HTML3,
  HTML4: HTML4,
  HTML5: HTML5,
  Button1: Button1,
  Button2: Button2,
  Language: Language,
  SearchForm: SearchForm,
  SearchIcon: SearchIcon,
  Contact: Contact,
  SocialIcons: SocialIcons,
  Cart: Cart,
  Checkout: Checkout,
};

export const previewComponentMap: Record<string, () => React.JSX.Element> = {
  Logo: PreviewLogo,
  LogoMob: PreviewLogoMob,
  MainMenu: PreviewMainMenu,
  MainMenuMob: PreviewMainMenuMob,
  SecondaryMenu: PreviewSecondaryMenu,
  TopbarMenu: PreviewTopbarMenu,
  AccountMenu: PreviewAccountMenu,
  VerticalMenu: PreviewVerticalMenu,
  Block1: PreviewBlock1,
  Block2: PreviewBlock2,
  Block3: PreviewBlock3,
  Block4: PreviewBlock4,
  HTML1: PreviewHTML1,
  HTML2: PreviewHTML2,
  HTML3: PreviewHTML3,
  HTML4: PreviewHTML4,
  HTML5: PreviewHTML5,
  Button1: PreviewButton1,
  Button2: PreviewButton2,
  Language: PreviewLanguage,
  SearchForm: PreviewSearchForm,
  SearchIcon: PreviewSearchIcon,
  Contact: PreviewContact,
  SocialIcons: PreviewSocialIcons,
  Cart: PreviewCart,
  Checkout: PreviewCheckout,
};
