import { Router } from 'express';

export interface Controller {
  path: string;
  router: Router;
}

export * as UserInterfaces from './UserInterfaces';
