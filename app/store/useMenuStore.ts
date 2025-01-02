import { create } from "zustand";
interface IMenuStore {
  open: boolean;
  setToggle: (open: boolean) => void;
}

export const useMenuStore = create<IMenuStore>((set) => ({
  open: false,
  setToggle: (open) => set({ open: open === true ? false : true }),
}));
