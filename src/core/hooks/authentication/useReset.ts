import Khaos from "@khaos/index";
import useKhaos from "@khaos/hook";
import { CommandKhaosHook } from "@khaos/types";

import { ResetModel } from "@core/models";

interface ResetInputs {
  newPassword: string;
  token: string;
};

const useReset = (): CommandKhaosHook<ResetModel, ResetInputs> => {
  const { data, loading, error, invoke: fetcher } = useKhaos<ResetModel>();
  const khaos = new Khaos("/auth/reset-password").setHttpMethod("POST");

  const invoke = async (inputs: ResetInputs) => {
    khaos.setBody(inputs);
    await fetcher(khaos);
  };

  return { data, loading, error, invoke };
};

export default useReset;