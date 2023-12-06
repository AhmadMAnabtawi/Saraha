import express from 'express';
import * as authController from './Controller/Auth.Controller.js';

const router = express.Router();

router.post('/signup', authController.signup);
router.post('/signin', authController.signin);

export default router;
