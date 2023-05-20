

import express from 'express'

import { jwtAuthMiddleware } from '../middleware/jwtAuthMiddleware.js';
import { getUserLoginData, getUserRegistrationData } from '../controllers/userController.js';


const userRouter = express.Router();

userRouter.post('/login', jwtAuthMiddleware,getUserLoginData);
userRouter.post('/reg', getUserRegistrationData);

export default  userRouter

// const {
//   UserModelSchema,
//   UserPhotoModelSchema,
// } = require("./model/index");


// router.post("/user/registration", function (req, res, next) {
//   const { username, email, password, photo } = req.body;
//   const id = Math.random(1000);
//   var expireTime = Math.floor(Date.now() / 1000) + 60 * 60 * 24;

//   //goint to already exist current email in the database
//   UserModelSchema.find({ email: btoa(email) }, function (err, data) {
//     if (data) {
//       res.status(200).json({
//         msg: "no",
//         token: "",
//         error: "Already exist your email",
//         data: "",
//       });
//     }else{
//       const userObj = UserModelSchema({
//         _id: id,
//         username: username,
//         email: btoa(email),
//         password: btoa(password),
//         photo: "",
//       });
//       const userPhotoObj = UserPhotoModelSchema({ _id: id, photo: photo });
//       jwt.sign(
//         {
//           user: { 
//           email: btoa(email),
//           password: btoa(password), },
//           exp: expireTime,
//         },
//         process.env.JWT_SECRET_KEY,
//         (errJWT, token) => {
//           if (token) {
//             if (photo) {
//               userPhotoObj.save();
//             }
//             userObj.save((err, data) => {
//               if (err || errJWT) {
//                 res.status(200).json({
//                   msg: "no",
//                   token: token,
//                   error: err,
//                   data: data,
//                 });
//               } else {
//                 res
//                   .status(200)
//                   .json({ msg: "yes", token: token, error: err, data: data });
//               }
//             });
//           }
//         }
//       );
//     }
//   });
// });

// router.post("/user/login", (req, res) => {
//   const { email, password } = req.body;
//   UserModelSchema.findOne({ email: btoa(email) }, function (err, data) {
//     if (err) {
//       res.status(200).json({
//         msg: "no",
//         error: err,
//         data: data,
//       });
//     } else {
//       //append photo to data obj
//       if(data){
//           UserPhotoModelSchema.findById(data._id,(err,data2)=>{
//           if(data2){
//             data["photo"] = data2.photo 
//           //going to generate token
//             const token = jwt.sign(
//               { email: btoa(email),
//                 password: btoa(password),},
//               process.env.JWT_SECRET_KEY
//             );
//             res.status(200).json({
//               msg: btoa(password) === data?.password ? "yes" : "no",
//               error: err,
//               token: btoa(password) === data?.password ? token : "",
//               data: data,
//             });
//           }
//         }) 
//       }else{
//         res.status(200).json({
//           msg: "no",
//           error: err,
//           data: data,
//         });
//       }
//     }
//   });
// });

// module.exports = router;
