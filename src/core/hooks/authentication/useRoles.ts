import { useEffect } from "react";

import Khaos from "@khaos/index";
import useKhaos from "@khaos/hook";
import { QueryKhaosHook } from "@khaos/types";

import { MyRolesModel } from "@core/models";
import useMyRolesStore from "@stores/useMyRolesStore";

const useRoles = (): QueryKhaosHook<MyRolesModel> => {
  const { data, loading, error, invoke: fetcher } = useKhaos<MyRolesModel>();
  const khaos = new Khaos("/roles/me").setHttpMethod("GET").setAuthToken();

  const invoke = async () => {
    await fetcher(khaos);
  };

  useEffect(() => {
    if (data?.roles) useMyRolesStore.getState().setRoles(data.roles);
  }, [data])

  return { data, loading, error, invoke }
};

export default useRoles;