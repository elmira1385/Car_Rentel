import React, { useState } from "react";
import headerHamber from "../images/download.svg";
import headerIcon from "../images/logo-CF3gF4eH.svg";
import { clsx } from "clsx";
import { useNavigate } from "react-router";
import useTrueOrFalse from "../store/useTrueOrFalse";
import search from "../images/search.svg"

const Header = () => {
  const { isOpen, setIsOpen } = useTrueOrFalse();
  const navigate =useNavigate()
  return (
    <header
      
      className="flex w-full sm:justify-around sm:h-[75px] h-[65px] justify-between items-center px-[18px] border-b border-b-gray-300 bg-[#f1f5f9]"
    >
      <img src={headerIcon} alt="" />
      <div className="hidden sm:flex gap-8  justify-center items-center">
        <ul className="sm:flex gap-8 *:text-gray-600">
            <li onClick={()=>{
            navigate("/")
            setIsOpen(false)
          }}>Home</li>
          <li onClick={()=>{
            navigate("/cars")
            setIsOpen(false)
          }}>Cars</li>
          <li onClick={()=>{
            navigate("/my-bookings")
            setIsOpen(false)
          }}>My Booking</li>
        </ul>
        <div className="sm:flex gap-2 border px-2 py-1 rounded-2xl border-gray-300">
          <input className="placeholder:text-gray-500 outline-0" placeholder="search cars" type="text" />
           <img src={search} alt="" />
        </div>
        <div className="sm:flex gap-6">
            <button className="text-gray-600">List cars</button>
            <button className="text-white bg-[#2563eb] px-8 py-2 rounded-lg">Login</button>
        </div>
      </div>
      <button className="sm:hidden"
        onClick={() => {
          if (isOpen) {
            setIsOpen(false);
          } else {
            setIsOpen(true);
          }
        }}
      >
        {isOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#949494"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        ) : (
          <img src={headerHamber} alt="" />
        )}
      </button>
      <div
        className={clsx(
          "fixed  flex flex-col gap-6 items-start top-16 z-50 bg-[#f1f5f9] w-full h-full p-4 transition-all duration-300",
          {
            "-right-full": !isOpen,
            "right-0": isOpen,
          }
        )}
      >
        <ul className="flex flex-col gap-4  *:text-[16px] *:text-gray-600 *:cursor-pointer">
          <li onClick={()=>{
            navigate("/")
            setIsOpen(false)
          }}>Home</li>
          <li onClick={()=>{
            navigate("/cars")
            setIsOpen(false)
          }}>Cars</li>
          <li onClick={()=>{
            navigate("/my-bookings")
            setIsOpen(false)
          }}>My Booking</li>
          <li>List Cars</li>
        </ul>
        <button className="bg-[#2563eb] rounded-lg text-white px-8 py-2">
          Login
        </button>
      </div>
    </header>
  );
};

export default Header;
