import express from "express";
import { sendMessage, getAllMessages } from "../controllers/msg.controllers.js";
import {isAdminAuthenticated} from "../middlewares/auth.middleware.js"

const router=express.Router();

router.post("/send", sendMessage);
router.get("/get-all-msg", isAdminAuthenticated, getAllMessages);

export default router;