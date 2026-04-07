"use client";

import { useProModal } from "@/hooks/useProModal";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { Badge } from "./ui/badge";
import Tools from "@/features/home/Tools";
import { Button } from "./ui/button";
import { Zap } from "lucide-react";
import Link from "next/link";

export default function ProModal() {
  const proModal = useProModal();
  return (
    <Dialog open={proModal.isOpen} onOpenChange={proModal.onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="flex flex-col items-center justify-center gap-y-4 pb-2">
            <div className="flex items-center gap-x-2 font-bold">
              Upgrade Zacky
              <Badge variant="premium" className="py-1 text-sm uppercase">
                Por
              </Badge>
            </div>
          </DialogTitle>
          <DialogDescription className="space-y-2 pt-2 text-center font-medium text-zinc-900">
            <Tools isINProModal isChecked />
            <Link href="/pricing">
              <Button variant="premium" className="w-full cursor-pointer" onClick={proModal.onClose}>
                Upgrade
                <Zap className="ml-2 h-4 w-4 fill-white" />
              </Button>
            </Link>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
