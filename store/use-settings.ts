import { create } from "zustand";

type SettingsStore = {
  count: number;
  incrementCount: () => void;
  decrementCount: () => void;
};

export const useSettings = create<SettingsStore>((set, get) => ({
  count: 0,
  incrementCount: () => set((state) => ({ count: state.count + 1 })),
  decrementCount: () => set((state) => ({ count: state.count - 1 })),
}));
