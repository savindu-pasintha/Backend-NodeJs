import express from 'express'
import { homeController } from '../controllers/HomeController.js';

const homeRouter = express.Router();

homeRouter.get('/', homeController);

export default  homeRouter


