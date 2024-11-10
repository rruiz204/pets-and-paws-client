import { ResetModel } from "@core/models/ResetModel";
import Khaos from "@shared/utilities/Khaos";
import useKhaos from "@core/hooks/useKhaos";
import Hook from "@core/interfaces/Hook";

interface ResetInputs {
  newPassword: string;
  token: string;
};

const useReset = (): Hook<ResetModel, ResetInputs> => {
  const { data, loading, error, fetch } = useKhaos<ResetModel>();
  const khaos = new Khaos("/auth/reset-password").setHttpMethod("POST");

  const invoke = async (inputs: ResetInputs) => {
    khaos.setBody(inputs);
    await fetch(khaos);
  };

  return { data, loading, error, invoke };
};

export default useReset;