type HttpMethod = "GET" | "POST";

interface HttpResponse<Dto> {
  data?: Dto;
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

  public async fetcher<Dto>(): Promise<HttpResponse<Dto>> {
    const response = await fetch(this.url, this.options);
    return (await response.json()) as HttpResponse<Dto>;
  };
};

export default Khaos;