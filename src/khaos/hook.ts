import { useState } from "react";
import { IKhaos, KhaosError, PossibleUndefined } from "./types";

const useKhaos = <KhaosModel>() => {
  const [data, setData] = useState<PossibleUndefined<KhaosModel>>(undefined);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<PossibleUndefined<KhaosError>>(undefined);

  const invoke = async (khaos: IKhaos) => {
    setLoading(true);
    setError(undefined);

    const response = await khaos.invoke<KhaosModel>();

    if (response.error) {
      setError(response.error);
      setLoading(false);
    } else {
      setData(response.data);
      setLoading(false);
    };
  };

  return { data, loading, error, invoke };
};

export default useKhaos;