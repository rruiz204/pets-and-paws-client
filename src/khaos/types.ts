export type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";
export type PossibleUndefined<T> = T | undefined;

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
  invoke<KhaosModel>(): Promise<KhaosResponse<KhaosModel>>;
};

export interface KhaosHook<KhaosModel, KhaosInputs> {
  data: PossibleUndefined<KhaosModel>;
  error: PossibleUndefined<KhaosError>;
  loading: boolean;
  invoke: (inputs: KhaosInputs) => Promise<void>
};