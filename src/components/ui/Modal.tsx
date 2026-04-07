'use client';

import * as Dialog from '@radix-ui/react-dialog';
import { X } from 'lucide-react';

interface ModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title?: string;
  children: React.ReactNode;
}

export default function Modal({ open, onOpenChange, title, children }: ModalProps) {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-[600] bg-black/85" />
        <Dialog.Content className="fixed left-1/2 top-1/2 z-[601] flex w-full max-w-[620px] -translate-x-1/2 -translate-y-1/2 flex-col border border-gold/18 bg-surface p-6">
          <div className="mb-4 flex items-center justify-between">
            {title && (
              <Dialog.Title className="font-display text-xl text-cream">
                {title}
              </Dialog.Title>
            )}
            <Dialog.Close className="ml-auto text-cream/40 transition-colors duration-200 hover:text-cream">
              <X className="h-5 w-5" />
            </Dialog.Close>
          </div>
          {children}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
