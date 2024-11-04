import { AuthModel } from "../core/models/AuthModel";
import Khaos, { KhaosResponse } from "../shared/utilities/Khaos";

interface IAuthService {
  login(data: any): Promise<KhaosResponse<AuthModel>>
};

const login = async (data: any): Promise<KhaosResponse<AuthModel>> => {
  const khaos = new Khaos("/auth/login").setHttpMethod("POST").setBody(data);
  return await khaos.fetch<AuthModel>();
};

const AuthService: IAuthService = { login };

export default AuthService;