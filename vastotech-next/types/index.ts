import type { LucideIcon } from 'lucide-react';

export interface NavLink {
  label: string;
  href: string;
}

export interface FeatureItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface SolutionItem {
  id: string;
  title: string;
  tag: string;
  description: string;
  image: string;
  href: string;
}

export interface CaseStudyItem {
  id: string;
  category: string;
  title: string;
  description: string;
  image: string;
  href: string;
}

export interface StatItem {
  icon: LucideIcon;
  value: number;
  suffix: string;
  label: string;
}

export interface ClientLogo {
  name: string;
  src: string;
}

export interface FooterColumn {
  heading: string;
  links: NavLink[];
}
