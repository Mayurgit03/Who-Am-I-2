import { SkillCategory, TechIcon, Project, ContactInfo } from "@/types";

export const skillsData: SkillCategory[] = [
  {
    name: "Frontend Development",
    icon: "code",
    iconColor: "text-primary",
    skills: [
      { name: "HTML/CSS", percentage: 95 },
      { name: "JavaScript", percentage: 90 },
      { name: "React", percentage: 88 },
      { name: "Tailwind CSS", percentage: 92 }
    ]
  },
  {
    name: "Design",
    icon: "paint-brush",
    iconColor: "text-accent",
    skills: [
      { name: "Figma", percentage: 85 },
      { name: "Adobe XD", percentage: 80 },
      { name: "UI/UX Design", percentage: 88 },
      { name: "Responsive Design", percentage: 92 }
    ]
  },
  {
    name: "Other Skills",
    icon: "layer-group",
    iconColor: "text-secondary",
    skills: [
      { name: "Git/GitHub", percentage: 85 },
      { name: "API Integration", percentage: 82 },
      { name: "Firebase", percentage: 78 },
      { name: "Testing", percentage: 75 }
    ]
  }
];

export const techIcons: TechIcon[] = [
  { name: "HTML5", icon: "fab fa-html5", color: "text-orange-500" },
  { name: "CSS3", icon: "fab fa-css3-alt", color: "text-blue-500" },
  { name: "JavaScript", icon: "fab fa-js", color: "text-yellow-400" },
  { name: "React", icon: "fab fa-react", color: "text-cyan-400" },
  { name: "Node.js", icon: "fab fa-node-js", color: "text-green-500" },
  { name: "Git", icon: "fab fa-git-alt", color: "text-red-500" }
];

export const projectsData: Project[] = [
  {
    title: "Modern E-commerce Store",
    description: "A fully responsive e-commerce platform built with React, Redux, and Stripe integration.",
    image: "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    technologies: ["React", "Redux", "Stripe", "Tailwind"],
    demoUrl: "#",
    codeUrl: "#",
    tag: "React"
  },
  {
    title: "Analytics Dashboard",
    description: "Interactive dashboard with real-time data visualization, built with Next.js and Chart.js.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    technologies: ["Next.js", "Chart.js", "Firebase", "SWR"],
    demoUrl: "#",
    codeUrl: "#",
    tag: "Next.js"
  },
  {
    title: "Fitness Tracker App",
    description: "Mobile fitness tracking application built with React Native and integrated with health APIs.",
    image: "https://images.unsplash.com/photo-1576678927484-cc907957088c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    technologies: ["React Native", "Redux", "Firebase", "Expo"],
    demoUrl: "#",
    codeUrl: "#",
    tag: "React Native"
  },
  {
    title: "Creative Agency Website",
    description: "A responsive website for a creative agency with smooth animations and parallax effects.",
    image: "https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    technologies: ["HTML5", "SCSS", "JavaScript", "GSAP"],
    demoUrl: "#",
    codeUrl: "#",
    tag: "HTML/CSS/JS"
  },
  {
    title: "Real-time Chat App",
    description: "Full-stack chat application with real-time messaging using Socket.io and MERN stack.",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    technologies: ["MongoDB", "Express", "React", "Node.js"],
    demoUrl: "#",
    codeUrl: "#",
    tag: "MERN Stack"
  },
  {
    title: "Weather Forecast App",
    description: "Interactive weather application with 7-day forecast, built with Vue.js and OpenWeather API.",
    image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    technologies: ["Vue.js", "Vuex", "Chart.js", "API"],
    demoUrl: "#",
    codeUrl: "#",
    tag: "Vue.js"
  }
];

export const contactInfo: ContactInfo[] = [
  {
    title: "Location",
    icon: "map-marker-alt",
    value: "Mumbai, Maharashtra, India",
    isLink: false
  },
  {
    title: "Email",
    icon: "envelope",
    value: "contact@mayurp.dev",
    isLink: true,
    linkHref: "mailto:contact@mayurp.dev"
  },
  {
    title: "Phone",
    icon: "phone-alt",
    value: "+91 9876 543 210",
    isLink: true,
    linkHref: "tel:+919876543210"
  }
];
