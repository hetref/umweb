import { create } from "zustand";

const useDevStore = create(() => ({
  mode: "DEV",
}));

export default useDevStore;
