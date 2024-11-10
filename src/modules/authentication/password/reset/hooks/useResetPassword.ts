import { ResetPasswordModel } from "@core/models/ResetPasswordModel";
/* import { ResetInputs } from "../validation"; */
import Khaos from "@shared/utilities/Khaos";
import useKhaos from "@core/hooks/useKhaos";
import Hook from "@core/interfaces/Hook";

interface ResetInputs {
  newPassword: string;
  token: string;
};

const useResetPassword = (): Hook<ResetPasswordModel, ResetInputs> => {
  const { data, loading, error, fetch } = useKhaos<ResetPasswordModel>();
  const khaos = new Khaos("/auth/reset-password").setHttpMethod("POST");

  const invoke = async (inputs: ResetInputs) => {
    khaos.setBody(inputs);
    await fetch(khaos);
  };

  return { data, loading, error, invoke };
};

export default useResetPassword;