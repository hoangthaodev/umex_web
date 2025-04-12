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
import SearchForm from "@/components/component/SearchForm";
import SearchIcon from "@/components/component/SearchIcon";
import SecondaryMenu from "@/components/component/SecondaryMenu";
import SocialIcons from "@/components/component/SocialIcons";
import TopbarMenu from "@/components/component/TopbarMenu";
import VerticalMenu from "@/components/component/VerticalMenu";
import React from "react";

export const componentMap: Record<string, () => React.JSX.Element> = {
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
