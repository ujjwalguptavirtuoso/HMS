import React from "react";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AppointForm = ({ onClose }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [nic, setNic] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [appointmentDate, setAppointmentDate] = useState("");
  const [department, setDepartment] = useState("Pediatrics");
  const [doctorFirstName, setDoctorFirstName] = useState("");
  const [doctorLastName, setDoctorLastName] = useState("");
  const [address, setAddress] = useState("");
  const [hasVisited, setHasVisited] = useState(false);
  const handleAppointment = async (e) => {
    e.preventDefault();
    try {
      const hasVisitedBool = Boolean(hasVisited);
      const { data } = await axios.post(
        "http://localhost:8000/api/v1/appoinments/post",
        {
          firstName,
          lastName,
          email,
          phone,
          nic,
          dob,
          gender,
          appointment_date: appointmentDate,
          department,
          doctor_firstName: doctorFirstName,
          doctor_lastName: doctorLastName,
          hasVisited: hasVisitedBool,
          address,
        },
        {
          //withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );
      toast.success(data.message);
      setFirstName(""),
        setLastName(""),
        setEmail(""),
        setPhone(""),
        setNic(""),
        setDob(""),
        setGender(""),
        setAppointmentDate(""),
        setDepartment(""),
        setDoctorFirstName(""),
        setDoctorLastName(""),
        setHasVisited(""),
        setAddress("");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
  // const [depart, firstname, lastname] = dept;
  // console.log(depart);
  return (
    <div className="fixed inset-0 bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
      <div className="w-2/3 flex flex-col">
        <button onClick={onClose} className="place-self-end mb-3">
          <IoMdCloseCircleOutline size={30} />
        </button>
        <div className="w-full flex flex-col items-center bg-white rounded-2xl p-6">
          <h1 className="font-semibold text-2xl mb-3">
            Schedule Your Appointment
          </h1>
          <form
            className="w-full flex flex-col justify-center items-center"
            onSubmit={handleAppointment}
          >
            <div className=" w-full flex justify-around mb-6">
              <input
                className="w-96 h-10 bg-zinc-200 rounded-2xl px-4 outline-none"
                type="text"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <input
                className="w-96 h-10 bg-zinc-200 rounded-2xl px-4 outline-none"
                type="text"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div className=" w-full flex justify-around mb-6">
              <input
                className="w-96 h-10 bg-zinc-200 rounded-2xl px-4 outline-none"
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                className="w-96 h-10 bg-zinc-200 rounded-2xl px-4 outline-none"
                type="number"
                placeholder="Phone No"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className="w-full flex justify-around mb-6">
              <input
                className="w-96 h-10 bg-zinc-200 rounded-2xl px-4 outline-none"
                type="text"
                placeholder="Aadhar No."
                value={nic}
                onChange={(e) => setNic(e.target.value)}
              />
              <input
                className="w-96 h-10 bg-zinc-200 rounded-2xl px-4 outline-none"
                type="text"
                placeholder="Dob"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
              />
            </div>
            <div className=" w-full flex justify-around mb-6">
              <label className="w-96 h-10 bg-zinc-200 rounded-2xl px-4">
                <select
                  className="w-fit h-10 bg-zinc-200 rounded-2xl  border-0 outline-none"
                  name="selectedGender"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                >
                  <option className="w-fit" value="">
                    Gender
                  </option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="nosay">prefer not to say</option>
                </select>
              </label>
              <input
                className="w-96 h-10 bg-zinc-200 rounded-2xl px-4 outline-none"
                type="text"
                placeholder="Appointment date"
                value={appointmentDate}
                onChange={(e) => setAppointmentDate(e.target.value)}
              />
            </div>
            <div className="flex w-full justify-center mt-3">
              <button
                className="w-96 bg-[#76dbcf] rounded-2xl h-10 font-semibold"
                type="submit"
              >
                Confirm Appointment
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AppointForm;
