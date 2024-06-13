import React from "react";
import { IoMdCloseCircleOutline } from "react-icons/io";

const AppointForm = ({onClose}) => {
  return (
    <div className="fixed inset-0 bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
      <div className="w-2/3 flex flex-col">
        <button onClick={onClose} className="place-self-end mb-3">
          <IoMdCloseCircleOutline size={30}/>
        </button>
        <div className="w-full flex flex-col items-center bg-white rounded-2xl p-6">
          <h1 className="font-semibold text-2xl mb-3">Schedule Your Appointment</h1>
          <form
            className="w-full flex flex-col justify-center items-center"
            onSubmit=""
          >
            <div className=" w-full flex justify-around mb-6">
              <input
                className="w-96 h-10 bg-zinc-200 rounded-2xl px-4 outline-none"
                type="text"
                placeholder="First Name"
                // value={firstName}
                // onChange={(e) => setFirstName(e.target.value)}
              />
              <input
                className="w-96 h-10 bg-zinc-200 rounded-2xl px-4 outline-none"
                type="text"
                placeholder="Last Name"
                // value={lastName}
                // onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div className=" w-full flex justify-around mb-6">
              <input
                className="w-96 h-10 bg-zinc-200 rounded-2xl px-4 outline-none"
                type="text"
                placeholder="Date in dd/mm/yy"
                // value={email}
                // onChange={(e) => setEmail(e.target.value)}
              />
              <input
                className="w-96 h-10 bg-zinc-200 rounded-2xl px-4 outline-none"
                type="number"
                placeholder="Time in hh:mm"
                // value={phone}
                // onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className="w-full flex justify-around mb-6">
              <input
                className="w-96 h-10 bg-zinc-200 rounded-2xl px-4 outline-none"
                type="text"
                placeholder="Aadhar No."
                // value={nic}
                // onChange={(e) => setNic(e.target.value)}
              />
              <input
                className="w-96 h-10 bg-zinc-200 rounded-2xl px-4 outline-none"
                type="text"
                placeholder="Phone No"
                // value={dob}
                // onChange={(e) => setDob(e.target.value)}
              />
            </div>
            <div className=" w-full flex justify-around mb-6">
              <label className="w-96 h-10 bg-zinc-200 rounded-2xl px-4">
                <select
                  className="w-fit h-10 bg-zinc-200 rounded-2xl  border-0 outline-none"
                  name="selectedGender"
                //   value={gender}
                //   onChange={(e) => setGender(e.target.value)}
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
                placeholder="Dob"
                // value={password}
                // onChange={(e) => setPassword(e.target.value)}
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
