"use client";

import { useProModal } from "@/hooks/useProModal";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";

export default function ProModal() {
  const proModal = useProModal();
  return (
    <Dialog open={proModal.isOpen} onOpenChange={proModal.onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="flex flex-col items-center justify-center gap-y-4 pb-2">
            Upgrade Zacky
          </DialogTitle>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
