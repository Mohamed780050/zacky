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
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

export default function ProModal() {
  const proModal = useProModal();
  const t = useTranslations("ProModal");
  return (
    <Dialog open={proModal.isOpen} onOpenChange={proModal.onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="flex flex-col items-center justify-center gap-y-4 pb-2">
            <div className="flex items-center gap-x-2 font-bold rtl:flex-row-reverse">
              {t("upgradeZacky")}
              <Badge variant="premium" className="py-1 text-sm uppercase">
                {t("pro")}
              </Badge>
            </div>
          </DialogTitle>
          <DialogDescription className="space-y-2 pt-2 text-center font-medium text-zinc-900">
            <Tools isINProModal isChecked />
            <Link href="/pricing">
              <Button variant="premium" className="w-full cursor-pointer" onClick={proModal.onClose}>
                <span className="flex items-center gap-x-2 rtl:flex-row-reverse">
                  {t("upgrade")}
                  <Zap className="h-4 w-4 fill-white" />
                </span>
              </Button>
            </Link>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
