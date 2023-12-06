import express from 'express'
import * as userController from './Controller/User.Controller.js';
import { auth } from '../../Middleware/Auth.middleware.js';
const app = express();

app.get('/',auth,userController.Profile);

export default app;
