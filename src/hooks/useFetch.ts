import { useCallback, useState } from "react";

interface HttpResponse<DTO> {
  data?: DTO;
  error?: string;
};

interface IUseFetch<DTO> {
  data: DTO | null;
  loading: boolean;
  error: string | null;
  fetcher: () => Promise<void>;
};

const useFetch = <DTO>(url: string, opts: RequestInit): IUseFetch<DTO> => {
  const [data, setData] = useState<DTO | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetcher = useCallback(async () => {
    setLoading(true);
    setError(null);

    const response = await fetch(url, opts);
    const payload = (await response.json()) as HttpResponse<DTO>;

    setData(payload.data ? payload.data : null);
    if (payload.error) setError(payload.error);
    setLoading(false);
  }, []);

  return { data, loading, error, fetcher };
};

export default useFetch;