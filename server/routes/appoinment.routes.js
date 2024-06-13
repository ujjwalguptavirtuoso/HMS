import express from "express"
import { postAppointment } from "../controllers/appoinment.controllers";
// import {};

const router=express.Router();

router.post('/post',postAppointment)

export default router;