export type BookState = 'closed' | 'opening' | 'open' | 'closing' | 'back';

export type SectionType = 'cover' | 'contents' | 'about' | 'skills' | 'experience' | 'projects' | 'education' | 'contact' | 'backCover';

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  problemSolved: string;
  architecture: string;
  image: string;
  tags: string[];
  githubUrl: string;
  liveUrl: string;
  featured?: boolean;
  metrics?: { label: string; value: string }[];
}

export interface SkillCategory {
  category: string;
  description: string;
  skills: {
    name: string;
    level: number; // 0 to 100
    iconName: string;
    years: string;
  }[];
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  technologies: string[];
  keyAchievement: string;
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
  location: string;
  honors?: string;
  achievements: string[];
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}
