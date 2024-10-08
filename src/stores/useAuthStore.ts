import { create } from "zustand";
import { AuthInputs } from "../modules/login/validation";
import { AuthDTO } from "../dtos/AuthDTO";
import Khaos from "./Khaos";

type State  = {
  token: string | null;
  loading: boolean;
  error?: string;
};

type Action = {
  login: (data: AuthInputs) => Promise<void>
};

const useAuthStore = create<State & Action>((set) => ({
  loading: false, error: undefined,
  token: localStorage.getItem("api_token"),

  login: async (data: AuthInputs) => {
    set({ loading: true, error: undefined });
    const khaos = new Khaos("/Auth/Login").setHttpMethod("POST").setBody(data);
    const response = await khaos.fetcher<AuthDTO>();

    if (response.error) {
      set({ loading: false, error: response.error });
    } else {
      const token = `${response.data?.type} ${response.data?.token}`;
      localStorage.setItem("api_token", token);
      set({ loading: false, token });
    }
  },
}));

export default useAuthStore;