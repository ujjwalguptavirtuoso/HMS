import React from "react";
import { useContext } from "react";
import { Context } from "../main";
import { useState } from "react";

export const Department = ({ data }) => {
  const dep = data;
  return (
    <div className="flex bg-white box-border h-60 w-52 rounded-3xl p-4 border-4 shadow-[0_24px_40px_-15px_rgba(0,0,0,0.3)] flex-col items-center mx-14 mb-10">
      <button className="w-40 h-40 rounded-full border-2 border-emerald-300">
        <img src="" alt="" />
      </button>
      <h4 className="text-black font-semibold text-2xl mt-2">{dep}</h4>
    </div>
  );
};
