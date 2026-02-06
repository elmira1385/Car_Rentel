
import mainCar from "../images/main_car.png"

const Luxury_cars_on_Rent = () => {
  return (
    <div
    
      className=" bg-[#f1f5f9] flex flex-col justify-center items-center sm:py-20 py-30 gap-16"
    >
      <div className="flex flex-col  justify-center items-center gap-12 px-14 ">
        <div>
          <p className="text-[36px] font-semibold sm:text-[46px] ">Luxury cars on Rent</p>
        </div>
        <div className="flex flex-col sm:pl-10 sm:flex-row sm:rounded-full sm:gap-20 items-start w-full gap-4 bg-white p-6 rounded-xl shadow-xl">
          <div className="flex flex-col  sm:flex-row items-start w-full gap-10 ">
            <div className="flex flex-col sm:flex  gap-2 ">
              <select name="pickup_location" id="pickup_location">
                <option id="pickup_location" value="">
                  Pickup Location
                </option>
                <option id="pickup_location" value="">
                  New York
                </option>
                <option id="pickup_location" value="">
                  Los Angeles
                </option>
                <option id="pickup_location" value="">
                  Houston
                </option>
                <option id="pickup_location" value="">
                  Chicago
                </option>
              </select>
              <span className="text-gray-500  text-[14px]">
                Please select location
              </span>
            </div>
            <div className="flex flex-col sm:flex gap-2 ">
              <label htmlFor="Pickup-Date">Pick-up Date</label>
              <input
                className="text-gray-500 text-[14px]"
                id="Pickup-Date"
                type="date"
              />
            </div>
            <div className="flex flex-col sm:flex gap-2 ">
              <label htmlFor="Return-Date">Return Date</label>
              <input
                className="text-gray-500 text-[14px]"
                id="Return-Date"
                type="date"
              />
            </div>
          </div>
          <div>
            <button className="flex hover:scale-105 transition-all cursor-pointer hover:bg-blue-700 gap-2 bg-[#2563EB] items-center justify-center px-8 py-3 rounded-full">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.626 10.6259L14.7088 14.7092"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8.96293 11.7488C11.6387 10.6116 12.886 7.52063 11.7488 4.84487C10.6116 2.16912 7.52063 0.921849 4.84488 2.05902C2.16913 3.19619 0.921857 6.28717 2.05902 8.96292C3.19619 11.6387 6.28718 12.8859 8.96293 11.7488Z"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <p className="text-white ">Search</p>
            </button>
          </div>
        </div>
      </div>
      <div>
        <img className="max-h-74" src={mainCar} alt="" />
      </div>
    </div>
  );
};

export default Luxury_cars_on_Rent;
