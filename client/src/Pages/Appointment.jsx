import React, { useState } from "react";
import { Navbar } from "../Components/Navbar";
import AppointForm from "../Components/AppointForm";

const Appointment = () => {

  const [showModal, setShowModal] = useState(false)

  return (
    <div className="sec-1 w-full h-screen bg-gradient-to-tl from-[#76dbcf]">
      <Navbar />
      <div className="header w-full flex justify-center mt-7">
        <h1 className="font-semibold text-2xl">Our Doctors</h1>
      </div>
      <div className="doc-details p-5 flex justify-around flex">
        <div className="flex bg-white box-border h-fit w-52 rounded-3xl p-4 border-4 shadow-[0_24px_40px_-15px_rgba(0,0,0,0.3)] flex-col items-center mx-14 mb-10">
          <div className="w-28 h-28 rounded-full border-2 border-emerald-300 mb-2">
            <img src="" alt="" />
          </div>
          <h1 className="text-black font-semibold text-xl ">Name</h1>
          <h1 className="text-black font-semibold text-xl">Department</h1>
          <button onClick={() => setShowModal(true)} className="w-40 bg-[#76dbcf] rounded-2xl h-10 font-semibold mt-2">
            Book Appointment
          </button>
          {showModal && <AppointForm onClose={() => setShowModal(false)} />}
        </div>
      </div>
    </div>
  );
};

export default Appointment;
