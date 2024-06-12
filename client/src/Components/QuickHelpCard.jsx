import React from "react";
import { Link } from "react-router-dom";

const QuickHelpCard = ({data}) => {
    const service=data;
  return (
      <Link to="/diabetes-predictor"><div className="flex bg-white box-border h-60 w-52 rounded-3xl p-4 border-4 shadow-[0_24px_40px_-15px_rgba(0,0,0,0.3)] place-content-center items-center mx-14 my-10">
      <p className="text-black font-semibold text-2xl mt-2">
        {service}
      </p>
    </div>
    </Link>
    
  );
};

export default QuickHelpCard;
