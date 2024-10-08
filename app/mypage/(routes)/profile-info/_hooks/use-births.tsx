import { create } from 'zustand';

type BirthsStore = {
  isOpen: boolean;
  breakPoint: number;
  onOpen: () => void;
  onClose: () => void;
};

export const useBirths = create<BirthsStore>((set, get) => ({
  isOpen: false,
  breakPoint: Date.now(),
  onOpen: () => set({ isOpen: true, breakPoint: Date.now() }),
  onClose: () => {
    set((state) => {
      if (Date.now() - state.breakPoint < 100) {
        return { isOpen: true };
      }
      return { isOpen: false };
    });
  },
}));
