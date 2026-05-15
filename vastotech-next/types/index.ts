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
  slug: string;
  title: string;
  tag: string;
  description: string;
  longDescription: string;
  features: string[];
  image: string;
}

export interface CaseStudyItem {
  slug: string;
  category: string;
  title: string;
  client: string;
  industry: string;
  description: string;
  image: string;
  challenge: string;
  solution: string;
  results: string[];
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

export interface ContactDetails {
  phones: string[];
  emails: string[];
  offices: { label: string; address: string }[];
  hours: string;
}
