
import { SkillCategory, Project, Education } from './types';

export const COLORS = {
  primary: '#2563eb',
  secondary: '#1e293b',
  accent: '#3b82f6',
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Frontend Development",
    skills: ["HTML5", "CSS3", "JavaScript", "React", "Tailwind CSS"]
  },
  {
    title: "Backend Development",
    skills: ["PHP", "Node.js", "Express", "MySQL", "PostgreSQL"]
  },
  {
    title: "Tools & Others",
    skills: ["Git & GitHub", "VS Code", "Figma", "AI Coding Tools", "Java (Ongoing)"]
  }
];

export const PROJECTS: Project[] = [
  {
    title: "Capstone: Skills & Jobs Mapping",
    description: "Full-stack web application based on the Tabiya taxonomy that maps skills to jobs for educational and workforce planning. I implemented responsive React interfaces, secure APIs, and PostgreSQL data models to make complex information easy to explore.",
    tech: ["React", "Node.js", "PostgreSQL", "Tailwind CSS"],
    link: "https://github.com/caleb-tuyisingize/Capston_project",
    image: "https://picsum.photos/seed/capstone/800/600"
  },
  {
    title: "Secure Management System",
    description: "Secure records management system with role-based access, authentication, and audit-friendly data handling. Focused on clean API design, database structure, and reliable user workflows suitable for organisations that handle sensitive information.",
    tech: ["Express", "PostgreSQL", "React", "Git"],
    link: "https://github.com/dosite-cyiza/Mapping-jobs-and-skills",
    image: "https://picsum.photos/seed/management/800/600"
  }
];

export const EDUCATION: Education[] = [
  {
    degree: "Advanced Diploma in IT (Ongoing)",
    institution: "Tumba College",
    location: "Kigali, Rwanda",
    period: "2024 – 2027"
  },
  {
    degree: "High School Diploma",
    institution: "Appega Gahengeri TVET School",
    location: "Rwanda",
    period: "2020 – 2023"
  }
];

export const CONTACT_INFO = {
  location: "Kigali, Rwanda",
  phone: "+250 790 213 746",
  email: "didierbazayesu@gmail.com",
  github: "https://github.com/didier-bazayesu"
};
