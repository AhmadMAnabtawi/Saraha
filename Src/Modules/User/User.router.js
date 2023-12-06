import express from 'express';
import { Router } from 'express';
import * as userController from './Controller/User.Controller.js';
import { auth } from '../../Middleware/Auth.middleware.js';
import fileUpload from '../../Services/multer.js';
import validation from '../../Middleware/validation.js';
import * as validators from './User.validta.Js';

const router = Router();

// Endpoint for getting user profile
router.get('/', auth, userController.Profile);

// Endpoint for updating user cover image
router.patch('/cover', fileUpload(validators.fileValidation.image).array('images'), auth, userController.UpdateCover);

export default router;
