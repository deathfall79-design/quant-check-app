import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "section" | "figure";
  id?: string;
};

export function Reveal({ children, delay = 0, className = "", as: Tag = "div", id }: Props) {
  const reduceMotion = useReducedMotion();
  const Component = motion[Tag];

  return (
    <Component
      id={id}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12, margin: "0px 0px -40px 0px" }}
      transition={reduceMotion ? { duration: 0 } : { duration: 0.62, delay: delay / 1000, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </Component>
  );
}
