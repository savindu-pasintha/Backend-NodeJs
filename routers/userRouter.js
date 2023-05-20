

import express from 'express'

import { jwtAuthMiddleware } from '../middleware/jwtAuthMiddleware.js';
import { getUserLoginController, getUserRegistrationController} from '../controllers/userController.js';


const userRouter = express.Router();

userRouter.post('/reg', getUserRegistrationController);
userRouter.post('/login',getUserLoginController);

export default  userRouter


