"use client";

import { motion } from "framer-motion";
import { forwardRef } from "react";
import { Viewport, SelectViewportProps } from "@radix-ui/react-select";

const RadixSelectViewportMotionWithForwardRef = forwardRef<
  HTMLImageElement,
  SelectViewportProps
>(function RadixSelectViewportMotionWrapper(props, ref) {
  return <Viewport {...props} ref={ref} />;
});

export const RadixSelectViewportMotion = motion(
  RadixSelectViewportMotionWithForwardRef
);
