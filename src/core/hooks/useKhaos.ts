import { useState } from "react";
import { IKhaos, KhaosError } from "@shared/utilities/Khaos";
import { PossibleUndefined } from "@core/interfaces/Hook";

const useKhaos = <KhaosModel>() => {
  const [ data, setData ] = useState<PossibleUndefined<KhaosModel>>(undefined);
  const [ loading, setLoading ] = useState<boolean>(false);
  const [ error, setError ] = useState<PossibleUndefined<KhaosError>>(undefined);

  const fetch = async (khaos: IKhaos) =>  {
    setLoading(true);
    setError(undefined);

    const response = await khaos.fetch<KhaosModel>();

    if (response.error) {
      setError(response.error);
      setLoading(false);
    } else {
      setData(response.data);
      setLoading(false);
    };
  };

  return { data, loading, error, fetch };
};

export default useKhaos;