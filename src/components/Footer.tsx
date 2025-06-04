import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div 
            className="mb-4 md:mb-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <a href="#home" className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              Mayur<span className="text-accent">P</span>
            </a>
            <p className="text-sm text-muted-foreground mt-2">
              Crafting beautiful web experiences
            </p>
          </motion.div>
          
          <motion.div 
            className="flex space-x-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300">
              <i className="fab fa-github"></i>
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300">
              <i className="fab fa-instagram"></i>
            </a>
          </motion.div>
        </div>
        
        <motion.div 
          className="mt-6 text-center text-muted-foreground text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p>&copy; {new Date().getFullYear()} Mayur P. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
}
