import { motion, useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const DESKTOP_COLS = 20;
const DESKTOP_ROWS = 15;
const MOBILE_COLS = 8;
const MOBILE_ROWS = 6;

function seeded(index: number, salt: number) {
  const value = Math.sin(index * 91.73 + salt * 37.19) * 43758.5453;
  return value - Math.floor(value);
}

export function AdvocatePixelPortrait({ src, alt }: { src: string; alt: string }) {
  const frameRef = useRef<HTMLDivElement>(null);
  const inView = useInView(frameRef, { once: true, amount: 0.32 });
  const reduceMotion = useReducedMotion();
  const [isDesktop, setIsDesktop] = useState<boolean | null>(null);

  useEffect(() => {
    const query = window.matchMedia("(min-width: 768px)");
    const update = () => setIsDesktop(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  if (isDesktop === null || reduceMotion) {
    return (
      <div ref={frameRef} className="relative aspect-[4/5] overflow-hidden rounded-[1.25rem]">
        <motion.img
          src={src}
          alt={alt}
          loading="lazy"
          className="h-full w-full object-cover object-top"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: reduceMotion ? 0 : 0.8 }}
        />
      </div>
    );
  }

  const cols = isDesktop ? DESKTOP_COLS : MOBILE_COLS;
  const rows = isDesktop ? DESKTOP_ROWS : MOBILE_ROWS;
  const tileCount = cols * rows;
  const assembleDuration = isDesktop ? 1.65 : 0.75;

  return (
    <div
      ref={frameRef}
      className={`pixel-portrait relative aspect-[4/5] overflow-hidden rounded-[1.25rem] ${inView ? "pixel-portrait-locked" : ""}`}
      style={{ perspective: isDesktop ? "900px" : undefined }}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 grid"
        style={{ gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`, gridTemplateRows: `repeat(${rows}, minmax(0, 1fr))` }}
      >
        {Array.from({ length: tileCount }, (_, index) => {
          const col = index % cols;
          const row = Math.floor(index / cols);
          const distance = isDesktop ? 110 + seeded(index, 1) * 180 : 24 + seeded(index, 1) * 32;
          const angle = seeded(index, 2) * Math.PI * 2;
          const x = Math.cos(angle) * distance;
          const y = Math.sin(angle) * distance;
          const rotation = isDesktop ? (seeded(index, 3) - 0.5) * 150 : (seeded(index, 3) - 0.5) * 18;
          const delay = seeded(index, 4) * (isDesktop ? 0.95 : 0.35);

          return (
            <motion.span
              key={index}
              className="pixel-portrait-tile relative overflow-hidden"
              style={{
                backgroundImage: `url(${src})`,
                backgroundSize: `${cols * 100}% ${rows * 100}%`,
                backgroundPosition: `${(col / (cols - 1)) * 100}% ${(row / (rows - 1)) * 100}%`,
              }}
              initial={{ opacity: 0, x, y, rotate: rotation, scale: isDesktop ? 0.42 : 0.82 }}
              animate={inView ? { opacity: 1, x: 0, y: 0, rotate: 0, scale: 1 } : undefined}
              transition={{ duration: isDesktop ? 0.72 : 0.42, delay, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.span
                className="absolute inset-0 grid place-items-center text-[5px] text-foreground/25 sm:text-[7px]"
                initial={{ opacity: 0.5 }}
                animate={inView ? { opacity: 0 } : undefined}
                transition={{ duration: 0.35, delay: assembleDuration }}
              >
                ⚒
              </motion.span>
            </motion.span>
          );
        })}
      </div>
      <motion.img
        src={src}
        alt={alt}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover object-top"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : undefined}
        transition={{ duration: 0.55, delay: assembleDuration }}
      />
      <motion.div
        aria-hidden="true"
        className="pixel-portrait-glow pointer-events-none absolute inset-0 rounded-[1.25rem]"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: [0, 0.7, 0] } : undefined}
        transition={{ duration: 1.25, delay: assembleDuration + 0.12, times: [0, 0.35, 1] }}
      />
    </div>
  );
}