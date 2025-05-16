import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { staggerChildren, fadeInUpVariants } from "@/lib/utils";
import profileImage from "../assets/mayur-profile.jpg";

export default function Hero() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const rotatingTexts = ["Blockchain Developer", "IoT Explorer", "AI Enthusiast", "UX/UI Designer", "Blockchain Enthusiast"];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % rotatingTexts.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center pt-16 bg-background clip-path-hero"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-10 w-24 h-24 bg-primary/10 rounded-full filter blur-xl animate-pulse-slow"></div>
        <div className="absolute bottom-32 left-10 w-32 h-32 bg-accent/10 rounded-full filter blur-xl animate-pulse-slow"></div>
        <div className="absolute top-1/3 left-1/4 w-40 h-40 bg-primary/10 rounded-full filter blur-xl animate-pulse-slow"></div>
        
        <div className="hidden lg:block absolute -bottom-16 -right-16 w-64 h-64 bg-background border border-border rounded-full"></div>
        <div className="hidden lg:block absolute -top-20 -left-20 w-80 h-80 bg-background border border-border rounded-full"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="flex flex-col lg:flex-row items-center justify-between"
          variants={staggerChildren(0.2)}
          initial="hidden"
          animate="visible"
        >
          <motion.div 
            className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0"
            variants={staggerChildren(0.1)}
          >
            <motion.p variants={fadeInUpVariants()} className="text-accent mb-2 font-medium">
              Hello, I'm
            </motion.p>
            
            <motion.h1 
              variants={fadeInUpVariants(0.1)}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
            >
              <span className="text-foreground">Mayur</span>
              <span className="text-primary">P</span>
            </motion.h1>
            
            <motion.div 
              variants={fadeInUpVariants(0.2)}
              className="h-12 overflow-hidden mb-6"
            >
              <motion.div 
                className="text-xl md:text-2xl font-medium text-muted-foreground"
                key={currentTextIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                {rotatingTexts[currentTextIndex]}
              </motion.div>
            </motion.div>
            
            <motion.p 
              variants={fadeInUpVariants(0.3)}
              className="text-muted-foreground max-w-lg mx-auto lg:mx-0 mb-8"
            >
              I'm Mayur — a tech rebel blending Web3, AI, and IoT to build wild, future-ready solutions. From cooking up decentralized identity systems to training AI for traffic cops, I don't just build projects — I build experiences. With 10+ hackathons under my belt (and trophies to prove it), I'm all about pushing limits, breaking norms, and shipping bold ideas that actually work.
            </motion.p>
            
            <motion.div 
              variants={fadeInUpVariants(0.4)}
              className="flex flex-wrap justify-center lg:justify-start gap-4"
            >
              <a 
                href="#contact" 
                className="px-6 py-3 bg-primary hover:bg-primary/90 text-white rounded-full font-medium transition-all duration-300 glow-on-hover"
              >
                Get In Touch
              </a>
              <a 
                href="#projects" 
                className="px-6 py-3 border border-border hover:border-primary hover:text-primary rounded-full font-medium transition-colors duration-300"
              >
                View Projects
              </a>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="lg:w-1/2 flex justify-center lg:justify-end"
            variants={fadeInUpVariants(0.2)}
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 animate-float">
              <img 
                src={profileImage}
                alt="Mayur P" 
                className="w-full h-full object-cover rounded-full border-4 border-primary/30 shadow-xl shadow-primary/20" 
              />
              
              <motion.div 
                className="absolute -top-4 -right-4 bg-background p-3 rounded-full shadow-lg"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="text-2xl">👨‍💻</div>
              </motion.div>
              
              <motion.div 
                className="absolute -bottom-4 -left-4 bg-background p-3 rounded-full shadow-lg"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                <div className="text-2xl">🚀</div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <a href="#about" className="text-foreground opacity-70 hover:opacity-100 transition-opacity duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
