import {
  LucideIcon,
  ChartArea,
} from 'lucide-react';

export type LinkItem = {
  name: string;
  href: string;
  icon: LucideIcon;
};

const menuLinks: LinkItem[] = [
  {
    name: 'Dashboard',
    href: '/dashboard',
    icon: ChartArea,
  },
];

export const links = {
  menuLinks,
};

export type LinksType = keyof typeof links; // "boardLinks" | "boardIdLinks"