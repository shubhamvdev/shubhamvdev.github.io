import {
  Bell,
  BriefcaseBusiness,
  Building2,
  ClipboardList,
  FlaskConical,
  HeartPulse,
  Home,
  LucideIcon,
  MessagesSquare,
  ReceiptText,
  UsersRound,
} from "lucide-react";

export const owner = {
  name: "Shubham Vishwakarma",
  role: "Frontend / Full Stack Developer",
  location: "Bangalore, Karnataka, India",
  email: "devshubhamvsv@gmail.com",
  phone: "+91 9301479635",
  github: "https://github.com/shubhamvdev",
  linkedin: "https://www.linkedin.com/in/devshubhamvsv",
  resume: "/assests/Shubham%20Vishwakarma%20-%20FE%203%20Years.pdf",
};

export const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const skills = [
  "JavaScript",
  "TypeScript",
  "React.js",
  "Next.js",
  "Redux",
  "HTML5",
  "CSS3",
  "Ant Design",
  "Material UI",
  "Chakra UI",
  "Bootstrap",
  "Firebase",
  "Socket.IO",
  "Razorpay",
  "AWS S3",
  "Git",
  "GitHub",
];

export const experience = [
  {
    role: "Software Developer",
    company: "Aarggv Tech",
    period: "Feb 2025 - Present",
    location: "Delhi",
    description:
      "Building scalable product interfaces, dashboard modules, and integration-heavy workflows for modern web applications.",
  },
  {
    role: "Junior Full Stack Developer",
    company: "NewTechFusion CyberTech Pvt Ltd",
    period: "Feb 2023 - Jan 2025",
    location: "Indore",
    description:
      "Delivered full stack features across React, Next.js, APIs, authentication, real-time updates, and operational SaaS products.",
  },
  {
    role: "Software Developer",
    company: "ZecData Technologies",
    period: "Jul 2022 - Dec 2022",
    location: "Indore",
    description:
      "Developed responsive frontends and reusable UI patterns while collaborating on production web application delivery.",
  },
];

export type Project = {
  title: string;
  icon: LucideIcon;
  description: string;
  tags: string[];
  url?: string;
};

export const projects: Project[] = [
  {
    title: "10xdeals",
    icon: ReceiptText,
    url: "https://biz.10xdeals.ai",
    description:
      "SaaS platform with CRM, HRM, inventory, invoice, sales, leads, and Razorpay subscription workflows.",
    tags: ["SaaS", "CRM", "Razorpay", "Dashboards"],
  },
  {
    title: "Medicity",
    icon: FlaskConical,
    url: "https://labs.medicitylab.co",
    description:
      "Real-time Laboratory Management System with sample collection flows, lab tracking, and operational visibility.",
    tags: ["Real-time", "LMS", "Tracking", "Healthcare"],
  },
  {
    title: "Labh Path Labs",
    icon: HeartPulse,
    description:
      "Diagnostic management platform with patient onboarding, test tracking, dashboards, and multi-branch management.",
    tags: ["Diagnostics", "Patients", "Branches", "Analytics"],
  },
  {
    title: "Bedater",
    icon: MessagesSquare,
    description:
      "Real-time debate platform with live chat, notifications, authentication, and managed debate sessions.",
    tags: ["Socket.IO", "Chat", "Auth", "Sessions"],
  },
  {
    title: "ReadyDoc",
    icon: ClipboardList,
    url: "https://www.intivahealth.com/news/ready-doc%E2%84%A2-revolutionizes-credential-verification-with-new-primary-source-verification-(psv)-feature",
    description:
      "Healthcare platform for structured task management, medical documentation, and workflow coordination.",
    tags: ["Healthcare", "Tasks", "Docs", "Workflow"],
  },
  {
    title: "Propertelligent",
    icon: Home,
    url: "https://propertelligent.com",
    description:
      "Tenant management platform with alerts, notifications, real-time updates, and property operations tooling.",
    tags: ["Tenants", "Alerts", "Real-time", "Property"],
  },
];

export const education = [
  {
    degree: "MCA",
    institution: "RGPV Bhopal",
    score: "8.2 CGPA",
    period: "2023-2025",
  },
  {
    degree: "BCA",
    institution: "Vikram University",
    score: "67.50%",
    period: "2020-2023",
  },
  {
    degree: "Higher Secondary School",
    institution: "MPBSE",
    score: "65%",
    period: "2019-2020",
  },
  {
    degree: "High School",
    institution: "MPBSE",
    score: "77%",
    period: "2017-2018",
  },
];

export const stats = [
  { label: "Years Experience", value: "3+" },
  { label: "Major Projects", value: "6" },
  { label: "Core Stack", value: "React + Next" },
];

export const focusAreas = [
  { label: "SaaS dashboards", icon: BriefcaseBusiness },
  { label: "API integrations", icon: Building2 },
  { label: "Real-time apps", icon: Bell },
  { label: "Product workflows", icon: UsersRound },
];
