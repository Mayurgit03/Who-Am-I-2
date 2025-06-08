import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { staggerChildren, fadeInUpVariants } from "@/lib/utils";

// Define skills
const programmingSkills = [
  { name: "Solidity", icon: "fa-solid fa-file-code", color: "text-gray-400" },
  { name: "Smart Contract", icon: "fa-solid fa-file-contract", color: "text-blue-400" },
  { name: "JavaScript", icon: "fa-brands fa-js", color: "text-yellow-400" },
  { name: "Golang", icon: "fa-solid fa-code", color: "text-cyan-400" },
  { name: "React.js", icon: "fa-brands fa-react", color: "text-blue-500" },
  { name: "HTML/CSS", icon: "fa-solid fa-code", color: "text-orange-500" },
  { name: "Python", icon: "fa-brands fa-python", color: "text-green-500" },
  { name: "Node.js", icon: "fa-brands fa-node-js", color: "text-green-600" },
  { name: "Framer Motion", icon: "fa-solid fa-layer-group", color: "text-purple-500" },
  { name: "Git & GitHub", icon: "fa-brands fa-git-alt", color: "text-red-500" },
  { name: "AI Automation", icon: "fa-solid fa-robot", color: "text-indigo-400" }
];

// Define tools
const tools = [
  { name: "Remix", icon: "fa-solid fa-code", color: "text-blue-500" },
  { name: "Truffle", icon: "fa-solid fa-box", color: "text-yellow-600" },
  { name: "Framer", icon: "fa-solid fa-pen-nib", color: "text-purple-500" },
  { name: "Docker", icon: "fa-brands fa-docker", color: "text-blue-400" },
  { name: "Replit", icon: "fa-solid fa-terminal", color: "text-gray-300" },
  { name: "API Integration", icon: "fa-solid fa-plug", color: "text-green-500" },
  { name: "Web3.js", icon: "fa-solid fa-link", color: "text-indigo-500" }
];

export default function Skills() {
  const { ref, inView } = useIntersectionObserver({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="skills" className="py-20 bg-background/50 relative" ref={ref}>
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-40 left-20 w-80 h-80 bg-accent/5 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center mb-12"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeInUpVariants()}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="text-primary">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto"></div>
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
            I build smart, secure blockchain apps and connect them with seamless wallet integrations. Plus, I blend AI and IoT to create tech that's both powerful and practical.
          </p>
        </motion.div>
        
        {/* Skills Section */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={staggerChildren(0.1)}
          className="mb-16"
        >
          <motion.h3
            variants={fadeInUpVariants()}
            className="text-2xl font-semibold mb-8 inline-flex items-center"
          >
            <i className="fas fa-code text-primary mr-3"></i>
            Programming Skills
          </motion.h3>
          
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4"
            variants={staggerChildren(0.05)}
          >
            {programmingSkills.map((skill, index) => (
              <motion.div
                key={index}
                className="bg-background/80 border border-border rounded-xl p-5 hover:border-primary/50 transition-colors duration-300 text-center card-hover-effect"
                variants={fadeInUpVariants(index * 0.05)}
              >
                <div className="flex flex-col items-center justify-center h-full">
                  <i className={`${skill.icon} text-3xl mb-3 ${skill.color}`}></i>
                  <span className="font-medium">{skill.name}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
        
        {/* Tools Section */}
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={staggerChildren(0.1)}
        >
          <motion.h3
            variants={fadeInUpVariants()}
            className="text-2xl font-semibold mb-8 inline-flex items-center"
          >
            <i className="fas fa-tools text-accent mr-3"></i>
            Tools & Frameworks
          </motion.h3>
          
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
            variants={staggerChildren(0.05)}
          >
            {tools.map((tool, index) => (
              <motion.div
                key={index}
                className="bg-background/80 border border-border rounded-xl p-5 hover:border-accent/50 transition-colors duration-300 flex items-center card-hover-effect"
                variants={fadeInUpVariants(index * 0.05)}
              >
                <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center mr-3">
                  <i className={`${tool.icon} ${tool.color}`}></i>
                </div>
                <span className="font-medium">{tool.name}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
        
        {/* Experience Indicator */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="inline-block relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-xl transform rotate-1"></div>
            <div className="relative bg-background/80 border border-border p-6 rounded-xl z-10">
              <h4 className="text-xl font-medium mb-3">Continuous Learning</h4>
              <p className="text-muted-foreground">
                I'm always exploring new blockchain protocols, AI frameworks, and IoT technologies to build innovative solutions that push boundaries.
              </p>
              <div className="flex justify-center mt-4">
                <a 
                  href="#contact" 
                  className="px-5 py-2 bg-primary/10 text-primary hover:bg-primary/20 rounded-full transition-colors duration-300"
                >
                  Let's Connect
                  <i className="fas fa-bolt ml-2"></i>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
