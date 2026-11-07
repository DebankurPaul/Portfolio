export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  bullets: string[];
  badge?: string;
  liveUrl?: string;
  githubUrl: string;
  featured?: boolean;
  category: 'Full-Stack' | 'AI / ML' | 'Research';
  metrics?: string;
}

export interface Experience {
  id: string;
  role: string;
  organization: string;
  location?: string;
  period: string;
  funding?: string;
  supervisors?: string;
  description: string;
  bullets: string[];
  skills: string[];
  type: 'Research' | 'Internship';
}

export interface SkillCategory {
  category: string;
  description: string;
  skills: {
    name: string;
    level?: string;
    highlight?: boolean;
  }[];
}

export interface Achievement {
  id: string;
  title: string;
  issuer: string;
  year: string;
  description: string;
  badgeText: string;
  type: 'Certification' | 'Hackathon';
  link?: string;
}

export interface StatItem {
  value: string;
  label: string;
  sublabel: string;
}
