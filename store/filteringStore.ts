import { create } from "zustand";

//using zustand only for showing purposes .

const useFilteringStore = create<FilteringStoreType>((set) => ({
  status: null,
  gender: null,
  setStatus: (status) => set({ status }),
  setGender: (gender) => set({ gender }),
  resetFilters: () => set({ status: null, gender: null }),
}));

export default useFilteringStore;
