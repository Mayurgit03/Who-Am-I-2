import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { staggerChildren, fadeInUpVariants, scaleUpVariants } from "@/lib/utils";

const socialLinks = [
  { icon: "github", url: "#", label: "GitHub" },
  { icon: "linkedin", url: "#", label: "LinkedIn" },
  { icon: "twitter", url: "#", label: "Twitter" },
  { icon: "dribbble", url: "#", label: "Dribbble" }
];

const personalInfo = [
  { icon: "user", label: "Name", value: "Mayur P" },
  { icon: "envelope", label: "Email", value: "contact@mayurp.dev" },
  { icon: "map-marker-alt", label: "Location", value: "Mumbai, India" },
  { icon: "laptop-code", label: "Experience", value: "3+ Years" }
];

export default function About() {
  const { ref, inView } = useIntersectionObserver({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="about" className="py-20 relative" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeInUpVariants()}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="text-primary">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto"></div>
        </motion.div>
        
        <motion.div 
          className="flex flex-col lg:flex-row items-center gap-12"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={staggerChildren(0.2)}
        >
          <motion.div 
            className="lg:w-5/12"
            variants={scaleUpVariants()}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-2xl transform rotate-6 scale-105"></div>
              <img 
                src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=800" 
                alt="Mayur P" 
                className="relative z-10 rounded-2xl object-cover w-full h-auto shadow-xl" 
              />
              
              <motion.div 
                className="absolute -bottom-4 -right-4 bg-background px-4 py-2 rounded-lg shadow-lg z-20 border border-border"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                <p className="text-sm font-mono">
                  <span className="text-primary">const</span>{" "}
                  <span className="text-accent">passion</span> ={" "}
                  <span className="text-green-400">'coding'</span>;
                </p>
              </motion.div>
            </div>
          </motion.div>
          
          <motion.div 
            className="lg:w-7/12"
            variants={staggerChildren(0.1)}
          >
            <motion.h3 
              className="text-2xl font-semibold mb-4"
              variants={fadeInUpVariants()}
            >
              Frontend Developer & UI/UX Designer
            </motion.h3>
            
            <motion.p 
              className="text-muted-foreground mb-6 leading-relaxed"
              variants={fadeInUpVariants(0.1)}
            >
              I'm a passionate frontend developer with a keen eye for design and user experience. 
              With a strong foundation in modern web technologies, I strive to create beautiful, 
              responsive, and user-friendly applications that solve real-world problems.
            </motion.p>
            
            <motion.p 
              className="text-muted-foreground mb-8 leading-relaxed"
              variants={fadeInUpVariants(0.2)}
            >
              My approach combines technical expertise with creative problem-solving. I enjoy working on 
              challenging projects that push me to expand my knowledge and skills. When I'm not coding, 
              you'll find me exploring new technologies, contributing to open-source projects, or enhancing 
              my design skills.
            </motion.p>
            
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8"
              variants={staggerChildren(0.05)}
            >
              {personalInfo.map((item, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-center"
                  variants={fadeInUpVariants()}
                >
                  <i className={`fas fa-${item.icon} text-primary mr-3`}></i>
                  <div>
                    <p className="text-sm text-muted-foreground">{item.label}</p>
                    <p className="font-medium">{item.value}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
            
            <motion.div 
              className="flex space-x-4"
              variants={fadeInUpVariants(0.3)}
            >
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.url} 
                  aria-label={social.label}
                  className="w-10 h-10 flex items-center justify-center rounded-full border border-border hover:border-primary hover:bg-primary/10 transition-colors duration-300"
                >
                  <i className={`fab fa-${social.icon}`}></i>
                </a>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
