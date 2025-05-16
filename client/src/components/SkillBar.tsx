import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SkillBarProps {
  name: string;
  percentage: number;
  delay?: number;
  isVisible: boolean;
}

export default function SkillBar({ name, percentage, delay = 0, isVisible }: SkillBarProps) {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setWidth(percentage);
      }, delay * 1000);
      
      return () => clearTimeout(timer);
    }
    return () => {};
  }, [isVisible, percentage, delay]);

  return (
    <div>
      <div className="flex justify-between mb-1">
        <span className="font-medium">{name}</span>
        <span className="text-sm">{percentage}%</span>
      </div>
      <div className="skill-bar">
        <motion.div 
          className={cn("skill-progress")}
          initial={{ width: 0 }}
          animate={{ width: `${width}%` }}
          transition={{ duration: 1.5, ease: "easeOut", delay }}
        ></motion.div>
      </div>
    </div>
  );
}
