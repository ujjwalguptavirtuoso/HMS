import { Router } from "express";
import {upload} from "../middlewares/multer.middleware.js"
import {userLogin, registerPatient, registerAdmin, registerDoctor, getAllDoctors, getUserDetails} from "../controllers/user.controllers.js";
import {isAdminAuthenticated, isPatientAuthenticated, isDoctorAuthenticated} from "../middlewares/auth.middleware.js"

const router=Router();

router.route("/patient/register").post(upload.fields([{name: "avatar", maxCount: 1}]),registerPatient);
router.route("/login").post(userLogin);
router.route("/admin/register", isAdminAuthenticated, registerAdmin);
router.route("/doctor/register", isDoctorAuthenticated, registerDoctor);

router.get("/doctors", getAllDoctors);
router.get("/admin/profile", isAdminAuthenticated, getUserDetails)
router.get("/doctor/profile", isDoctorAuthenticated, getUserDetails)
router.get("/patient/profile", isPatientAuthenticated, getUserDetails)

export default router;