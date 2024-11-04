type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";

export interface KhaosResponse<DataModel> {
  data?: DataModel;
  error?: string;
};

class Khaos {
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

  public async fetch<DataModel>(): Promise<KhaosResponse<DataModel>> {
    const response = await fetch(this.url, this.options);
    return (await response.json()) as KhaosResponse<DataModel>;
  };
}

export default Khaos