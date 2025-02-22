import {getCurrentYear} from "@/utils";

export const LINKEDIN_URL = "https://www.linkedin.com/in/lucamatei";
export const GITHUB_URL = "https://github.com/luca-matei";
export const TELEGRAM_URL = "https://t.me/lucamatei";
export const BLUESKY_URL = "@lucamatei.bsky.social";
export const PHONE_NUMBER = "+40 771 344 046";
export const EMAIL = "hello@lucamatei.eu";
export const LOCATION = "Rotterdam, South Holland, Netherlands";
export const PROGRAMMING_YEARS = getCurrentYear() - 2011;

export interface NavigationItem {
  name: string;
  href: string;
}

export const NAVIGATION: NavigationItem[] = [
  { name: 'Home', href: '/' },
  { name: 'Experience', href: '/experience' },
//  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
]
