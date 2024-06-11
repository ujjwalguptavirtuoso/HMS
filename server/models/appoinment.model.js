import mongoose from "mongoose";
import validator from "validator" ;
import bcrypt from "bcrypt";

const appoinmentSchema=new mongoose.Schema({

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
            minLength: [validator.isEmail, "Please Provide A Valid Email!"]
        },
        phone:{
            type:String,
            required:true,
            minLength: [10, "Phone Number Must Contain Exact 10 Digits!"],
            maxLength: [10, "Phone Number Must Contain Exact 10 Digits!"],
        },
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
        appoinment_date: {
            type: String,
            required: true,
        },
        department: {
            type: String,
            required: true,
        },
        // doctor: {
        //     type: mongoose.Schema.Types.ObjectId,
        //     ref: ""
        // },
        hasVisited: {
            type: Boolean,
            default: false
        },
        doctorId: {
            type: mongoose.Schema.Types.ObjectId,
            required: true
        },
        patientId: {
            type: mongoose.Schema.Types.ObjectId,
            required: true
        },
        address: {
            type: String,
            required: true,
        },
        status: {
            type:String,
            enum: ["PENDING", "ACCEPTED", "REJECTED"],
            default: "PENDING",
            required: true
        }
       
        
    

}, {timestamps: true});


export const Appoinment= mongoose.model("Appoinment", appoinmentSchema)