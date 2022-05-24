import { NextFunction, Request, Response, Router } from 'express';
import { Controller } from '../interfaces';
import { AuthService } from '../services/';

export class AuthController implements Controller {
  public path = '/auth';
  public router = Router();
  private AuthService = new AuthService();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    this.router.route(this.path + 'signup').post();
    this.router.route(this.path + 'signin').post();
    this.router.route(this.path + 'me').get();
  }

  private async SignUp(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<Response | void> {
    try {
      const { email, password } = request.body;
      const newUser = await this.AuthService.register({ email, password });
      response.send('user details');
    } catch (error: any) {
      next(new Error(error.message));
    }
  }
}
