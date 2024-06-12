import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./Pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Appointment from "./Pages/Appointment";
import About from "./Pages/About";
import QuickHelp from "./Pages/QuickHelp";
import DiabetesPredictor from "./Pages/DiabetesPredictor";
import ThyroidPredictor from "./Pages/ThyroidPredictor";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/aboutus" element={<About />} />
          <Route path="/quick-help" element={<QuickHelp />} />
          <Route path="/diabetes-predictor" element={<DiabetesPredictor />} />
          <Route path="/thyroid-predictor" element={<ThyroidPredictor />} />
        </Routes>
        <ToastContainer position="top-center" />
      </Router>
    </>
  );
};

export default App;
