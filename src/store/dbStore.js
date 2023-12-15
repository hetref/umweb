import { create } from "zustand";

const useDbStore = create((set) => ({
  data: {},
  setData: (data) => set({ data }),
}));

export default useDbStore;
