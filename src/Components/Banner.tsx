import React from "react";
import bannerCar from "../images/banner_car_image.png"
const Banner = () => {
  return (
    <div className="flex flex-col rounded-2xl gap-10 bg-linear-to-r from-[#0558FE] to-[#A9CFFF] px-8 pt-8 pb-2 m-4">
      <div className="flex flex-col gap-4 items-start">
        <p className="text-[30px] font-medium text-white">Do You Own a Luxury Car?</p>
        <p className="text-white">
          Monetize your vehicle effortlessly by listing it on CarRental. We take
          care of insurance, driver verification and secure payments — so you
          can earn passive income, stress-free.
        </p>
        <button className="text-[#0558FE] bg-white px-5 py-2 rounded-md hover:scale-105">List your car</button>
      </div>
      <div><img src={bannerCar} alt="" /></div>
    </div>
  );
};

export default Banner;
