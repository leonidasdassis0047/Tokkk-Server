import { UserModel } from '../models/UserModel';
import { HTTPException } from '../utils/exceptions';
export class AuthService {
  public async createUser(user: { email: string; password: string }) {
    try {
      const newUser = await UserModel.create(user);
      return newUser;
    } catch (error: any) {
      throw new HTTPException(500, error.message);
    }
  }
}
