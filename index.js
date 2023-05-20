var express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
var createError = require("http-errors");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require("cors");
const bodyParser = require('body-parser');


var indexRouter = require("./routes/index");
var blogRouter = require("./routes/blog");
var userRouter = require("./routes/user");

var app = express();
// increase the limit to 10MB
app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));
app.use(express.json());
/**extended: true  =   content type :  form-data not support*   raw , x-ww-form-urlencodel support*/
app.use(express.urlencoded({ extended: false }));
app.use(cors({ origin: process.env.CLIENT_ORIGIN }));
app.use(logger("dev"));
app.use(cookieParser());

app.use("/", indexRouter);
app.use("/api", userRouter);
app.use("/api", blogRouter);

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
  console.log("mongodb databse Connected successfully");
});

app.listen(process.env.PORT, () => {
  console.log(`server running http://localhost:${process.env.PORT}`);
});
