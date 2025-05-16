import { motion, Variants } from "framer-motion";
import { type Project } from "@/types";

interface ProjectCardProps {
  project: Project;
  variants?: Variants;
}

export default function ProjectCard({ project, variants }: ProjectCardProps) {
  return (
    <motion.div 
      className="bg-background/80 rounded-xl overflow-hidden border border-border card-hover-effect"
      variants={variants}
    >
      <div className="relative overflow-hidden h-48">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" 
        />
        
        <div className="absolute top-4 right-4 bg-primary text-white text-xs px-2 py-1 rounded-full">
          {project.tag}
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
        <p className="text-muted-foreground text-sm mb-4">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <span key={index} className="text-xs bg-background border border-border px-2 py-1 rounded-full">
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex justify-between">
          <a 
            href={project.demoUrl} 
            className="text-primary hover:text-accent transition-colors duration-300 flex items-center text-sm"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>Live Demo</span>
            <i className="fas fa-external-link-alt ml-1"></i>
          </a>
          
          <a 
            href={project.codeUrl} 
            className="text-primary hover:text-accent transition-colors duration-300 flex items-center text-sm"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>Source Code</span>
            <i className="fab fa-github ml-1"></i>
          </a>
        </div>
      </div>
    </motion.div>
  );
}
