import { Router } from "express";
import {upload} from "../middlewares/multer.middleware.js"
import {userLogin, registerPatient} from "../controllers/user.controllers.js";

const router=Router();

router.route("/patient/register").post(upload.fields([{name: "avatar", maxCount: 1}]),registerPatient);
router.route("/login").post(userLogin);

export default router;