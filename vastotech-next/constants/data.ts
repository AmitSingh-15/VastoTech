import {
  ShieldCheck,
  TrendingUp,
  Layers,
  Lightbulb,
  Briefcase,
  Users,
  Award,
  Cpu,
} from 'lucide-react';
import type {
  NavLink,
  FeatureItem,
  SolutionItem,
  CaseStudyItem,
  StatItem,
  ClientLogo,
  FooterColumn,
  ContactDetails,
} from '@/types';

export const SITE = {
  name: 'Vastotech',
  legalName: 'Vastotech Solutions LLP',
  domain: 'vastotech.in',
  tagline: 'Intelligent Solutions. Connected Future.',
};

export const CONTACT: ContactDetails = {
  phones: ['(+91) 9699675864', '(+91) 9930675809'],
  emails: ['info@vastotech.in'],
  offices: [
    {
      label: 'Head Office',
      address:
        'The Atrium, Office No. B -105a, 1 Floor,  Shirke Road, Mundhwa, Pune, Maharashtra 411036, India',
    },
    {
      label: 'Mumbai Branch',
      address: 'Pinnacolo, Mira Bhayandar Rd, Mumbai, Maharashtra 401107',
    },
  ],
  hours: 'Mon – Fri, 9:00 AM – 5:00 PM',
};

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'Solutions', href: '/#solutions', hasDropdown: true },
  { label: 'Industries', href: '/case-studies', hasDropdown: true },
  { label: 'About Us', href: '/#about' },
  { label: 'Resources', href: '/case-studies', hasDropdown: true },
  { label: 'Contact Us', href: '/#contact' },
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
  { name: 'ACPL', src: '/images/clients/acpl.png' },
  { name: 'Apex Juris', src: '/images/clients/apex1.jpeg' },
  { name: 'ACG', src: '/images/clients/acg.png' },
  { name: 'Cipla', src: '/images/clients/cipla.jpg' },
  { name: 'AMC', src: '/images/clients/amc.jpg' },
  { name: 'Tecn', src: '/images/clients/tecn.png' },
  { name: 'Vrindavan', src: '/images/clients/vrindawan.png' },
  { name: 'MM', src: '/images/clients/mm.jpg' },
  { name: 'Brand', src: '/images/clients/b1.png' },
  { name: 'Brand 2', src: '/images/clients/b2.png' },
  { name: 'Brand 3', src: '/images/clients/b3.png' },
  { name: 'Brand 4', src: '/images/clients/b4.png' },
  { name: 'Brand 5', src: '/images/clients/b5.png' },
  { name: 'Brand 6', src: '/images/clients/b6.png' },
  { name: 'Brand 7', src: '/images/clients/b7.png' },
  { name: 'Brand 8', src: '/images/clients/b8.jpeg' },
  { name: 'Brand 9', src: '/images/clients/b9.png' },
  { name: 'Brand 10', src: '/images/clients/b10.jpg' },
];

export const SOLUTIONS: SolutionItem[] = [
  {
    slug: 'video-analytics-software',
    title: 'Video Analytics Software',
    tag: 'AI Surveillance',
    description:
      'AI-powered video analytics for enhanced surveillance, real-time insights and smarter decisions across distributed sites.',
    longDescription:
      'Our AI-powered Video Analytics platform turns existing CCTV infrastructure into an intelligence layer. From people counting and behavior analysis to ANPR and PPE detection, we deliver real-time alerts and actionable dashboards that improve safety, efficiency and compliance.',
    features: [
      'Real-time object & behavior detection',
      'People counting and zone analytics',
      'ANPR (Automatic Number Plate Recognition)',
      'PPE & safety compliance detection',
      'Deploy on-prem, cloud or hybrid',
      'Integration with existing DVR/NVR systems',
    ],
    image: '/assets/solution-video.png',
  },
  {
    slug: 'advanced-bms-software',
    title: 'Advanced BMS Software',
    tag: 'Building Management',
    description:
      'Integrated Building Management Systems for HVAC, energy, lighting and security — automated and optimized end-to-end.',
    longDescription:
      'A unified Building Management System that brings HVAC, lighting, energy, access control and security into a single operations cockpit. Reduce energy consumption, improve occupant comfort, and automate routine workflows across single buildings or distributed portfolios.',
    features: [
      'HVAC, lighting & energy automation',
      'Centralized multi-site dashboard',
      'Predictive maintenance alerts',
      'Energy consumption analytics',
      'Access control & visitor management',
      'Open-protocol integration (BACnet, Modbus)',
    ],
    image: '/assets/solution-bms.png',
  },
  {
    slug: 'iot-solutions',
    title: 'IoT Solutions',
    tag: 'Connected Devices',
    description:
      'End-to-end IoT platforms to connect, monitor and manage devices at scale — driving intelligence and operational efficiency.',
    longDescription:
      'From sensors and gateways to the cloud platform and analytics layer, we build production-grade IoT systems for asset tracking, environmental monitoring, industrial telemetry and smart-city deployments. Secure by design, scalable by default.',
    features: [
      'Edge-to-cloud device architecture',
      'Real-time telemetry and alerting',
      'Asset tracking and geofencing',
      'Environmental & equipment monitoring',
      'Custom dashboards and reports',
      'Secure provisioning and OTA updates',
    ],
    image: '/assets/solution-iot.png',
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
    slug: 'smart-surveillance-infrastructure',
    category: 'Video Analytics',
    title: 'Smart Surveillance for a Large Infrastructure Project',
    client: 'Infrastructure Conglomerate',
    industry: 'Construction & Infrastructure',
    description:
      'AI-based surveillance solution that improved site safety and reduced incidents by 40%.',
    image: '/assets/case-study-surveillance.png',
    challenge:
      'A large infrastructure client operated dozens of remote construction sites with limited safety oversight. Manual review of CCTV footage was reactive, slow, and missed near-miss events that could have prevented serious incidents.',
    solution:
      'We deployed our Video Analytics platform on existing camera infrastructure across all sites, with on-edge models for PPE detection, restricted-zone breach, and unsafe-behavior alerts. A central command dashboard gave the EHS team real-time visibility and audit-ready incident logs.',
    results: [
      '40% reduction in recordable safety incidents',
      '70% faster incident response time',
      '24×7 automated safety compliance monitoring',
      'Full audit trail for regulatory reporting',
    ],
  },
  {
    slug: 'energy-optimization-commercial-building',
    category: 'BMS Solution',
    title: 'Energy Optimization for a Commercial Building',
    client: 'Premium Commercial Real Estate',
    industry: 'Commercial Real Estate',
    description:
      'Integrated BMS that reduced energy consumption by 25% and improved operational efficiency.',
    image: '/assets/case-study-building.png',
    challenge:
      'A premium office tower struggled with rising energy costs and tenant comfort complaints. HVAC, lighting and access control ran on disconnected systems with no central visibility or automation.',
    solution:
      'We unified HVAC, lighting, and energy metering under our BMS platform with occupancy-driven schedules, predictive maintenance, and a single operations dashboard. Tenant comfort dashboards and automated fault detection rounded out the rollout.',
    results: [
      '25% reduction in total energy consumption',
      '30% drop in tenant comfort complaints',
      'Predictive maintenance reduced downtime by 60%',
      'Single pane of glass for facility operations',
    ],
  },
  {
    slug: 'iot-asset-monitoring',
    category: 'IoT Solution',
    title: 'IoT-enabled Asset Monitoring System',
    client: 'Industrial Manufacturing',
    industry: 'Manufacturing',
    description:
      'Real-time asset tracking and monitoring that improved visibility and reduced downtime.',
    image: '/assets/case-study-iot.png',
    challenge:
      'A manufacturing firm could not reliably track high-value tooling and mobile assets across its multi-acre plant. Lost equipment, missed maintenance windows, and unplanned downtime were eroding margins.',
    solution:
      'We deployed BLE + LoRaWAN tags on critical assets and built a custom IoT platform with real-time location, condition monitoring, and predictive maintenance alerts. Integration with their existing ERP closed the loop on maintenance workflows.',
    results: [
      '95% asset visibility across the plant',
      '35% reduction in unplanned downtime',
      'Maintenance backlog cleared within 90 days',
      'ROI achieved within 11 months',
    ],
  },
];

export const STATS: StatItem[] = [
  { icon: Briefcase, iconSrc: '/assets/stat-projects.png', value: 150, suffix: '+', label: 'Projects Delivered' },
  { icon: Users, iconSrc: '/assets/stat-clients.png', value: 100, suffix: '+', label: 'Happy Clients' },
  { icon: Award, iconSrc: '/assets/stat-experience.png', value: 10, suffix: '+', label: 'Years of Experience' },
  { icon: Cpu, iconSrc: '/assets/stat-experts.png', value: 50, suffix: '+', label: 'Experts' },
];

export const FOOTER_COLUMNS: FooterColumn[] = [
  {
    heading: 'Solutions',
    links: [
      { label: 'Video Analytics Software', href: '/solutions/video-analytics-software' },
      { label: 'Advanced BMS Software', href: '/solutions/advanced-bms-software' },
      { label: 'IoT Solutions', href: '/solutions/iot-solutions' },
      { label: 'All Solutions', href: '/#solutions' },
    ],
  },
  {
    heading: 'Industries',
    links: [
      { label: 'Commercial Buildings', href: '/case-studies' },
      { label: 'Infrastructure', href: '/case-studies' },
      { label: 'Manufacturing', href: '/case-studies' },
      { label: 'Smart Cities', href: '/case-studies' },
      { label: 'All Industries', href: '/case-studies' },
    ],
  },
  {
    heading: 'Resources',
    links: [
      { label: 'Case Studies', href: '/case-studies' },
      { label: 'About Us', href: '/#about' },
      { label: 'Contact', href: '/#contact' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'About Us', href: '/#about' },
      { label: 'Solutions', href: '/#solutions' },
      { label: 'Case Studies', href: '/case-studies' },
      { label: 'Contact Us', href: '/#contact' },
    ],
  },
];
