import 'dotenv/config';
import Application from './App';
import { Controller } from './interfaces';

const controllers: Controller[] = [
   // chat controller
   // user controller
   // auth controller
   // message controller 
];

const app = new Application(Number(process.env.PORT), controllers);
app.startListen();
