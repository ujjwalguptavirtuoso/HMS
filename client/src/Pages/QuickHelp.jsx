import React from "react";
import { Navbar } from "../Components/Navbar";
import QuickHelpCard from "../Components/QuickHelpCard";

const QuickHelp = () => {
  return (
    <div className="sec-1 w-full h-screen bg-gradient-to-tl from-[#76dbcf]">
      <Navbar />
      <div className="w-full p-10 flex justify-center">
        <QuickHelpCard data={"Diabeties Prediction"}/>
        <QuickHelpCard data={"Heart Disease Prediction"}/>
        <QuickHelpCard data={"Coming Soon"}/>
        <QuickHelpCard data={"Coming Soon"}/>
      </div>
    </div>
  );
};

export default QuickHelp;
