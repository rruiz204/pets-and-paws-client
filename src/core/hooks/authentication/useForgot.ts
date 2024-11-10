import { ForgotModel } from "@core/models/ForgotModel";
import { ForgotInputs } from "@modules/authentication/forgot/validation";
import Khaos from "@shared/utilities/Khaos";
import useKhaos from "@core/hooks/useKhaos";
import Hook from "@core/interfaces/Hook";

const useForgot = (): Hook<ForgotModel, ForgotInputs> => {
  const { data, loading, error, fetch } = useKhaos<ForgotModel>();
  const khaos = new Khaos("/auth/forgot-password").setHttpMethod("POST");

  const invoke = async (inputs: ForgotInputs) => {
    khaos.setBody(inputs);
    await fetch(khaos);
  };

  return { data, loading, error, invoke };
};

export default useForgot;