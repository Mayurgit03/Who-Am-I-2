import { useEffect, useRef, useState, MutableRefObject } from "react";

interface UseIntersectionObserverProps {
  threshold?: number;
  root?: Element | null;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export function useIntersectionObserver({
  threshold = 0.1,
  root = null,
  rootMargin = "0px",
  triggerOnce = false,
}: UseIntersectionObserverProps = {}) {
  const [inView, setInView] = useState(false);
  const elementRef = useRef<HTMLElement | null>(null);

  const ref: MutableRefObject<any> = elementRef;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        const isIntersecting = entry.isIntersecting;
        
        if (isIntersecting || !triggerOnce) {
          setInView(isIntersecting);
        }
        
        if (elementRef.current && isIntersecting && triggerOnce) {
          observer.unobserve(elementRef.current);
        }
      },
      { threshold, root, rootMargin }
    );

    const currentElement = elementRef.current;
    
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [threshold, root, rootMargin, triggerOnce]);

  return { ref, inView };
}
