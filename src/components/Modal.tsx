"use client";

import { ReactNode, Dispatch, SetStateAction } from "react";
import * as RadixDialog from "@radix-ui/react-dialog";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import { RadixDialogContentMotion } from "./RadixDialogContentMotion";

interface IModalProps {
  children: ReactNode;
  triggerComponent: ReactNode;
  isOpen: boolean;
  onOpenChange: Dispatch<SetStateAction<boolean>>;

  title?: string;
}

export const Modal = ({
  title,
  triggerComponent,
  children,
  isOpen,
  onOpenChange,
}: IModalProps) => (
  <RadixDialog.Root open={isOpen} onOpenChange={onOpenChange}>
    <RadixDialog.Trigger>{triggerComponent}</RadixDialog.Trigger>

    <RadixDialog.Portal>
      <RadixDialog.Overlay className="z-50 p-4 fixed flex justify-center items-center left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-zinc-800 w-screen h-screen bg-opacity-75">
        <RadixDialogContentMotion
          className="relative flex justify-center items-center w-full max-w-2xl bg-zinc-900 rounded-md"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          {title && (
            <RadixDialog.Title>
              <VisuallyHidden.Root>{title}</VisuallyHidden.Root>
            </RadixDialog.Title>
          )}

          {children}
        </RadixDialogContentMotion>
      </RadixDialog.Overlay>
    </RadixDialog.Portal>
  </RadixDialog.Root>
);
