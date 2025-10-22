// Project types
export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  longDescription: string;
  technologies: string[];
  image: string;
  github?: string | null;
  live?: string | null;
  features: string[];
  responsibilities: string[];
}

// Blog post types
export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  image: string;
  featured: boolean;
}

// Contact form types
export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// Skill category types
export interface SkillCategory {
  category: string;
  icon: React.ReactNode;
  items: string[];
}

// Social link types
export interface SocialLink {
  name: string;
  icon: React.ReactNode;
  url: string;
  color: string;
}

// Contact info types
export interface ContactInfo {
  icon: React.ReactNode;
  title: string;
  value: string;
  link?: string | null;
}

// Navigation item types
export interface NavItem {
  name: string;
  id: string;
}

// Animation variants for Framer Motion
export interface AnimationVariants {
  initial: any;
  animate: any;
  transition?: any;
}
