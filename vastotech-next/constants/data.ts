import {
  ShieldCheck,
  TrendingUp,
  Layers,
  Lightbulb,
  Briefcase,
  Users,
  Award,
  Cpu,
  Video,
  Building2,
  Radio,
} from 'lucide-react';
import type {
  NavLink,
  FeatureItem,
  SolutionItem,
  CaseStudyItem,
  StatItem,
  ClientLogo,
  FooterColumn,
} from '@/types';

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '#hero' },
  { label: 'Solutions', href: '#solutions' },
  { label: 'Industries', href: '#case-studies' },
  { label: 'About Us', href: '#about' },
  { label: 'Resources', href: '#resources' },
  { label: 'Contact Us', href: '#contact' },
];

export const FEATURES: FeatureItem[] = [
  {
    icon: ShieldCheck,
    title: 'Secure Solutions',
    description: 'Enterprise-grade security built into the core of every platform we deliver.',
  },
  {
    icon: TrendingUp,
    title: 'Operational Efficiency',
    description: 'Streamline operations and reduce costs with intelligent automation.',
  },
  {
    icon: Layers,
    title: 'Scalable Platforms',
    description: 'Flexible architectures that grow with your business — from pilot to global rollout.',
  },
  {
    icon: Lightbulb,
    title: 'Better Decisions',
    description: 'Real-time analytics and insights for confident, data-driven choices.',
  },
];

export const CLIENT_LOGOS: ClientLogo[] = [
  { name: 'Tata', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Tata_logo.svg/320px-Tata_logo.svg.png' },
  { name: 'Wipro', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Wipro_Primary_Logo_Color_RGB.svg/320px-Wipro_Primary_Logo_Color_RGB.svg.png' },
  { name: 'Adani', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Adani_2012_logo.png/320px-Adani_2012_logo.png' },
  { name: 'Godrej', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Godrej_Logo.svg/320px-Godrej_Logo.svg.png' },
  { name: 'Larsen & Toubro', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Larsen_%26_Toubro_Logo.svg/320px-Larsen_%26_Toubro_Logo.svg.png' },
  { name: 'DLF', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/DLF_logo.svg/320px-DLF_logo.svg.png' },
  { name: 'Cipla', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Cipla_Logo.svg/320px-Cipla_Logo.svg.png' },
];

export const SOLUTIONS: SolutionItem[] = [
  {
    id: 'video-analytics',
    title: 'Video Analytics Software',
    tag: 'AI Surveillance',
    description:
      'AI-powered video analytics for enhanced surveillance, real-time insights and smarter decisions across distributed sites.',
    image:
      'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=1200&q=80',
    href: '#solutions',
  },
  {
    id: 'bms-software',
    title: 'Advanced BMS Software',
    tag: 'Building Management',
    description:
      'Integrated Building Management Systems for HVAC, energy, lighting and security — automated and optimized end-to-end.',
    image:
      'https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=1200&q=80',
    href: '#solutions',
  },
  {
    id: 'iot-solutions',
    title: 'IoT Solutions',
    tag: 'Connected Devices',
    description:
      'End-to-end IoT platforms to connect, monitor and manage devices at scale — driving intelligence and operational efficiency.',
    image:
      'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80',
    href: '#solutions',
  },
];

export const ABOUT_BULLETS: string[] = [
  'Customer-centric approach',
  'Innovation-driven solutions',
  'Reliable support & service',
  'Experienced team of experts',
];

export const CASE_STUDIES: CaseStudyItem[] = [
  {
    id: 'smart-surveillance',
    category: 'Video Analytics',
    title: 'Smart Surveillance for a Large Infrastructure Project',
    description:
      'AI-based surveillance solution that improved site safety and reduced incidents by 40%.',
    image:
      'https://images.unsplash.com/photo-1573164574572-cb89e39749b4?auto=format&fit=crop&w=900&q=80',
    href: '#case-studies',
  },
  {
    id: 'energy-optimization',
    category: 'BMS Solution',
    title: 'Energy Optimization for a Commercial Building',
    description:
      'Integrated BMS that reduced energy consumption by 25% and improved operational efficiency.',
    image:
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=900&q=80',
    href: '#case-studies',
  },
  {
    id: 'asset-monitoring',
    category: 'IoT Solution',
    title: 'IoT-enabled Asset Monitoring System',
    description:
      'Real-time asset tracking and monitoring that improved visibility and reduced downtime.',
    image:
      'https://images.unsplash.com/photo-1581090700227-1e37b190418e?auto=format&fit=crop&w=900&q=80',
    href: '#case-studies',
  },
];

export const STATS: StatItem[] = [
  { icon: Briefcase, value: 150, suffix: '+', label: 'Projects Delivered' },
  { icon: Users, value: 100, suffix: '+', label: 'Happy Clients' },
  { icon: Award, value: 10, suffix: '+', label: 'Years of Experience' },
  { icon: Cpu, value: 50, suffix: '+', label: 'Experts' },
];

export const FOOTER_COLUMNS: FooterColumn[] = [
  {
    heading: 'Solutions',
    links: [
      { label: 'Video Analytics Software', href: '#solutions' },
      { label: 'Advanced BMS Software', href: '#solutions' },
      { label: 'IoT Solutions', href: '#solutions' },
      { label: 'All Solutions', href: '#solutions' },
    ],
  },
  {
    heading: 'Industries',
    links: [
      { label: 'Commercial Buildings', href: '#case-studies' },
      { label: 'Infrastructure', href: '#case-studies' },
      { label: 'Manufacturing', href: '#case-studies' },
      { label: 'Smart Cities', href: '#case-studies' },
      { label: 'More Industries', href: '#case-studies' },
    ],
  },
  {
    heading: 'Resources',
    links: [
      { label: 'Blog', href: '#' },
      { label: 'Case Studies', href: '#case-studies' },
      { label: 'Whitepapers', href: '#' },
      { label: 'Downloads', href: '#' },
      { label: 'FAQs', href: '#' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'About Us', href: '#about' },
      { label: 'Careers', href: '#' },
      { label: 'Partners', href: '#' },
      { label: 'Contact Us', href: '#contact' },
    ],
  },
];

export const SOLUTION_ICONS = { Video, Building2, Radio };
