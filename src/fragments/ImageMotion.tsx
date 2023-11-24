import { motion } from "framer-motion";
import Image, { ImageProps } from "next/image";
import { forwardRef } from "react";

const ImageWithForwardRef = forwardRef<HTMLImageElement, ImageProps>(
  function ExoticImageWrapper(props, ref) {
    return (
      <Image
        {...props}
        ref={ref}
      />
    );
  }
);

export const ImageMotion = motion(ImageWithForwardRef);
