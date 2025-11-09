import React from "react";

const News = () => {
  return (
    <div className="flex flex-col gap-10 pb-30">
      <div className="flex flex-col justify-center items-center px-2 gap-2">
        <p className="text-[24px] font-semibold">Never Miss a Deal!</p>
        <p className="text-gray-500 text-center">
          Subscribe to get the latest offers, new arrivals, and exclusive
          discounts
        </p>
      </div>
      <form className="flex px-4 ">
        <input className="border border-gray-300 p-3 flex-1 rounded-l-md" placeholder="Enter your email id" type="email" />
        <button className="px-8 py-2 bg-[#2563eb] text-white rounded-r-md" type="submit">Subscribe</button>
      </form>
    </div>
  );
};

export default News;
