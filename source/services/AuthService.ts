import { UserModel } from '../models/UserModel';
export class AuthService {
  public async register(user: { email: string; password: string }) {
    try {
      const newUser = await UserModel.create(user);
      return newUser;
    } catch (error: any) {
      throw new Error(error.message);
    }
  }
}
