import { asyncHandler } from "../utils/asyncHandler.js"
import { User } from "../models/user.model.js";
import ErrorHandler from "../middlewares/error.middlewares.js";
import { generateToken } from "../utils/jwtToken.js";
import validator from "validator";
// import cloudinary from "cloudinary";

const validateStringField = (field, value) => {
  if (typeof value == "string" && value.trim() === "") {
    throw new ErrorHandler(`${field} is required`, 400);
  }
};

const validateEmailField = (email) => {
  if (!validator.isEmail(email)) {
    throw new ErrorHandler("Invalid email format", 400);
  }
};

const validateDateField = (dob) => {
    const dateRegex =/^(0?[1-9]|[12][0-9]|3[01])\/(0?[1-9]|1[012])\/(19|20)\d\d$/;

    if (!dateRegex.test(dob)) {
      throw new ErrorHandler(404, "dob must be in the format dd/mm/yyyy");
    }

    const [day, month, year] = dob.split("/").map(Number);
    const date = new Date(year, month - 1, day);

    if (
      date.getFullYear() !== year ||
      date.getMonth() + 1 !== month ||
      date.getDate() !== day
    ) {
      throw new ErrorHandler("dob must be a valid date", 400);
    }
};

const validateFields = (fields) => {
  for (const [key, value] of Object.entries(fields)) {
    switch (key) {
      case "email":
        validateEmailField(value);
        break;
      case "dob":
        validateDateField(value);
        break;
      default:
        validateStringField(key, value);
        break;
    }
  }
};


/*:::::::::::::::::::::::::::::::::::::::::::::::PATIENT-REGISTRATION:::::::::::::::::::::::::::::::::::::::::::::::::::::::*/

export const registerPatient = asyncHandler(async (req, res, next) => {
  const { firstName, lastName, email, phone, nic, dob, gender, password } =
    req.body;
  
    validateFields({
      firstName,
      lastName,
      email,
      phone,
      nic,
      dob,
      gender,
      password,
    });

  const isRegistered = await User.findOne({ $or: {email, phone} });
  if (isRegistered) {
    return next(new ErrorHandler("User already Registered!", 400));
  }

  const user = await User.create({
    firstName,
    lastName,
    email,
    phone,
    nic,
    dob,
    gender,
    password,
    role: "Patient",
  });

  const payload=await User.findById(user._id).select("-password -refreshToken")
  generateToken(payload, "User Registered!", 201, res);
});



/*:::::::::::::::::::::::::::::::::::::::::::::::USER-LOGIN:::::::::::::::::::::::::::::::::::::::::::::::::::::::*/

export const userLogin=asyncHandler(async (req, res, next)=>{
  const {email, password, confirmPassword, role}=req.body;
  if(!email || !password || !confirmPassword || !role) throw new ErrorHandler("Please fill all the fields", 400);

  if(password !== confirmPassword){
    throw new ErrorHandler("Password and confirm password does not match", 400);
  } 

  const user= await User.findOne({email}).select("+password");  //fetches user data with the pswd field which was turned off for fetching in model
  if(!user){
    throw new ErrorHandler("Invalid email", 400);
  }

  const isPasswordMatch = await user.comparePassword(password);
  if(!isPasswordMatch){
    throw new ErrorHandler("Invalid password", 400);
  }

  if(role!==user.role){
    throw new ErrorHandler("User with this role is not found", 404);
  }

  const payload=user.select
  generateToken(payload, "User logged in successfully!", 200, res);
  // res.status(200).json({success:true, message: "User logged in successfully!"})
})

/*:::::::::::::::::::::::::::::::::::::::::::::::ADMIN-REGISTRATION:::::::::::::::::::::::::::::::::::::::::::::::::::::::*/

export const registerAdmin=asyncHandler(async (req,res,next)=>{
  const { firstName, lastName, email, phone, nic, dob, gender, password } = req.body;
  
    validateFields({
      firstName,
      lastName,
      email,
      phone,
      nic,
      dob,
      gender,
      password,
    });

  const isRegistered = await User.findOne({ $or: {email, phone} });
  if (isRegistered) {
    return next(new ErrorHandler("Admin already Registered!", 400));
  }

  const admin = await User.create({
    firstName,
    lastName,
    email,
    phone,
    nic,
    dob,
    gender,
    password,
    role: "Admin",
  });

  const payload=await User.findById(admin._id).select("-password -refreshToken")
  generateToken(payload, "Admin Registered!", 201, res);
})

/*:::::::::::::::::::::::::::::::::::::::::::::::DOCTOR-REGISTRATION:::::::::::::::::::::::::::::::::::::::::::::::::::::::*/

