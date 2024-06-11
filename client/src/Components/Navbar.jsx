import React from "react";
import { Link, useNavigate } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="w-full h-18 flex justify-between items-center px-5">
      <div className="logo">logo</div>
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
      <div className="profile w-14">
        <img src="/profile.png" alt="" />
      </div>
    </nav>
  );
};
