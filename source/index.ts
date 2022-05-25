import 'dotenv/config';

import Application from './App';

import { Controller } from './interfaces';

import { AuthController, UserController } from './controllers';

const controllers: Controller[] = [new UserController(), new AuthController()];

const app = new Application(Number(process.env.PORT), controllers);
app.startListen();
