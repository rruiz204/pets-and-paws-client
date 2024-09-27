import { create } from "zustand";
import { AuthInputs } from "../modules/login/validation";
import { AuthDTO } from "../dtos/AuthDTO";
import Khaos from "./Khaos";

type State  = {
  token?: string;
  loading: boolean;
  error?: string;
};

type Action = {
  login: (data: AuthInputs) => Promise<void>
};

const useAuthStore = create<State & Action>((set) => ({
  loading: false, error: undefined, token: undefined,

  login: async (data: AuthInputs) => {
    set({ loading: true, error: undefined });
    const khaos = new Khaos("/Auth/Login").setHttpMethod("POST").setBody(data);
    const response = await khaos.fetcher<AuthDTO>();
    const token = `${response.data?.type} ${response.data?.token}`;
    localStorage.setItem("token_api", token);
    set({ loading: false, error: response?.error, token });
  },
}));

export default useAuthStore;