
import { data } from "../data.js";
import UserModel from "../model/userModelSchema.js";


export const getUserRegistrationData = (req, res) =>{
 try {
   const { email, password } = req.body;
   const id = Math.random(1000);
   var jwtExpireTime = Math.floor(Date.now() / 1000) + 60 * 60 * 24;
   const regData = { email: btoa(email), password: btoa(password) };
   const userModel = UserModel({
     email: btoa(email),
     password: btoa(password),
   });
   userModel.save();
   const token = jwt.sign(regData, process.env.JWT_SECRET_KEY, { expiresIn: "4h", });
   res.status(200).json({ token: token, error: null, data: regData });
 } catch (error) {
   console.error(error);
   res.status(500).json({ token: null,  error: error, data: regData || null , });
 }
}

export const getUserLoginData = (req, res) =>{  
    res.status(200).json({data:"reg"});
}

