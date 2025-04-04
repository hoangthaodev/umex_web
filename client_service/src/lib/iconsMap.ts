import {
  Fa500Px,
  FaDiscord,
  FaEnvelope,
  FaFacebookF,
  FaFlickr,
  FaInstagram,
  FaLinkedinIn,
  FaPhone,
  FaPinterestP,
  FaRss,
  FaTelegram,
  FaTiktok,
  FaTwitch,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";
import { IconType } from "react-icons/lib";

export const IconsMap: { id: number; name: string }[] = [
  { id: 1, name: "Facebook" },
  { id: 2, name: "Instagram" },
  { id: 3, name: "TikTok" },
  { id: 4, name: "X" },
  { id: 5, name: "E-mail" },
  { id: 6, name: "Phone" },
  { id: 7, name: "Pinterest" },
  { id: 8, name: "RSS" },
  { id: 9, name: "LinkedIn" },
  { id: 10, name: "YouTube" },
  { id: 11, name: "Flickr" },
  { id: 12, name: "500px" },
  { id: 13, name: "Telegram" },
  { id: 14, name: "Twitch" },
  { id: 15, name: "Discord" },
];

export const IconsIcoMap: Record<number, IconType> = {
  1: FaFacebookF,
  2: FaInstagram,
  3: FaTiktok,
  4: FaXTwitter,
  5: FaEnvelope,
  6: FaPhone,
  7: FaPinterestP,
  8: FaRss,
  9: FaLinkedinIn,
  10: FaYoutube,
  11: FaFlickr,
  12: Fa500Px,
  13: FaTelegram,
  14: FaTwitch,
  15: FaDiscord,
};

export const ShareIconsMap: { id: number; name: string }[] = [
  { id: 1, name: "Facebook" },
  { id: 4, name: "X" },
  { id: 5, name: "E-mail" },
  { id: 7, name: "Pinterest" },
  { id: 9, name: "LinkedIn" },
  { id: 13, name: "Telegram" },
];
