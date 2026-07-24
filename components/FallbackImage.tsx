"use client";

import Image, { type ImageProps } from "next/image";
import { useEffect, useState } from "react";

type FallbackImageProps = Omit<ImageProps, "src"> & {
  src: string;
  fallbackSrc?: string;
  alt: string;
};

export default function FallbackImage({
  src,
  fallbackSrc = "/images/image-fallback.svg",
  alt,
  ...props
}: FallbackImageProps) {
  const [currentSrc, setCurrentSrc] = useState(src);

  useEffect(() => {
    setCurrentSrc(src);
  }, [src]);

  return (
    <Image
      {...props}
      alt={alt}
      src={currentSrc}
      onError={() => setCurrentSrc(fallbackSrc)}
    />
  );
}
