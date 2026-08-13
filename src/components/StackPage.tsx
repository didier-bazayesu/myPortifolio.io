import { useRef, type ReactNode } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

interface StackPageProps {
  children: ReactNode;
  index: number;
  id: string;
}

/**
 * fixed full-screen panel stack with scroll-driven, spring-eased reveal
 * + 3D depth/dimming bonus as the layer gets covered
 */
export default function StackPage({ children, index, id }: StackPageProps) {
  const spacerRef = useRef<HTMLDivElement>(null);

  // 1. ENTRY ANIMATION (This chapter sliding up)
  const { scrollYProgress: entryProgress } = useScroll({
    target: spacerRef,
    offset: ["start end", "start start"],
  });

  const smoothEntry = useSpring(entryProgress, {
    stiffness: 80,
    damping: 20,
    mass: 1,
    restDelta: 0.001
  });

  const y = useTransform(smoothEntry, [0, 1], ["100%", "0%"]);
  const yValue = index === 0 ? "0%" : y;
  
  // 2. EXIT ANIMATION (The NEXT chapter sliding up over this one)
  const { scrollYProgress: exitProgress } = useScroll({
    target: spacerRef,
    offset: ["end end", "end start"],
  });

  const smoothExit = useSpring(exitProgress, {
    stiffness: 80,
    damping: 20,
    mass: 1,
    restDelta: 0.001
  });

  // Push this chapter into the background as the next one covers it
  const scale = useTransform(smoothExit, [0, 1], [1, 0.92]);
  
  // Dimming overlay using the theme's "ink" color for perfect blending
  const dimOpacity = useTransform(smoothExit, [0, 1], [0, 0.7]);

  return (
    <>
      <div 
        ref={spacerRef} 
        id={id} 
        className="h-[130vh] w-full" 
      />

      <motion.div
        className="fixed inset-0 overflow-hidden bg-ink"
        style={{ 
          zIndex: 10 + index, 
          y: yValue,
          boxShadow: index > 0 ? "0 -20px 40px rgba(27,23,15,0.6)" : "none"
        }}
      >
        <motion.div 
          className="relative h-full w-full origin-top"
          style={{ scale }}
        >
          {children}

          {/* Dimming overlay that fades in as it gets pushed back */}
          <motion.div
            aria-hidden
            className="pointer-events-none absolute inset-0 bg-ink"
            style={{ opacity: dimOpacity }}
          />
        </motion.div>
      </motion.div>
    </>
  );
}
