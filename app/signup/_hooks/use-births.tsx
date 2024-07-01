import { create } from 'zustand';

type BirthsStore = {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
};

export const useBirths = create<BirthsStore>((set, get) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));
