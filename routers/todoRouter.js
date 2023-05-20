import express from 'express'
import { getTodosController } from '../controllers/todoController.js';
import { jwtAuthMiddleware } from '../middleware/jwtAuthMiddleware.js';


const todoRouter = express.Router();

todoRouter.get('/todos',jwtAuthMiddleware, getTodosController);

export default  todoRouter