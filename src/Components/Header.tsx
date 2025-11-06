import React, { useState } from 'react'
import headerHamber from "../images/download.svg"
import headerIcon from "../images/logo-CF3gF4eH.svg"
import { clsx } from 'clsx'

const Header = () => {
  const[open,setopen]=useState(false)
  return (
    <header className="flex w-full h-[65px] justify-between items-center px-[18px] border-b border-b-gray-300">
      <img src={headerIcon} alt="" />
      <button onClick={()=>{
        if(open){
          setopen(false)
        }else{
          setopen(true)
        }
      }} >
        <img src={headerHamber} alt="" />
      </button>
      <div className={clsx("fixed top-17  bg-gray-700 w-full h-full p-4 transition-all duration-300",{
        "-right-full":!open,
        "right-0":open
      })}>
        <ul className="flex flex-col gap-3  *:text-[16px]">
          <li>Home</li>
          <li>Cars</li>
          <li>My Booking</li>
          <li>List Cars</li>
        </ul>
        <button className="">login</button>
      </div>
    </header>
  );
}

export default Header