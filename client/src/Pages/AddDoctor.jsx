import React from "react";
import Sidebar from "../Components/Sidebar";

const AddDoctor = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className=" w-full flex items-center">
        <div className="w-full pl-7 pt-7 pr-7">
          <div className="add-admin-form bg-sky-200 w-full h-fit rounded-2xl px-5 py-3 flex flex-col items-center">
            <h1 className="font-semibold text-3xl mt-3 mb-5">Add New Doctor</h1>
            <div className="w-full h-fit mb-10">
              <form action="" method="post" className="">
                <div className="flex justify-around mb-6">
                  <input
                    className="h-10 bg-zinc-200 rounded-2xl px-4"
                    type="file"
                    //onChange={this.onFileChange}
                  />
                  <button className="w-40 h-10 bg-[#76dbcf] rounded-2xl px-4">
                    Upload!
                  </button>
                </div>
                <div className="flex justify-around mb-6">
                  <input
                    className="w-1/3 h-10 bg-zinc-200 rounded-2xl px-4"
                    type="text"
                    placeholder="First Name"
                    // value={firstName}
                    // onChange={(e) => setFirstName(e.target.value)}
                  />
                  <input
                    className="w-1/3 h-10 bg-zinc-200 rounded-2xl px-4"
                    type="text"
                    placeholder="Last Name"
                    // value={lastName}
                    // onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
                <div className="flex justify-around mb-6">
                  <input
                    className="w-1/3 h-10 bg-zinc-200 rounded-2xl px-4"
                    type="text"
                    placeholder="Email"
                    // value={email}
                    // onChange={(e) => setEmail(e.target.value)}
                  />
                  <input
                    className="w-1/3 h-10 bg-zinc-200 rounded-2xl px-4"
                    type="number"
                    placeholder="Mobile Number"
                    // value={phone}
                    // onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
                <div className="flex justify-around mb-6">
                  <input
                    className="w-1/3 h-10 bg-zinc-200 rounded-2xl px-4"
                    type="text"
                    placeholder="Aadhar No."
                    // value={firstName}
                    // onChange={(e) => setFirstName(e.target.value)}
                  />
                  <input
                    className="w-1/3 h-10 bg-zinc-200 rounded-2xl px-4"
                    type="text"
                    placeholder="Date Of Birth"
                    // value={lastName}
                    // onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
                <div className="flex justify-around mb-6">
                  <label className="w-1/3 h-10 bg-zinc-200 rounded-2xl px-4">
                    <select
                      className="w-fit h-10 bg-zinc-200 rounded-2xl  border-0"
                      name="selectedGender"
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
                    className="w-1/3 h-10 bg-zinc-200 rounded-2xl px-4"
                    type="text"
                    placeholder="Password"
                    // value={lastName}
                    // onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
                <div className="w-full flex justify-center">
                  <input
                    className="w-1/3 h-10 bg-zinc-200 rounded-2xl px-4 "
                    type="text"
                    placeholder="Department"
                    // value={lastName}
                    // onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
                <div className="flex w-full justify-center mt-6">
                  <button
                    className="w-96 bg-[#76dbcf] rounded-2xl h-10 font-semibold"
                    type="submit"
                  >
                    ADD NEW DOCTOR
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddDoctor;
