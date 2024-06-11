import { asyncHandler } from "../utils/asyncHandler.js";
import ErrorHandler from "../middlewares/error.middlewares.js";
import { Appoinment } from "../models/appoinment.model.js";
import {User} from "../models/user.model.js";


export const postAppointment =asyncHandler(async(req, res, next) =>{
    const { firstName, lastName, email, phone, nic, dob, gender, appoinment_date, department, doctor_firstName, doctor_lastName, hasVisited, address}=req.body;

    if(!firstName|| !lastName|| !email|| !phone|| !nic|| !dob|| !gender|| !appoinment_date|| !department|| !doctor_firstName|| !doctor_lastName|| !hasVisited|| !address)

    {
        return next(new ErrorHandler("Please fill the form!", 400))
    }

    const isConflict= await User.find({
        firstName: doctor_firstName,
        lastName: doctor_lastName,
        role: "Doctor",
        doctorDepartment: department
    })

    if(isConflict.length===0){
        return next(new ErrorHandler("Doctor not found!", 404));
    }
    if(isConflict.length > 1){
        return next(new ErrorHandler("Doctors conflict! Contact through email or phone", 404));
    }

    const doctorId= isConflict[0]._id;
    const patientId =req.user._id;

    const appointment= await Appoinment.create({
        firstName, lastName, email, phone, nic, dob, gender, appoinment_date, department,doctor:{
            firstName: doctor_firstName,
            lastName: doctor_lastName
        }, hasVisited, address,
        doctorId,
        patientId
    });
    res.status(200).json({
        success: true,
        message: "Appointment sent successfully"
    })
})