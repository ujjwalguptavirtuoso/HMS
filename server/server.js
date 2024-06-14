import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import {config} from "dotenv";
import {errorMiddleware } from "./middlewares/error.middlewares.js";
import userRouter from "./routes/user.routes.js";
import cookieParser from "cookie-parser";
import messageRouter from "./routes/msg.routes.js";
import fileUpload from "express-fileupload";
import cloudinary from "cloudinary";
import appointmentRouter from "./routes/appoinment.routes.js"
config();
const app = express();
const PORT = process.env.PORT || 3000;

//middlewares
app.use(cookieParser())
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
  })
);

//db connection
const uri = `${process.env.MONGO_URI}/E-healthcare`;
mongoose
  .connect(uri)
  .then(() => console.log(`connected to MongoDB on: ${mongoose.connection.host}`))
  .catch((err) => {
    console.log("Error connecting to MongoDB!!\n",err);
    process.exit(1);
  });

//routes
app.get("/", (req, res) =>
  res.json({ message: "Welcome to the root of the server" })
);
app.use("/api/v1/users",userRouter);
app.use("/api/v1/message",messageRouter);
app.use("/api/v1/appoinments", appointmentRouter)

//error-middleware
app.use(errorMiddleware)

  //cloudinary init
  cloudinary.v2.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  });

//server
app.listen(PORT, () =>
  console.log(`server is running on: http://localhost:${PORT}`)
);
