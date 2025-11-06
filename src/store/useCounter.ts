import { create } from "zustand";

type Counter = {
  count: number;
  setCount: () => void;
};

export const useCounter = create<Counter>()((set) => ({
  count: 1,
  setCount: () => set((state) => ({ count: state.count + 1 })),
}));


