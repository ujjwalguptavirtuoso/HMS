import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

const userSchema= new mongoose.Schema(
    {
        firstName:{
            type:String,
            required:true,
            minLength: [3, "First Name must contain at least 3 characters!"]

        },
        lastName:{
            type:String,
            required:true,
            minLength: [3, "Last Name must contain at least 3 characters!"]

        },
        email:{
            type:String,
            required:true,
            // minLength: [validator.isEmail, "Please Provide A Valid Email!"],
            unique: true
        },
        phone:{
            type:String,
            required:true,
            minLength: [10, "Phone Number Must Contain Exact 10 Digits!"],
            maxLength: [10, "Phone Number Must Contain Exact 10 Digits!"],
            unique: true
        },
        // avatar:{
        //     type:String,
        // },
        nic:{
            type:String,
            required:true,
            minLength: [13, "NIC Must Contain Exact 13 Digit"],
            mixLength: [13, "NIC Must Contain Exact 13 Digit"],
        },
        dob:{
            type: Date,
            required: [true,"DOB is required"]
        },
        gender:{
            type: String,
            required: true,
            enum: ["Male", "Female"]
        },
        password:{
            type: String,
            required: true,
            select:false,
            minLength:[8, "Password Must Contain 8 Characters!"]
        },
        refreshToken:{
            type:String,
        },
        role:{
            type:String,
            required: true,
            enum: ["Admin", "Patient","Doctor"]
        },
        doctorDepartment:{
            type: String,

        },
        avatar:{
            public_id:String,
            url:String
        },
    },
);

userSchema.pre("save", async function(next){
    if(!this.isModified('password'))
        {
            next();
        }
        this.password=await bcrypt.hash(this.password, 10);
        next();
});

userSchema.methods.comparePassword= async function (enteredPassword)
{
    return await bcrypt.compare(enteredPassword, this.password);
}

userSchema.methods.generateJWT = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES,
  });
};

export const User=mongoose.model("User",userSchema);
// const User=mongoose.model(userSchema);