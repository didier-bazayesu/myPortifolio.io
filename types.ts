
export interface Skill {
  name: string;
  icon: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface Project {
  title: string;
  description: string;
  tech: string[];
  link: string;
  image: string;
}

export interface Education {
  degree: string;
  institution: string;
  location: string;
  period: string;
}
