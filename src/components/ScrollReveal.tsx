import React from "react";
import { motion } from "motion/react";

interface ScrollRevealProps {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  className?: string;
  distance?: number;
  duration?: number;
  once?: boolean;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  delay = 0,
  direction = "up",
  className = "",
  distance = 28,
  duration = 0.55,
  once = true
}) => {
  const getOffset = () => {
    switch (direction) {
      case "up":
        return { y: distance, x: 0 };
      case "down":
        return { y: -distance, x: 0 };
      case "left":
        return { x: distance, y: 0 };
      case "right":
        return { x: -distance, y: 0 };
      case "none":
        return { x: 0, y: 0 };
    }
  };

  const offset = getOffset();

  return (
    <motion.div
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once, margin: "-60px" }}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1]
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const StaggerContainer: React.FC<{
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
}> = ({ children, className = "", staggerDelay = 0.08 }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay
          }
        }
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export const StaggerItem: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className = "" }) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 22 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.5,
            ease: [0.16, 1, 0.3, 1]
          }
        }
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
