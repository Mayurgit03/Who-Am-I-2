export interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  demoUrl: string;
  codeUrl: string;
  tag: string;
}

export interface Skill {
  name: string;
  percentage: number;
}

export interface SkillCategory {
  name: string;
  icon: string;
  iconColor: string;
  skills: Skill[];
}

export interface TechIcon {
  name: string;
  icon: string;
  color: string;
}

export interface ContactInfo {
  title: string;
  icon: string;
  value: string;
  isLink: boolean;
  linkHref?: string;
}
