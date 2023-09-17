import * as Dialog from "@radix-ui/react-dialog";
import { ReactNode } from "react";

interface IModalProps {
  triggerComponent: ReactNode;
  children: ReactNode;

  title?: string;
  closeComponent?: ReactNode;
}

export const Modal = ({
  title,
  closeComponent,
  triggerComponent,
  children,
}: IModalProps) => (
  <Dialog.Root>
    <Dialog.Trigger>{triggerComponent}</Dialog.Trigger>
    <Dialog.Portal>
      <Dialog.Overlay className="z-30 fixed bg-black w-screen h-screen bg-opacity-75" />
      <Dialog.Content className="z-40 fixed bg-transparent w-screen h-screen">
        <header className="w-full p-4 flex justify-between items-center">
          {title && <Dialog.Title>{title}</Dialog.Title>}

          {closeComponent && <Dialog.Close>{closeComponent}</Dialog.Close>}
        </header>

        {children}
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
);
