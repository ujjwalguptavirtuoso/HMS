import express from "express"
import {postAppointment,getAllAppointments,updateAppointmentStatus,deleteAppointment} from "../controllers/appoinment.controllers.js";
// import {};

const router=express.Router();

router.post('/post',postAppointment)
router.get('/get',getAllAppointments)
router.put('/update',updateAppointmentStatus)
router.delete('/delete',deleteAppointment)

export default router;