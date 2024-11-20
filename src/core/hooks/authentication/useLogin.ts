import { useEffect } from "react";
import TokenService from "@services/TokenService";

import Khaos from "@khaos/index";
import useKhaos from "@khaos/hook";
import { KhaosHook } from "@khaos/types";

import { AuthModel } from "@core/models";
import { LoginInputs } from "@modules/authentication/login/validation";

const useLogin = (): KhaosHook<AuthModel, LoginInputs> => {
  const { data, loading, error, invoke: fetcher } = useKhaos<AuthModel>();
  const khaos = new Khaos("/auth/login").setHttpMethod("POST");

  const invoke = async (inputs: LoginInputs) => {
    khaos.setBody(inputs);
    await fetcher(khaos);
  };

  useEffect(() => {
    if (data) TokenService.save(data);
  }, [data]);

  return { data, loading, error, invoke };
};

export default useLogin;