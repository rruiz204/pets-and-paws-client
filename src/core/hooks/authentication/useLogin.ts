import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import TokenService from "@services/TokenService";

import Khaos from "@khaos/index";
import useKhaos from "@khaos/hook";
import { CommandKhaosHook } from "@khaos/types";

import { AuthModel } from "@core/models";
import { LoginInputs } from "@modules/authentication/login/validation";

const useLogin = (): CommandKhaosHook<AuthModel, LoginInputs> => {
  const { data, loading, error, invoke: fetcher } = useKhaos<AuthModel>();
  const khaos = new Khaos("/auth/login").setHttpMethod("POST");
  const navigate = useNavigate();

  const invoke = async (inputs: LoginInputs) => {
    khaos.setBody(inputs);
    await fetcher(khaos);
  };

  useEffect(() => {
    if (data) {
      TokenService.save(data);
      navigate("/home");
    };
  }, [data]);

  return { data, loading, error, invoke };
};

export default useLogin;