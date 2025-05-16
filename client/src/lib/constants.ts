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
    title: "DeID – Decentralized Digital Identity System",
    description: "Built a secure blockchain-based system to verify and manage digital identities, reducing identity fraud with full user control and privacy.",
    image: "https://images.unsplash.com/photo-1566241440091-ec10de8db2e1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    technologies: ["Solidity", "Ethereum", "IPFS", "Metamask", "React.js", "Hardhat"],
    demoUrl: "#",
    codeUrl: "#",
    tag: "Blockchain"
  },
  {
    title: "Smart Package Tracking System",
    description: "Developed an IoT-powered real-time tracking solution for delivery bags using chip sensors to detect tampering and ensure last-mile transparency.",
    image: "https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    technologies: ["Arduino", "NodeMCU", "IoT Sensors", "Firebase", "Flutter", "C++"],
    demoUrl: "#",
    codeUrl: "#",
    tag: "IoT"
  },
  {
    title: "NFT-Based E-Voting System",
    description: "Created a tamper-proof voting system using blockchain and NFTs to ensure secure, transparent, and traceable elections.",
    image: "https://images.unsplash.com/photo-1607275107446-eb788823fa8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    technologies: ["Solidity", "Ethereum", "NFT.Storage", "Web3.js", "React.js", "Metamask"],
    demoUrl: "#",
    codeUrl: "#",
    tag: "NFT"
  },
  {
    title: "RoadGuard – AI Traffic Violation Detector",
    description: "Designed an AI system that scans live camera feeds to automatically detect and report traffic violations, promoting road safety.",
    image: "https://images.unsplash.com/photo-1617469165786-8007eda3caa7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    technologies: ["Python", "OpenCV", "YOLOv8", "TensorFlow", "Flask", "Raspberry Pi"],
    demoUrl: "#",
    codeUrl: "#",
    tag: "AI"
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
