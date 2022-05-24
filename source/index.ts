import 'dotenv/config';

import Application from './App';

import { Controller } from './interfaces';

import { UserController } from './controllers';

const controllers: Controller[] = [new UserController()];

const app = new Application(Number(process.env.PORT), controllers);
app.startListen();
