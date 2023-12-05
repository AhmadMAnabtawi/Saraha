import  express  from 'express'
import * as authController from './Controller/Auth.Controller.js';
const app =express();


app.post('/signup',authController.signup);
app.post('/signin',authController.signin);

export default app;