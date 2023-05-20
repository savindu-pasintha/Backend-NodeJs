
import { data } from "../data.js";

export const getTodosController = (req, res) =>{  res.status(200).json({data:data});}