import { NextFunction, Request, Response, Router } from "express";
import { Controller } from "../interfaces";

export class UserController implements Controller {
    path = '/users';
    router= Router();

constructor(){
    this.initializeRoutes();
}

private initializeRoutes():void{
    this.router.route(this.path).get(this.getUsers);
}

private async getUsers (request: Request, response: Response, next: NextFunction): Promise<void> {
    try {
        response.send('Users')
    } catch (error: any) {
        console.log(error.message)
    }
}

}