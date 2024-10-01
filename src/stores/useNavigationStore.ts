import { create } from "zustand";

type State = {
  active: string;
};

type Action = {
  setActive: (activated: string) => void;
};

const useNavigationStore = create<State & Action>((set) => ({
  active: "Home",
  setActive: (activated: string) => {
    if (activated != "Collapse") set({active: activated});
  }
}));

export default useNavigationStore;