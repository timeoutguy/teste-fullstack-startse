import { Router } from 'express';
import CourseController from './app/controllers/CourseController';

const routes = Router();

routes.get('/courses', CourseController.index);
routes.get('/courses/find', CourseController.search);
routes.get('/courses/:id', CourseController.show);
routes.post('/courses', CourseController.store);

export default routes;
