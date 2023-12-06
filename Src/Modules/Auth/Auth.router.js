import express from 'express';
import * as authController from './Controller/Auth.Controller.js';
import  validation from '../../Middleware/validation.js';
import {asyncHandler} from '../../Middleware/validation.js';
import { SigninSchema ,SignupSchema} from './Auth.Validtion.js';

const router = express.Router();

router.post('/signup', asyncHandling (authController.signup));
router.post('/signin', validation().asyncHandler(authController.signin));


export default app;
