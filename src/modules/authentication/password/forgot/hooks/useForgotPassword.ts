import { ForgotPasswordModel } from "@core/models/ForgotPasswordModel";
import { ForgotInputs } from "../validation";
import Khaos from "@shared/utilities/Khaos";
import useKhaos from "@core/hooks/useKhaos";
import Hook from "@core/interfaces/Hook";

const useForgotPassword = (): Hook<ForgotPasswordModel, ForgotInputs> => {
  const { data, loading, error, fetch } = useKhaos<ForgotPasswordModel>();
  const khaos = new Khaos("/auth/forgot-password").setHttpMethod("POST");

  const invoke = async (inputs: ForgotInputs) => {
    khaos.setBody(inputs);
    await fetch(khaos);
  };

  return { data, loading, error, invoke };
};

export default useForgotPassword;