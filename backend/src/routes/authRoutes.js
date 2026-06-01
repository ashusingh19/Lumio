import bcrypt from "bcryptjs";
import sendEmail from "../utils/sendEmail.js";
import express from "express"
import User from "../models/userlog.js";
import jwt from "jsonwebtoken";
const router =  express.Router();
const generateToken = (UserId) =>{
return jwt.sign ({UserId},process.env.jwt_SECRET,{expiresIn:'1d'});
};

router.post('/register',async(req,res)=>{
   console.log("Request body:", req.body);
    try {
        const {username,password,email,fullname} =req.body;
        if( !username || !password || !email || !fullname){
          return res.status(400).json({message:"All field are required"});
        }
     if(password.length < 6){
        return res.status(400).json({message:"password length must be 6 character"});
     }
     if(username.length<3){
        return res.status(400).json({message:"useranme have must be 3 character"});
     }
     if(fullname.length<3){
      return res.status(400).json({message:"fullname have must be 3 character"})
     }
    
     const existingusername  = await User.findOne({username});
     if(existingusername){
        return res.status(400).json({message:"already have an account"});
     }
     const user = new User({
        username,
        password,
        email,
        fullname

     });
     await user.save();
     const token = generateToken(user._id);
     res.status(201).json({
        token,
        user:{
            id : user._id,
            username : user.username,
            password:user.password,
            email:user.email,
            fullname:user.fullname
            
        }
     },{timestamps:true})
    } 
    catch(error){
       console.log('error in register route',error);
         res.status(500).json({message:'internet server error'});
    }
});

router.post('/login',async(req,res) =>{
   console.log("Request body:", req.body);
    try {
         const {username,password} =req.body;
        if( !username || !password ){
          return res.status(400).json({message:"All field are required"});
        }
     const user = await User.findOne({username});
     if(!user) 
      {
         return res.status(400).json({message:'invalid credential(username)'})
      }
    const isPasswordCorrect= await user.comparePassword(password)
     if(!isPasswordCorrect) 
      {
         return res.status(400).json({message:'invalid credential(password)'});
      }
        const token = generateToken(user._id);
        res.status(200).json({
         token,
         user:{
            id:user._id.toString(),
            username:user.username,
            password,
         }
        });
    } catch (error) {
         console.log('error in login route',error);
         res.status(500).json({message:'internet server error'});
    }
});
// SEND OTP
router.post('/forgot-password', async (req, res) => {

  try {

    const { email } = req.body;

    if (!email) {
      return res.status(400).json({
        message: "Email is required"
      });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({
        message: "User not found"
      });
    }

    // GENERATE 6 DIGIT OTP
    const otp = Math.floor(
      100000 + Math.random() * 900000
    ).toString();

    console.log("OTP =>", otp);

    // SAVE OTP
    user.otp = otp;

    // 5 MINUTES
    user.otpExpiry =
      Date.now() + 5 * 60 * 1000;

    await user.save();

    // SEND EMAIL
    await sendEmail(email, otp);

    res.status(200).json({
      message: "OTP sent successfully"
    });

  } catch (error) {

    console.log(
      "FORGOT PASSWORD ERROR =>",
      error
    );

    res.status(500).json({
      message: "Server Error"
    });
  }
});
// VERIFY OTP
router.post('/verify-otp', async (req, res) => {

  try {

    const { email, otp } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({
        message: "User not found"
      });
    }

    if (user.otp !== otp) {
      return res.status(400).json({
        message: "Invalid OTP"
      });
    }

    if (user.otpExpiry < Date.now()) {
      return res.status(400).json({
        message: "OTP expired"
      });
    }

    res.status(200).json({
      message: "OTP verified"
    });

  } catch (error) {

    console.log(
      "VERIFY OTP ERROR =>",
      error
    );

    res.status(500).json({
      message: "Server Error"
    });
  }
});
// RESET PASSWORD
router.post('/reset-password', async (req, res) => {

  try {

    const { email, newPassword } =
      req.body;

    const user = await User.findOne({
      email,
    });

    if (!user) {
      return res.status(400).json({
        message: "User not found"
      });
    }

    // HASH PASSWORD
    const salt = await bcrypt.genSalt(10);

    user.password =
      await bcrypt.hash(
        newPassword,
        salt
      );

    // CLEAR OTP
    user.otp = null;
    user.otpExpiry = null;

    await user.save();

    res.status(200).json({
      message:
        "Password updated successfully"
    });

  } catch (error) {

    console.log(
      "RESET PASSWORD ERROR =>",
      error
    );

    res.status(500).json({
      message: "Server Error"
    });
  }
});

export default router;