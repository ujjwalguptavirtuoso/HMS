import express from "express"
import {postAppointment,getAllAppointments,updateAppointmentStatus,deleteAppointment} from "../controllers/appoinment.controllers.js";
import {isAdminAuthenticated, isPatientAuthenticated} from "../middlewares/auth.middleware.js";

const router=express.Router();

router.post("/post", postAppointment);
router.get("/getall", isAdminAuthenticated, getAllAppointments);
router.put("/update/:id", isAdminAuthenticated, updateAppointmentStatus);
router.delete("/delete/:id", isAdminAuthenticated, deleteAppointment);

export default router;