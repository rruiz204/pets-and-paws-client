import { AuthModel } from "../core/models/AuthModel";

type StringOrNull = string | null;

interface ITokenService {
  save(model: AuthModel): void;
  obtain(): StringOrNull;
};

const save = (model: AuthModel): void => {
  const token = `${model.type} ${model.token}`;
  localStorage.setItem("api_token", token);
};

const obtain = (): StringOrNull => {
  return localStorage.getItem("api_token");
};

const TokenService: ITokenService = { save, obtain };

export default TokenService;