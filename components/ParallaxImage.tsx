"use client";

import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import ImageSlot from "./ImageSlot";

/**
 * An image in a rounded frame that drifts slowly as you scroll past it.
 * The image is scaled up slightly so the drift never reveals empty edges.
 * With "reduce motion" turned on, it stays still.
 */
export default function ParallaxImage({
  src,
  alt,
  sizes,
  ratio = "aspect-[16/10]",
  className = "",
  strength = 8,
  priority = false,
}: {
  src: string;
  alt: string;
  sizes: string;
  ratio?: string;
  className?: string;
  strength?: number;
  priority?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    reduce ? ["0%", "0%"] : [`-${strength}%`, `${strength}%`],
  );

  return (
    <div
      ref={ref}
      className={`relative overflow-hidden rounded-2xl ring-1 ${ratio} ${className}`}
    >
      <motion.div
        style={{ y, scale: reduce ? 1 : 1.18 }}
        className="absolute inset-0 will-change-transform"
      >
        <ImageSlot src={src} alt={alt} sizes={sizes} priority={priority} />
      </motion.div>
    </div>
  );
}