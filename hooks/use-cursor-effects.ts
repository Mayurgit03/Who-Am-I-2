import { useRef, useEffect } from "react";

export function useCursorEffects() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const onMouseMove = (e: MouseEvent) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    };

    const onMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (isInteractive(target)) {
        cursor.style.width = "40px";
        cursor.style.height = "40px";
        cursor.style.backgroundColor = "rgba(0, 220, 255, 0.3)";
      }
    };

    const onMouseLeave = () => {
      cursor.style.width = "20px";
      cursor.style.height = "20px";
      cursor.style.backgroundColor = "rgba(108, 99, 255, 0.5)";
    };

    const isInteractive = (element: HTMLElement) => {
      const interactiveElements = ["A", "BUTTON"];
      const hasInteractiveClass = element.classList.contains("card-hover-effect");
      return interactiveElements.includes(element.tagName) || hasInteractiveClass;
    };

    // Add global mouse move listener
    document.addEventListener("mousemove", onMouseMove);

    // Add listeners to interactive elements
    const interactiveElements = document.querySelectorAll("a, button, .card-hover-effect");
    interactiveElements.forEach(element => {
      element.addEventListener("mouseenter", onMouseEnter);
      element.addEventListener("mouseleave", onMouseLeave);
    });

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      interactiveElements.forEach(element => {
        element.removeEventListener("mouseenter", onMouseEnter);
        element.removeEventListener("mouseleave", onMouseLeave);
      });
    };
  }, []);

  return { cursorRef };
}
