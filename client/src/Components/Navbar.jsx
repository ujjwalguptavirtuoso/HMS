import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../main";
import axios from "axios";
import { toast } from "react-toastify";

export const Navbar = () => {
  const patient = { name: "Patient" };
  const [isOpen, setIsOpen] = useState(false);
  const { isAuthenticated, setIsAuthenticated } = useContext(Context);

  const handleLogout = async () => {
    await axios
      .get("http://localhost:8000/api/v1/users/patient/logout", {
        //withCredentials: true,
      })
      .then((res) => {
        toast.success(res.data.message);
        setIsAuthenticated(false);
      })
      .catch((err) => {
        toast.error(err.response.data.message);
      });
  };

  const navigateTo = useNavigate();

  const goToLogin = () => {
    navigateTo("/login");
  };

  const goToRegister = () => {
    navigateTo("/register");
  };

  return (
    <nav className="w-full h-16 flex justify-between items-center px-5">
      <div className="logo w-10">
        <Link to={"/"}>
          <img className="ml-10" src="./image.png" alt="" />
        </Link>
      </div>
      <div className="nav-contains w-1/2 text-xl font-sans font-bold">
        <ul className="flex justify-between">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/appointment"}>Appointment</Link>
          </li>
          <li>
            <Link to={"/aboutus"}>About us</Link>
          </li>
          <li>
            <Link to={"/quick-help"}>Quick Help</Link>
          </li>
        </ul>
      </div>
      {isAuthenticated ? (
        <button
          className="w-32 h-10 bg-[#76dbcf] rounded-2xl font-semibold"
          onClick={handleLogout}
        >
          LOGOUT
        </button>
      ) : (
        <div className="flex">
          <button
            className="w-32 h-10 bg-[#76dbcf] rounded-2xl font-semibold mr-3"
            onClick={goToRegister}
          >
            REGISTER
          </button>
          <div>
            <button
              className=" realtive w-32 h-10 bg-[#76dbcf] rounded-2xl font-semibold"
              onClick={() => setIsOpen((prev) => !prev) }
            >
              LOGIN
            </button>
            {isOpen && (
              <div className="bg-[#76dbcf] absolute flex flex-col rounded-xl w-32 mt-3 font-semibold items-center">
                <Link to={"/login"} className="py-2">
                  Patient
                </Link>
                <Link to={"/logindoctor"} state="Doctor" className="">
                  Doctor
                </Link>
                <Link to={"/loginadmin"} state="Admin" className="py-2">
                  Admin
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
      {/* <div className="profile w-14">
        <img src="/profile.png" alt="" />
      </div> */}
    </nav>
  );
};
