import { decodeJwt } from "jose";
import { AuthModel, TokenModel } from "@core/models";

interface ITokenService {
  save(model: AuthModel): void;
  obtain(): string;
  payload(): TokenModel;
};

const save = (model: AuthModel): void => {
  const token = `${model.type} ${model.token}`;
  localStorage.setItem("api_token", token);
};

const obtain = (): string => {
  return localStorage.getItem("api_token")!;
};

const payload = (): TokenModel => {
  const token = decodeJwt<TokenModel>(obtain()!);
  return { sub: token.sub };
};

const TokenService: ITokenService = { save, obtain, payload };

export default TokenService;