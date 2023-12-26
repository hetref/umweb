import { create } from "zustand";

const useModalStore = create((set) => ({
  //   isRevertOpen: false,
  //   setIsRevertOpen: () =>
  //     set((state) => ({ isRevertOpen: !state.isRevertOpen })),

  isRevertOpen: false,
  setIsRevertOpen: (isRevertOpen) => set({ isRevertOpen }),

  contactName: "",
  setContactName: (contactName) => set({ contactName }),

  contactEmail: "",
  setContactEmail: (contactEmail) => set({ contactEmail }),
}));

export default useModalStore;
