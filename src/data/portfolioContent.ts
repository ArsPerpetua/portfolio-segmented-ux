import {
  BrainCircuit,
  DatabaseZap,
  PanelsTopLeft,
  Rocket,
  ServerCog,
  Workflow,
  FileText,
  TicketCheck,
} from "lucide-react";
import type {
  PortfolioSegment,
  ProjectItem,
  SegmentOption,
  TechGroup,
} from "../types/portfolio";

export const segmentOptions: SegmentOption[] = [
  {
    id: "enterprise",
    label: "For Enterprise",
    shortLabel: "Enterprise",
    headline: "Enterprise-grade systems for reliable digital operations.",
    description:
      "Designed for organizations that need scalable architecture, workflow automation, internal systems, and measurable operational impact.",
  },
  {
    id: "startup",
    label: "For Startups",
    shortLabel: "Startups",
    headline: "Fast-moving product engineering for ambitious teams.",
    description:
      "Built for founders and product teams that need MVP development, rapid iteration, AI integration, and scalable foundations from day one.",
  },
  {
    id: "freelance",
    label: "For Freelance",
    shortLabel: "Freelance",
    headline: "Modern web experiences for brands, teams, and operators.",
    description:
      "Focused on clean interfaces, custom web applications, landing pages, automation tools, and polished delivery for client-facing outcomes.",
  },
];

export const personalProfile = {
  shortName: "Dicksa Ananda",
  fullName: "Dicksa Ananda Cristian Tue",
  headline: "Full-Stack Engineer & AI Specialist.",
  academicProof:
    "Top 1 Computer Science Graduate (S.Kom), Cumlaude, GPA: 3.94/4.00",
  subtitle:
    "Translating academic research and advanced AI into scalable enterprise software and dynamic web applications.",
};

export const techStackBySegment: Record<PortfolioSegment, TechGroup[]> = {
  enterprise: [
    {
      id: "backend",
      title: "Scalable Backend",
      description:
        "Designing reliable APIs, database models, and workflow systems for enterprise-grade operations.",
      icon: ServerCog,
      items: ["Golang", "Django", "Laravel", "PostgreSQL", "Prisma"],
    },
    {
      id: "workflow",
      title: "Workflow Automation",
      description:
        "Transforming manual processes into structured, measurable, and trackable digital systems.",
      icon: Workflow,
      items: ["Approval Flow", "Reporting", "Role Access", "Notifications"],
    },
    {
      id: "ai",
      title: "Intelligent Systems",
      description:
        "Applying AI where it creates practical value: prioritization, classification, and decision support.",
      icon: BrainCircuit,
      items: ["Python", "Machine Learning", "NLP", "Computer Vision"],
    },
  ],

  startup: [
    {
      id: "frontend",
      title: "Modern Frontend",
      description:
        "Shipping clean, responsive, and conversion-aware interfaces for fast-moving product teams.",
      icon: PanelsTopLeft,
      items: ["React", "TypeScript", "Vite", "Tailwind"],
    },
    {
      id: "product",
      title: "Product Velocity",
      description:
        "Building MVPs with scalable foundations, practical architecture, and fast iteration cycles.",
      icon: Rocket,
      items: ["MVP", "SaaS", "Design System", "Rapid Iteration"],
    },
    {
      id: "backend",
      title: "Scalable Backend",
      description:
        "Creating APIs, data models, and integrations that can grow as the product gains traction.",
      icon: DatabaseZap,
      items: ["Golang", "PostgreSQL", "Prisma", "REST API"],
    },
  ],

  freelance: [
    {
      id: "frontend",
      title: "Modern Web Interfaces",
      description:
        "Crafting polished landing pages, portfolio sites, dashboards, and client-facing web apps.",
      icon: PanelsTopLeft,
      items: ["React", "TypeScript", "Tailwind", "Responsive UI"],
    },
    {
      id: "automation",
      title: "Custom Automation",
      description:
        "Developing internal tools that reduce repetitive work and help teams operate faster.",
      icon: Workflow,
      items: ["Admin Panel", "Forms", "Dashboards", "Integrations"],
    },
    {
      id: "ai",
      title: "AI-Enhanced Features",
      description:
        "Adding smart features such as classification, recommendation, and workflow prioritization.",
      icon: BrainCircuit,
      items: ["Python", "Computer Vision", "ML Models", "Decision Support"],
    },
  ],
};

export const projectsBySegment: Record<PortfolioSegment, ProjectItem[]> = {
  enterprise: [
    {
      id: "ticketing",
      title: "IT Ticketing System - Kemenkum NTB",
      tag: "Gov-Tech & Enterprise",
      description:
        "A structured IT issue reporting and bureaucratic workflow automation system integrating regional services like Peresean. Built to transform manual processes into measurable digital operations.",
      highlights: ["Workflow Automation", "Regional Reporting", "Peresean Integration"],
      icon: TicketCheck,
    },
    {
      id: "docuflow",
      title: "DocuFlow",
      tag: "B2B SaaS",
      description:
        "A document workflow and smart prioritization system focused on modular architecture, structured approval flows, and real-time notification experience.",
      highlights: ["Document Workflow", "Smart Prioritization", "Real-Time Notification"],
      icon: FileText,
    },
    {
      id: "ecovision",
      title: "EcoVision",
      tag: "AI/Computer Vision",
      description:
        "An AI-powered decision support system for real-time waste classification using machine learning and computer vision models.",
      highlights: ["Machine Learning", "Computer Vision", "Decision Support"],
      icon: BrainCircuit,
    },
  ],

  startup: [
    {
      id: "docuflow",
      title: "DocuFlow",
      tag: "B2B SaaS",
      description:
        "A SaaS-style document workflow product built with Vite, React, TypeScript, and Tailwind, emphasizing modular architecture and product-ready collaboration flows.",
      highlights: ["Vite", "React", "TypeScript", "SaaS Architecture"],
      icon: FileText,
    },
    {
      id: "ecovision",
      title: "EcoVision",
      tag: "AI/Computer Vision",
      description:
        "A real-time AI classification application that demonstrates how machine learning can become a usable product feature.",
      highlights: ["AI Feature", "Real-Time Classification", "ML Product"],
      icon: BrainCircuit,
    },
    {
      id: "ticketing",
      title: "IT Ticketing System - Kemenkum NTB",
      tag: "Gov-Tech Workflow",
      description:
        "A workflow tracking system that shows how complex operational processes can be simplified into a practical internal product.",
      highlights: ["Internal Product", "Workflow Tracking", "Reporting"],
      icon: TicketCheck,
    },
  ],

  freelance: [
    {
      id: "ecovision",
      title: "EcoVision",
      tag: "AI/Computer Vision",
      description:
        "A polished AI-powered application experience for real-time waste classification and decision support.",
      highlights: ["AI App", "Computer Vision", "Interactive UX"],
      icon: BrainCircuit,
    },
    {
      id: "docuflow",
      title: "DocuFlow",
      tag: "B2B SaaS Interface",
      description:
        "A clean workflow interface designed for document handling, prioritization, and team productivity.",
      highlights: ["Dashboard UX", "Workflow UI", "React"],
      icon: FileText,
    },
    {
      id: "ticketing",
      title: "IT Ticketing System - Kemenkum NTB",
      tag: "Custom Internal Tool",
      description:
        "A custom web application for issue reporting, workflow visibility, and regional service integration.",
      highlights: ["Custom App", "Admin Workflow", "Operational Tool"],
      icon: TicketCheck,
    },
  ],
};