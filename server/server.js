import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import {config} from "dotenv";
import {errorMiddleware} from './middlewares/errorMiddleware'

config();
const app = express();
const PORT = process.env.PORT || 3000;

//middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

//db connection
const uri = `${process.env.MONGO_URI}/E-healthcare}`;
mongoose
  .connect(uri)
  .then(() => console.log(`connected to MongoDB on ${process.env.MONGO_URI}`))
  .catch((err) => console.log(err));

//routes
app.get("/", (req, res) =>
  res.json({ message: "Welcome to the root of the server" })
);

//error-middleware
app.use(errorMiddleware)

//server
app.listen(PORT, () =>
  console.log(`server is running on http://localhost:${PORT}`)
);
