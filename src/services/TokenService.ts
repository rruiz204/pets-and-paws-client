import { decodeJwt } from "jose";
import { AuthModel, TokenModel } from "@core/models";

type StringOrNull = string | null;

interface ITokenService {
  save(model: AuthModel): void;
  obtain(): StringOrNull;
  payload(): TokenModel;
};

const save = (model: AuthModel): void => {
  const token = `${model.type} ${model.token}`;
  localStorage.setItem("api_token", token);
};

const obtain = (): StringOrNull => {
  return localStorage.getItem("api_token");
};

const payload = (): TokenModel => {
  const token = decodeJwt<TokenModel>(obtain()!);
  return { charge: token.charge, scopes: token.scopes };
};

const TokenService: ITokenService = { save, obtain, payload };

export default TokenService;