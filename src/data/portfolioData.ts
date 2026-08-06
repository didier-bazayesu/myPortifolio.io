import { Project, SkillCategory, Experience, EducationItem } from "../types";
import imageUrl from '../asset/didier.jpg';

export const DEVELOPER_INFO = {
  name: "Didier Bazayesu",
  title: "Full-Stack Web Developer",
  tagline: "Creative and technically skilled individual combining strong full-stack development with a sharp eye for visual communication and UI design.",
  bio: "Experienced through academic projects and competitive hackathons, I enjoy turning complex data and requirements into clean, professional, and scalable web solutions. Seeking to build a strong portfolio and contribute innovative visual solutions in a professional environment.",
  coverImage: imageUrl,
  aboutImage: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?auto=format&fit=crop&q=80",
  backCoverImage: "https://images.unsplash.com/photo-1555099962-4199c345e5dd?auto=format&fit=crop&q=80",
  backCoverQuote: "Creative Problem-Solving. Clean Architecture.",
  location: "Tumba, Rulindo, Rwanda",
  email: "didierbazayesu@gmail.com",
  github: "https://github.com/didier-bazayesu",
  linkedin: "https://linkedin.com/in/didierbazayesu",
  resumeUrl:
    "https://drive.google.com/file/d/1wgB9sbFP_vKjVmBmcgnaszK6QRP4t5lT/view",
  missionStatement:
    "To build strong, reliable full-stack applications with beautiful, pixel-perfect user interfaces.",
  stats: [
    { label: "Phone", value: "+250 790 213 746" },
    { label: "Core Stack", value: "React / Node.js" },
    { label: "Focus", value: "Full-Stack UI/UX" },
    { label: "Availability", value: "Open to work" },
  ],
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: "Development Skills",
    description:
      "Building robust web applications using modern web technologies and frameworks.",
    skills: [
      { name: "React", level: 90, iconName: "Code", years: "Proficient" },
      { name: "Node.js", level: 85, iconName: "Server", years: "Proficient" },
      { name: "JavaScript", level: 90, iconName: "Zap", years: "Proficient" },
      { name: "HTML5 / CSS3", level: 95, iconName: "Layout", years: "Proficient" },
      { name: "Tailwind CSS", level: 90, iconName: "Palette", years: "Proficient" },
      { name: "Java", level: 75, iconName: "FileCode", years: "Experienced" },
      { name: "PHP", level: 70, iconName: "FileCode", years: "Experienced" },
    ],
  },
  {
    category: "Database & Tools",
    description:
      "Managing relational data and keeping development loops focused through version control.",
    skills: [
      { name: "PostgreSQL", level: 85, iconName: "Database", years: "Proficient" },
      { name: "MySQL", level: 80, iconName: "Table", years: "Proficient" },
      { name: "Git & GitHub", level: 90, iconName: "GitBranch", years: "Proficient" },
      { name: "VS Code", level: 95, iconName: "Terminal", years: "Proficient" },
    ],
  },
  {
    category: "Design Tools",
    description:
      "Creating UI wireframes, user flows, and pixel-perfect digital assets.",
    skills: [
      { name: "Figma", level: 90, iconName: "Figma", years: "Proficient" },
      { name: "Adobe Photoshop", level: 80, iconName: "Image", years: "Experienced" },
      { name: "Adobe Illustrator", level: 75, iconName: "PenTool", years: "Experienced" },
      { name: "Adobe InDesign", level: 70, iconName: "Book", years: "Experienced" },
      { name: "Canva", level: 95, iconName: "Palette", years: "Proficient" },
    ],
  },
  {
    category: "Soft Skills & Languages",
    description:
      "Effective collaboration, quick learning, and strong communication skills.",
    skills: [
      { name: "Problem-Solving", level: 95, iconName: "Cpu", years: "Strong" },
      { name: "Teamwork", level: 90, iconName: "Users", years: "Strong" },
      { name: "Time Management", level: 90, iconName: "Clock", years: "Strong" },
      { name: "English", level: 85, iconName: "Globe", years: "Fluent" },
      { name: "Kinyarwanda", level: 100, iconName: "MessageCircle", years: "Native" },
      { name: "French", level: 60, iconName: "MessageCircle", years: "Basic" },
    ],
  },
];

export const EXPERIENCES: Experience[] = [
  {
    id: "exp-1",
    role: "Full-Stack Web App Developer",
    company: "Hackathon Challenge 2025",
    location: "Rwanda",
    period: "2025",
    description: [
      "Designed complete UI wireframes and user flows in Figma before development.",
      "Built a full-stack web app based on the Tabiya taxonomy to manage complex occupational data.",
      "Implemented responsive front-end with Tailwind CSS and React, ensuring pixel-perfect design.",
      "Integrated Stripe API for payment workflows and managed relational data in PostgreSQL."
    ],
    technologies: [
      "React",
      "Node.js",
      "PostgreSQL",
      "Tailwind CSS",
      "Stripe API",
      "Figma"
    ],
    keyAchievement:
      "Delivered a full-stack web solution under competitive time pressure in the Rwanda Hackathon 2025.",
  },
  {
    id: "exp-2",
    role: "Backend & System Architect",
    company: "Management System — Record & Auth Platform",
    location: "Rwanda",
    period: "2024",
    description: [
      "Designed system architecture, user interface mockups, and navigation flows.",
      "Built a secure RESTful API for record management with user authentication workflows.",
      "Managed relational data with PostgreSQL and led team collaboration using Git/GitHub.",
      "Produced technical documentation and maintained code quality across the codebase."
    ],
    technologies: [
      "Node.js",
      "Express",
      "PostgreSQL",
      "React",
      "Git",
      "GitHub"
    ],
    keyAchievement:
      "Successfully delivered an end-to-end full-stack platform with secure authentication and robust documentation.",
  }
];

export const PROJECTS: Project[] = [
  {
    id: "project-1",
    title: "Occupational Data Platform",
    subtitle: "Hackathon Challenge 2025 Winner",
    description:
      "A full-stack web app built to manage complex occupational data based on the Tabiya taxonomy, featuring payment integrations and responsive design.",
    problemSolved:
      "The goal was to create an intuitive interface for complex occupational data management while ensuring secure payment workflows.",
    architecture:
      "React frontend styled with Tailwind CSS, communicating with a Node.js API and a PostgreSQL database. Integrated with Stripe for payments.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80",
    tags: ["React", "Node.js", "PostgreSQL", "Tailwind CSS", "Stripe API", "Figma"],
    githubUrl: "https://github.com/caleb-tuyisingize/Capston_project",
    liveUrl: "https://github.com/caleb-tuyisingize/Capston_project",
    featured: true,
    metrics: [
      { label: "Event", value: "Hackathon 2025" },
      { label: "Role", value: "Full-Stack / UI" },
    ],
  },
  {
    id: "project-2",
    title: "Secure Management System",
    subtitle: "Record & Authentication Platform",
    description:
      "A complete management system focused on secure record keeping, user authentication workflows, and detailed system architecture.",
    problemSolved:
      "Providing a secure, reliable RESTful API for record management with a focus on code quality and technical documentation.",
    architecture:
      "Node.js and Express backend handling authentication and API routing, backed by PostgreSQL for relational data storage.",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee57d5?auto=format&fit=crop&q=80",
    tags: ["Node.js", "Express", "PostgreSQL", "React", "Git", "REST API"],
    githubUrl: "https://github.com/dosite-cyiza/Mapping-jobs-and-skills",
    liveUrl: "https://github.com/dosite-cyiza/Mapping-jobs-and-skills",
    featured: true,
    metrics: [
      { label: "Focus", value: "Security & APIs" },
      { label: "Database", value: "PostgreSQL" },
    ],
  }
];

export const EDUCATION: EducationItem[] = [
  {
    id: "edu-1",
    degree: "Advanced Diploma in Computer Science",
    institution: "Tumba College",
    period: "2025 — 2027",
    location: "Kigali, Rwanda",
    honors: "Ongoing",
    achievements: [
      "Focusing on advanced software engineering principles and full-stack web development.",
      "Actively participating in hackathons and coding challenges."
    ],
  },
  {
    id: "edu-2",
    degree: "High School Diploma",
    institution: "Appega Gahengeri TVET School",
    period: "2020 — 2023",
    location: "Rwanda",
    achievements: [
      "Developed a strong foundation in technical skills and computer science fundamentals.",
    ],
  }
];
