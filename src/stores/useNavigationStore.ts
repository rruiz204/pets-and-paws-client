import { create } from "zustand";

type State = {
  active: string;
  expanded: boolean;
};

type Action = {
  setActive: (activated: string) => void;
  setExpanded: () => void;
};

const useNavigationStore = create<State & Action>((set) => ({
  active: "Home", expanded: true,

  setActive: (activated: string) => {
    if (activated != "Collapse") set({active: activated});
  },
  setExpanded: () => set((state) => ({ expanded: !state.expanded }))
}));

export default useNavigationStore;