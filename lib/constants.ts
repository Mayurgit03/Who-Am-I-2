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

import walletImage from "../assets/projects/wallet-app.jpg";
import packageTrackingImage from "../assets/projects/package-tracking.jpg";
import nftVotingImage from "../assets/projects/nft-voting.jpg";
import deidImage from "../assets/projects/deid-identity.jpg";

export const projectsData: Project[] = [
  {
    title: "DeID – Decentralized Digital Identity System",
    description: "Built a secure blockchain-based system to verify and manage digital identities, reducing identity fraud with full user control and privacy.",
    image: deidImage,
    technologies: ["Solidity", "Ethereum", "IPFS", "Metamask", "React.js", "Hardhat"],
    demoUrl: "#",
    codeUrl: "https://github.com/Mayurgit03/DeID",
    tag: "Blockchain"
  },
  {
    title: "Smart Package Tracking System",
    description: "Developed an IoT-powered real-time tracking solution for delivery bags using chip sensors to detect tampering and ensure last-mile transparency.",
    image: packageTrackingImage,
    technologies: ["Arduino", "NodeMCU", "IoT Sensors", "Firebase", "Flutter", "C++"],
    demoUrl: "#",
    codeUrl: "#",
    tag: "IoT"
  },
  {
    title: "NFT-Based E-Voting System",
    description: "Created a tamper-proof voting system using blockchain and NFTs to ensure secure, transparent, and traceable elections.",
    image: nftVotingImage,
    technologies: ["Solidity", "Ethereum", "NFT.Storage", "Web3.js", "React.js", "Metamask"],
    demoUrl: "#",
    codeUrl: "#",
    tag: "NFT"
  },
  {
    title: "DApp with Wallet Integration",
    description: "Developed a decentralized application that connects seamlessly with crypto wallets like MetaMask, enabling users to interact with Ethereum smart contracts securely and in real-time.",
    image: walletImage,
    technologies: ["React.js", "Solidity", "Ethers.js", "Hardhat", "MetaMask", "Tailwind CSS", "IPFS", "Alchemy"],
    demoUrl: "#",
    codeUrl: "https://github.com/Mayurgit03/FUTURE_BC_02",
    tag: "DApp"
  }
];

export const contactInfo: ContactInfo[] = [
  {
    title: "Location",
    icon: "map-marker-alt",
    value: "Coimbatore, Tamil Nadu",
    isLink: false
  },
  {
    title: "Email",
    icon: "envelope",
    value: "mayurkarthick2006@gmail.com",
    isLink: true,
    linkHref: "mailto:mayurkarthick2006@gmail.com"
  },
  {
    title: "Twitter",
    icon: "twitter",
    value: "@0xMayur_p",
    isLink: true,
    linkHref: "http://x.com/0xMayur_p"
  },
  {
    title: "GitHub",
    icon: "github",
    value: "Mayurgit03",
    isLink: true,
    linkHref: "https://github.com/Mayurgit03"
  }
];
