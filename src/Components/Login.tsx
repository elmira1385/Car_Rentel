import React, { useState } from "react";
import useTrueOrFalse from "../store/useTrueOrFalse";


const Login = () => {
  const { isOpenLogin, setIsOpenLogin } = useTrueOrFalse();
  const [loginOrSignUp,setLoginOrSignUp]=useState(false)

  if (!isOpenLogin) return null;
  
  return (
    <div
      onClick={() => {
        setIsOpenLogin(false);
      }}
      className="w-full h-full bg-black/50 fixed top-0 left-0 z-20 flex justify-center items-center"
    >
      <div onClick={(e)=>{
          e.stopPropagation()
      }} className="flex  rounded-md flex-col justify-center items-center fixed  py-12 px-9 gap-4 bg-white z-50">
          <div>
            <p className="text-[24px] font-medium text-[#2563eb]">User <span className="text-gray-600">Login</span></p>
          </div>
          <form className="flex flex-col gap-4" onSubmit={(e)=>{
            e.preventDefault()
          }} >
            <div className="flex flex-col gap-2">
              <p className="text-gray-600 text-[14px]">Email</p>
              <input placeholder="Type here" className="border rounded-md text-[14px] placeholder:text-gray-400 border-gray-200 w-[300px] p-2 outline-[#2563eb]" type="email" />
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-gray-600 text-[14px]">Password</p>
              <input placeholder="Type here" className="border rounded-md text-[14px] placeholder:text-gray-400 border-gray-200 w-[300px] p-2 outline-[#2563eb]" type="password" />
            </div>
            <div className="flex">
              <p className="text-gray-600 text-[14px]">Create an account? <span onClick={()=>{
                setLoginOrSignUp(true)
              }} className="text-[#2563eb] cursor-pointer">click here</span></p>
            </div>
            <div className="flex justify-center ">
              <button type="submit" className="bg-[#2563eb] text-white px-32 rounded-md py-2 text-[14px] cursor-pointer hover:bg-blue-700">Login</button>
            </div>
          </form>
      </div>
    { loginOrSignUp&& <div onClick={(e)=>{
          e.stopPropagation()
      }} className="flex rounded-md flex-col justify-center items-center fixed top-1/2 left-1/2 -translate-1/2 py-12 px-9 gap-4 bg-white z-50">
          <div>
            <p className="text-[24px] font-medium text-[#2563eb]">User <span className="text-gray-600">Sign Up</span></p>
          </div>
          <form className="flex flex-col gap-4" onSubmit={(e)=>{
            e.preventDefault()
          }} >
            <div className="flex flex-col gap-2">
              <p className="text-gray-600 text-[14px]">Name</p>
              <input placeholder="Type here" className="border rounded-md text-[14px] placeholder:text-gray-400 border-gray-200 w-[300px] p-2 outline-[#2563eb]" type="text" />
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-gray-600 text-[14px]">Email</p>
              <input placeholder="Type here" className="border rounded-md text-[14px] placeholder:text-gray-400 border-gray-200 w-[300px] p-2 outline-[#2563eb]" type="email" />
            </div>
            <div className="flex flex-col gap-2">
              <p className="text-gray-600 text-[14px]">Password</p>
              <input placeholder="Type here" className="border rounded-md text-[14px] placeholder:text-gray-400 border-gray-200 w-[300px] p-2 outline-[#2563eb]" type="password" />
            </div>
            <div className="flex">
              <p className="text-gray-600 text-[14px]">Already have account?<span onClick={()=>{
                setLoginOrSignUp(false)
              }} className="text-[#2563eb] cursor-pointer">click here</span></p>
            </div>
            <div className="flex justify-center ">
              <button type="submit" className="bg-[#2563eb] text-white px-24 rounded-md py-2 text-[14px] cursor-pointer hover:bg-blue-700">Create Account</button>
            </div>
          </form>
      </div>}
    </div>
  );
};

export default Login;
