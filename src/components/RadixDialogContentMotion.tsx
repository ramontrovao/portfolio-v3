"use client";

import { motion } from "framer-motion";
import { Content, DialogContentProps } from "@radix-ui/react-dialog";
import { forwardRef } from "react";

const RadixDialogContentMotionWithForwardRef = forwardRef<
  HTMLImageElement,
  DialogContentProps
>(function RadixDialogContentMotionWrapper(props, ref) {
  return (
    <Content
      {...props}
      ref={ref}
    />
  );
});

export const RadixDialogContentMotion = motion(
  RadixDialogContentMotionWithForwardRef
);
