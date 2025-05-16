import { useState, useEffect } from "react";

export function useTextRotation(texts: string[], interval: number = 3000) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentText, setCurrentText] = useState(texts[0] || "");
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsAnimating(true);
      
      // After a short delay, change the text and reset animation
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
        setCurrentText(texts[(currentIndex + 1) % texts.length]);
        setIsAnimating(false);
      }, 300);
    }, interval);

    return () => clearInterval(timer);
  }, [texts, interval, currentIndex]);

  return { currentText, isAnimating };
}
