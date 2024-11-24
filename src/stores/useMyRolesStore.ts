import { create } from "zustand";

type State = {
  roles: string[];
  scopes: string[];
};

type Actions = {
  setRoles: (newRoles: string[]) => void;
  setScopes: (newScopes: string[]) => void;
};

const useMyRolesStore = create<State & Actions>((set) => ({
  roles: [], scopes: [],
  setRoles: (newRoles: string[]) => set((state) => ({ ...state, roles: newRoles })),
  setScopes: (newScopes: string[]) => set((state) => ({ ...state, scopes: newScopes })),
}));

export default useMyRolesStore;