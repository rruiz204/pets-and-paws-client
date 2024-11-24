import Khaos from "@khaos/index";
import useKhaos from "@khaos/hook";
import { CommandKhaosHook } from "@khaos/types";

import { ForgotModel } from "@core/models";
import { ForgotInputs } from "@modules/authentication/forgot/validation";

const useForgot = (): CommandKhaosHook<ForgotModel, ForgotInputs> => {
  const { data, loading, error, invoke: fetcher } = useKhaos<ForgotModel>();
  const khaos = new Khaos("/auth/forgot-password").setHttpMethod("POST");

  const invoke = async (inputs: ForgotInputs) => {
    khaos.setBody(inputs);
    await fetcher(khaos);
  };

  return { data, loading, error, invoke };
};

export default useForgot;