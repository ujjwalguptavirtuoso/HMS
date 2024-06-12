import { Router } from "express";
import {upload} from "../middlewares/multer.middleware.js"
import {userLogin, registerPatient, registerAdmin, registerDoctor, getAllDoctors, getUserDetails, logoutAdmin, logoutPatient, logoutDoctor} from "../controllers/user.controllers.js";
import {isAdminAuthenticated, isPatientAuthenticated, isDoctorAuthenticated} from "../middlewares/auth.middleware.js"

const router=Router();

/*_____________________________________LOGIN ROUTE______________________________________*/
router.route("/login").post(userLogin);


/*______________________________PATIENT ROUTES_________________________________________*/
router.route("/patient/register").post(upload.fields([{name: "avatar", maxCount: 1}]),registerPatient);
router.get("/patient/profile", isPatientAuthenticated, getUserDetails);
router.get("/patient/logout", isPatientAuthenticated, logoutPatient);


/*______________________________ADMIN ROUTES___________________________________________*/
router.route("/admin/register", isAdminAuthenticated, registerAdmin);
router.get("/admin/profile", isAdminAuthenticated, getUserDetails);
router.get("/admin/logout", isAdminAuthenticated, logoutAdmin);


/*______________________________DOCTOR ROUTES___________________________________________*/
router.get("/doctors", getAllDoctors);
router.route("/doctor/register", isDoctorAuthenticated, registerDoctor);
router.get("/doctor/profile", isDoctorAuthenticated, getUserDetails)
router.get("/doctor/logout", isDoctorAuthenticated, logoutDoctor)


export default router;