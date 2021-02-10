import {Router} from 'express';
import usersController from './src/controllers/usersController';

const routes = Router();

routes.get('/users', usersController.index);
routes.post('/users', usersController.create);

export default routes;