import { create } from "zustand";

const useCountStore = create((set) => ({
  userCount: 0,
  setUserCount: (count) => set({ userCount: count }),
}));

export default useCountStore;
