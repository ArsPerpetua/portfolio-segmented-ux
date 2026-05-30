import type { LucideIcon } from "lucide-react";

export type PortfolioSegment = "enterprise" | "startup" | "freelance";

export type SegmentOption = {
  id: PortfolioSegment;
  label: string;
  shortLabel: string;
  headline: string;
  description: string;
};

export type TechGroup = {
  id: string;
  title: string;
  description: string;
  items: string[];
  icon: LucideIcon;
};

export type ProjectItem = {
  id: string;
  title: string;
  tag: string;
  description: string;
  highlights: string[];
  icon: LucideIcon;
};