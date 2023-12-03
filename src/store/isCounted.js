import { create } from "zustand";

const useCountStore = create((set) => ({
  counted: false,
  setCounted: () => set(() => ({ counted: true })),
}));

export default useCountStore;
