import express from 'express'
import { addTodoController, getTodosController } from '../controllers/todoController.js';
import { jwtAuthMiddleware } from '../middleware/jwtAuthMiddleware.js';

const todoRouter = express.Router();

todoRouter.get('/todos',jwtAuthMiddleware, getTodosController);
todoRouter.post('/todo',jwtAuthMiddleware, addTodoController);


export default  todoRouter