"use client";

import { ReactNode, Dispatch, SetStateAction } from "react";
import * as Dialog from "@radix-ui/react-dialog";

interface IModalProps {
  triggerComponent: ReactNode;
  children: ReactNode;
  isOpen: boolean;
  onOpenChange: Dispatch<SetStateAction<boolean>>;

  title?: string;
  closeComponent?: ReactNode;
}

export const Modal = ({
  title,
  closeComponent,
  triggerComponent,
  children,
  isOpen,
  onOpenChange,
}: IModalProps) => (
  <Dialog.Root
    open={isOpen}
    onOpenChange={onOpenChange}>
    <Dialog.Trigger>{triggerComponent}</Dialog.Trigger>

    <Dialog.Portal>
      <Dialog.Overlay className="z-30 p-4 fixed flex justify-center items-center left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-zinc-800 w-screen h-screen bg-opacity-75">
        <Dialog.Content className="relative flex justify-center items-center w-full max-w-2xl bg-zinc-900 rounded-md">
          {title ||
            (closeComponent && (
              <header className="w-full p-4 flex justify-between items-center">
                {title && <Dialog.Title>{title}</Dialog.Title>}

                {closeComponent && (
                  <Dialog.Close>{closeComponent}</Dialog.Close>
                )}
              </header>
            ))}

          {children}
        </Dialog.Content>
      </Dialog.Overlay>
    </Dialog.Portal>
  </Dialog.Root>
);
