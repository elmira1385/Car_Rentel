import React, { useState } from "react";
import headerHamber from "../images/download.svg";
import headerIcon from "../images/logo-CF3gF4eH.svg";
import { clsx } from "clsx";
import useTrueOrFalse from "../store/useTrueOrFalse";

const Header = () => {
  const { isOpen, setIsOpen } = useTrueOrFalse();
  return (
    <header className="flex w-full  h-[65px] justify-between items-center px-[18px] border-b border-b-gray-300">
      <img src={headerIcon} alt="" />
      <button
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
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
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
          "fixed flex flex-col gap-6 items-start top-16 bg-[#f1f5f9] w-full h-full p-4 transition-all duration-300",
          {
            "-right-full": !isOpen,
            "right-0": isOpen,
          }
        )}
      >
        <ul className="flex flex-col gap-4  *:text-[16px] *:text-gray-600">
          <li>Home</li>
          <li>Cars</li>
          <li>My Booking</li>
          <li>List Cars</li>
        </ul>
        <button className="bg-[#2563eb] rounded-lg text-white px-8 py-2">Login</button>
      </div>
    </header>
  );
};

export default Header;
