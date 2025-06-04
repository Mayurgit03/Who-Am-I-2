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
      whileHover={{ 
        scale: 1.02,
        boxShadow: "0 10px 30px rgba(0, 0, 0, 0.15)"
      }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative overflow-hidden h-48">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" 
        />
        
        <div className="absolute top-4 right-4 bg-gradient-to-r from-primary to-accent text-white text-xs px-3 py-1 rounded-full font-medium">
          {project.tag}
        </div>
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
          <div className="flex space-x-3">
            <a 
              href={project.demoUrl} 
              className="bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-colors duration-300 rounded-full w-9 h-9 flex items-center justify-center"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Live Demo"
            >
              <i className="fa-solid fa-eye"></i>
            </a>
            
            <a 
              href={project.codeUrl} 
              className="bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition-colors duration-300 rounded-full w-9 h-9 flex items-center justify-center"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Source Code"
            >
              <i className="fa-brands fa-github"></i>
            </a>
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 hover:text-primary transition-colors duration-300">{project.title}</h3>
        <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, index) => (
            <span 
              key={index} 
              className="text-xs bg-background border border-border px-2 py-1 rounded-full hover:border-primary/50 hover:bg-primary/5 transition-colors duration-300"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex justify-between pt-3 border-t border-border">
          <a 
            href={project.demoUrl} 
            className="text-primary hover:text-accent transition-colors duration-300 flex items-center text-sm"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>Live Demo</span>
            <i className="fa-solid fa-arrow-up-right-from-square ml-1"></i>
          </a>
          
          <a 
            href={project.codeUrl} 
            className="text-primary hover:text-accent transition-colors duration-300 flex items-center text-sm"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>Source Code</span>
            <i className="fa-brands fa-github ml-1"></i>
          </a>
        </div>
      </div>
    </motion.div>
  );
}
