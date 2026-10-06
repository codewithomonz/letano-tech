"use client";

import { MotionConfig } from "framer-motion";

// Makes every Framer Motion animation respect the visitor's
// "reduce motion" system setting (transforms and layout animations are skipped).
export default function MotionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}