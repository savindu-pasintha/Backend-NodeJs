

import express from 'express'

import { jwtAuthMiddleware } from '../middleware/jwtAuthMiddleware.js';
import { userLoginController, userRegistrationController} from '../controllers/userController.js';


const userRouter = express.Router();

userRouter.post('/reg', userRegistrationController);
userRouter.post('/login', userLoginController);

export default  userRouter


