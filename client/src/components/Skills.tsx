import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import SkillBar from "@/components/SkillBar";
import { staggerChildren, fadeInUpVariants } from "@/lib/utils";
import { skillsData, techIcons } from "@/lib/constants";

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
            I've worked with a variety of technologies in the web development world, from frontend to design tools.
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={staggerChildren(0.2)}
        >
          {skillsData.map((category, index) => (
            <motion.div 
              key={index}
              className="bg-background/80 p-6 rounded-xl border border-border hover:border-primary/50 transition-colors duration-300 card-hover-effect"
              variants={fadeInUpVariants()}
            >
              <div className="flex items-center mb-6">
                <span className={`text-4xl mr-4 ${category.iconColor}`}>
                  <i className={`fas fa-${category.icon}`}></i>
                </span>
                <h3 className="text-xl font-semibold">{category.name}</h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <SkillBar 
                    key={skillIndex}
                    name={skill.name}
                    percentage={skill.percentage}
                    delay={skillIndex * 0.1}
                    isVisible={inView}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="mt-16 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={staggerChildren(0.05)}
        >
          {techIcons.map((tech, index) => (
            <motion.div 
              key={index}
              className="flex flex-col items-center"
              variants={fadeInUpVariants()}
            >
              <i className={`${tech.icon} text-4xl mb-3 ${tech.color}`}></i>
              <span className="text-sm">{tech.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
