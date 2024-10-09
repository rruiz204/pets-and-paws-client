import * as jose from "jose";
import { TokenDTO } from "../dtos/TokenDTO";

type Token = (TokenDTO & jose.JWTPayload) | null;
type StringOrNull = string | null;

const getToken = (): StringOrNull => localStorage.getItem("api_token");

const decodeToken = (token: StringOrNull): Token => token ? jose.decodeJwt(token) : null

const getScopes = (token: StringOrNull = getToken()) => decodeToken(token)?.scopes;

const AuthTokenService = { getScopes };
export default AuthTokenService;