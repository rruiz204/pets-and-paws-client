type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";

export interface KhaosError {
  title: string;
  message: string;
};

export interface KhaosResponse<KhaosModel> {
  data?: KhaosModel;
  error?: KhaosError;
};

export interface IKhaos {
  setHttpMethod(method: HttpMethod): IKhaos;
  setBody(body: any): IKhaos;
  fetch<KhaosModel>(): Promise<KhaosResponse<KhaosModel>>;
};

class Khaos implements IKhaos {
  private url: string = import.meta.env.VITE_BASE_URL;

  private options: RequestInit = {
    method: "GET",
    headers: { "Content-Type": "application/json" }
  };

  constructor(endpoint: string) {
    this.url += endpoint;
  };

  public setHttpMethod(method: HttpMethod) {
    this.options.method = method;
    return this;
  };

  public setBody(body: any) {
    this.options.body = JSON.stringify(body);
    return this;
  };

  public async fetch<KhaosModel>(): Promise<KhaosResponse<KhaosModel>> {
    const response = await fetch(this.url, this.options);
    const payload = await response.json();

    if (!response.ok) return { error: payload };
    return { data: payload };
  };
}

export default Khaos;