const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

//middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

//db connection
const uri=`${process.env.MONGO_URI}/E-healthcare}`
mongoose
  .connect(uri)
  .then(() => console.log(`connected to MongoDB on ${process.env.MONGO_URI}`))
  .catch((err) => console.log(err));

//routes
app.get("/", (req, res) => res.json({message: "Welcome to the root of the server"}));

//server
app.listen(PORT, () =>
  console.log(`server is running on http://localhost:${PORT}`)
);
