import { AuthModel } from "@core/models/AuthModel";
import { LoginInputs } from "@modules/authentication/login/validation";
import Khaos from "@shared/utilities/Khaos";
import useKhaos from "@core/hooks/useKhaos";
import Hook from "@core/interfaces/Hook";
import TokenService from "@services/TokenService";

const useLogin = (): Hook<AuthModel, LoginInputs> => {
  const { data, loading, error, fetch } = useKhaos<AuthModel>();
  const khaos = new Khaos("/auth/login").setHttpMethod("POST");

  const invoke = async (inputs: LoginInputs) => {
    khaos.setBody(inputs);
    await fetch(khaos);
    
    if (data) TokenService.save(data);
  };

  return { data, loading, error, invoke };
};

export default useLogin;