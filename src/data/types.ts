export interface SectionInfo {
  id: string;
  label: string;
}

export interface Milestone {
  id: string;
  company: string;
  period: string;
  location: string;
  logo?: string;
  industry: string;
  role: string;
  copy: string;
  projects: { name: string; description: string }[];
}

export interface SkillGroup {
  label: string;
  skills: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  link?: string;
  image?: string;
}

export interface Social {
  label: string;
  href: string;
  icon: "mail" | "linkedin";
}
