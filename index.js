import express from 'express';
import mongoose from 'mongoose'
import path from 'path'
import createError from 'http-errors'
import logger from 'morgan'
import cors from 'cors'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import dotenv from 'dotenv';

import { jwtAuthMiddleware } from './middleware/jwtAuthMiddleware.js';
import homeRouter from './routers/homeRouter.js';
import todoRouter from './routers/todoRouter.js';
import userRouter from './routers/userRouter.js';

dotenv.config();

var app = express();
// increase req body  the limit to 10MB
app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));
app.use(express.json());
/**extended: true  =   content type :  form-data not support*   raw , x-ww-form-urlencodel support*/
app.use(express.urlencoded({ extended: false }));
app.use(cors({ origin: process.env.CLIENT_ORIGIN }));
app.use(logger("dev"));
app.use(cookieParser());

app.use("/",homeRouter)
app.use("/api",homeRouter)
app.use("/api",todoRouter)
app.use("/api/user",userRouter)

mongoose.set('strictQuery', false);
mongoose
  .connect(process.env.MONGODB_CONNECTION_URL,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then((res) => console.log("mongodb connected"))
  .catch((err) => console.log("mongodb connection have error!"));

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("mongodb database Connected successfully");
});

app.listen(process.env.PORT, () => {
  console.log(`server running http://localhost:${process.env.PORT}`);
});
