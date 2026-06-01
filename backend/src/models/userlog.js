import mongoose from "mongoose";
import bcrypt from "bcrypt";
const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
            type:String,
            required:true,
            minlength:6
    },
    email:{
         type:String,
        required:true,
        unique:true,
    },
    fullname:{
         type:String,
        required:true,
    },
      otp: {
    type: String,
    default: null,
  },

  otpExpiry: {
    type: Date,
    default: null,
  },
})
userSchema.pre("save",async function (next) {
    if(!this.isModified ('password')) return next();
        try{
    const salt =await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password,salt);
    next();
        }catch(err){
            next(err);
        }
});
//compare password
userSchema.methods.comparePassword = async function (userpassword) {
    return await bcrypt.compare(userpassword,this.password);
}
 const User = mongoose.model(`User`,userSchema);
 export default User;
