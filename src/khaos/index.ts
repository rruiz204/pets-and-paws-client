import { HttpMethod, IKhaos, KhaosResponse } from "./types";

class Khaos implements IKhaos {
  private url: string = import.meta.env.VITE_BASE_URL;

  private options: RequestInit = { method: "GET", headers: { "Content-Type": "application/json" } };

  constructor(endpoint: string) {
    this.url += endpoint;
  };

  public setHttpMethod(method: HttpMethod): IKhaos {
    this.options.method = method;
    return this;
  };

  public setBody(body: any): IKhaos {
    this.options.body = JSON.stringify(body);
    return this;
  };

  public async invoke<KhaosModel>(): Promise<KhaosResponse<KhaosModel>> {
    const response = await fetch(this.url, this.options);
    const payload = await response.json();

    if (!response.ok) return { error: payload };
    return { data: payload };
  };
};

export default Khaos;