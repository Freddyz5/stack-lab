import { create } from "zustand";

type State = {
  open: boolean;
};

type Actions = {
  setOpen: (isOpen: boolean) => void;
};

export const useSideBarStore = create<State & Actions>(
  (set) => ({
    open: false,
    setOpen: (open: boolean) => {
      set(() => ({
        open: open,
      }));
    },
  })
);