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
  setAuthToken(): IKhaos;
  invoke<KhaosModel>(): Promise<KhaosResponse<KhaosModel>>;
};

interface BaseKhaosHook<KhaosModel> {
  data: PossibleUndefined<KhaosModel>;
  error: PossibleUndefined<KhaosError>;
  loading: boolean;
};

export interface CommandKhaosHook<KhaosModel, KhaosInputs> extends BaseKhaosHook<KhaosModel> {
  invoke: (inputs: KhaosInputs) => Promise<void>
};

export interface QueryKhaosHook<KhaosModel> extends BaseKhaosHook<KhaosModel> {
  invoke: () => Promise<void>;
};