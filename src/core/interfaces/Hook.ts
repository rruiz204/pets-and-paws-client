import { KhaosError } from "@shared/utilities/Khaos";

export type PossibleUndefined<T> = T | undefined;

interface Hook<KhaosModel, Inputs> {
  data: PossibleUndefined<KhaosModel>;
  loading: boolean;
  error: PossibleUndefined<KhaosError>;
  invoke: (inputs: Inputs) => Promise<void>
};

export default Hook