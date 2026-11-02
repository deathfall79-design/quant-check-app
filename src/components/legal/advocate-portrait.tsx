import { motion, useReducedMotion } from "framer-motion";

export function AdvocatePortrait({ src, alt }: { src: string; alt: string }) {
  const reduceMotion = useReducedMotion();

  return (
    <div className="relative aspect-[4/5] overflow-hidden rounded-[1.25rem]">
      <motion.img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        className="h-full w-full object-cover object-top"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: reduceMotion ? 0 : 0.8, ease: "easeOut" }}
      />
    </div>
  );
}
