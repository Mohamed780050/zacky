import { create } from "zustand";
import { userProModalInterface } from "@/interfaces/interfaces";

export const useProModal = create<userProModalInterface>((set) => ({
  isOpen: true,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));
