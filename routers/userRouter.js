

import express from 'express'

import { jwtAuthMiddleware } from '../middleware/jwtAuthMiddleware.js';
import { getUserLoginData, getUserRegistrationData } from '../controllers/userController.js';


const userRouter = express.Router();

userRouter.post('/login', jwtAuthMiddleware,getUserLoginData);
userRouter.post('/reg', getUserRegistrationData);

export default  userRouter


