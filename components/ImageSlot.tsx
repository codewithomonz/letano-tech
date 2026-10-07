"use client";

import { useState } from "react";
import Image from "next/image";

/**
 * A next/image that fills its parent (the parent must be `relative` with a size).
 * If the file is missing it shows a plain blue panel instead of a broken-image icon.
 * In development the panel also tells you which file to add.
 */
export default function ImageSlot({
  src,
  alt,
  sizes,
  priority = false,
  className = "",
}: {
  src: string;
  alt: string;
  sizes: string;
  priority?: boolean;
  className?: string;
}) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        role="img"
        aria-label={alt}
        className="absolute inset-0 grid place-items-center bg-linear-to-br from-navy to-navy-deep p-6 text-center"
      >
        {process.env.NODE_ENV !== "production" && (
          <span className="max-w-[18rem] text-xs leading-relaxed text-mist">
            Add an image at{" "}
            <code className="text-frost">public{src}</code>
          </span>
        )}
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes={sizes}
      priority={priority}
      quality={75}
      onError={() => setFailed(true)}
      className={`object-cover ${className}`}
    />
  );
}