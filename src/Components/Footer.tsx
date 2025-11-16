import React from "react";
import logoFooter from "../images/logo-CF3gF4eH.svg";
import { motion } from "motion/react";
const Footer = () => {
  return (
    <motion.div initial={
                {
                  opacity:0
                }
              } transition={{
                duration:1
              }} animate={{
                opacity:1
              }} viewport={{
                once:true
              }} className="flex flex-col gap-2 pb-10 px-6 sm:px-30 sm:pb-3 sm:pt-30">
      <div className="flex flex-col gap-10 sm:flex-row sm:justify-between">
        <div className="flex flex-col gap-4 items-start ">
          <img className="h-8" src={logoFooter} alt="" />
          <p className="text-[14px] text-gray-500 pr-18 sm:w-100">
            Premium car rental service with a wide selection of luxury and
            everyday vehicles for all your driving needs.
          </p>
          <div className="flex gap-3">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 1.66675H12.5C11.3949 1.66675 10.3351 2.10573 9.55372 2.88714C8.77231 3.66854 8.33333 4.72835 8.33333 5.83341V8.33341H5.83333V11.6667H8.33333V18.3334H11.6667V11.6667H14.1667L15 8.33341H11.6667V5.83341C11.6667 5.6124 11.7545 5.40044 11.9107 5.24416C12.067 5.08788 12.279 5.00008 12.5 5.00008H15V1.66675Z"
                stroke="#64748B"
                strokeWidth="1.66667"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.1667 1.66675H5.83334C3.53215 1.66675 1.66667 3.53223 1.66667 5.83341V14.1667C1.66667 16.4679 3.53215 18.3334 5.83334 18.3334H14.1667C16.4679 18.3334 18.3333 16.4679 18.3333 14.1667V5.83341C18.3333 3.53223 16.4679 1.66675 14.1667 1.66675Z"
                stroke="#64748B"
                strokeWidth="1.66667"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M13.3333 9.47501C13.4362 10.1685 13.3177 10.8769 12.9948 11.4992C12.6719 12.1215 12.161 12.6262 11.5347 12.9414C10.9084 13.2566 10.1987 13.3663 9.50648 13.255C8.81427 13.1436 8.1748 12.8167 7.67903 12.321C7.18326 11.8252 6.85644 11.1857 6.74505 10.4935C6.63366 9.8013 6.74338 9.09159 7.0586 8.46532C7.37382 7.83905 7.87848 7.32812 8.50082 7.00521C9.12315 6.68229 9.83146 6.56383 10.525 6.66667C11.2324 6.77158 11.8874 7.10123 12.3931 7.60693C12.8988 8.11263 13.2284 8.76757 13.3333 9.47501Z"
                stroke="#64748B"
                strokeWidth="1.66667"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M14.5833 5.41675H14.5917"
                stroke="#64748B"
                strokeWidth="1.66667"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.3333 3.33343C18.3333 3.33343 17.75 5.08343 16.6667 6.16677C18 14.5001 8.83334 20.5834 1.66667 15.8334C3.50001 15.9168 5.33334 15.3334 6.66667 14.1668C2.50001 12.9168 0.416672 8.0001 2.50001 4.16677C4.33334 6.33343 7.16667 7.58343 10 7.5001C9.25 4.0001 13.3333 2.0001 15.8333 4.33343C16.75 4.33343 18.3333 3.33343 18.3333 3.33343Z"
                stroke="#64748B"
                strokeWidth="1.66667"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.6667 3.33325H3.33334C2.41286 3.33325 1.66667 4.07944 1.66667 4.99992V14.9999C1.66667 15.9204 2.41286 16.6666 3.33334 16.6666H16.6667C17.5871 16.6666 18.3333 15.9204 18.3333 14.9999V4.99992C18.3333 4.07944 17.5871 3.33325 16.6667 3.33325Z"
                stroke="#64748B"
                strokeWidth="1.66667"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M18.3333 5.83325L10.8583 10.5833C10.6011 10.7444 10.3036 10.8299 10 10.8299C9.69641 10.8299 9.39895 10.7444 9.14167 10.5833L1.66667 5.83325"
                stroke="#64748B"
                strokeWidth="1.66667"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
        <div className="flex flex-col gap-3 ">
          <p className="font-medium">QUICK LINKS</p>
          <ul className="flex flex-col gap-1 *:text-[14px] *:text-gray-500">
            <li>Home</li>
            <li>Browse Cars</li>
            <li>List Your Car</li>
            <li>About Us</li>
          </ul>
        </div>
        <div className="flex flex-col gap-3 ">
          <p className="font-medium">RESOURCES</p>
          <ul className="flex flex-col gap-1 *:text-[14px] *:text-gray-500">
            <li>Help Center</li>
            <li>Terms of Service</li>
            <li>Privacy Policy</li>
            <li>Insurance</li>
          </ul>
        </div>
        <div className="flex flex-col gap-3 ">
          <p className="font-medium">CONTACT</p>
          <ul className="flex flex-col gap-1 *:text-[14px] *:text-gray-500">
            <li>1234 Luxury Drive</li>
            <li>San Francisco, CA 94107</li>
            <li>+1 (555) 123-4567</li>
            <li>car@example.com</li>
          </ul>
        </div>
      </div>
      <div className="py-6">
        <hr className="text-gray-400" />
      </div>
      <div className="flex flex-col gap-2 justify-center items-center sm:flex-row sm:justify-between">
         <p className="text-gray-500">© 2025 CarRental. All rights reserved.</p>
         <ul className="flex gap-6 text-gray-500">
            <li>Terms</li>
            <li>Privacy</li>
            <li>Cookies</li>
         </ul>
      </div>
    </motion.div>
  );
};

export default Footer;
