
import Comment from "./Comment";
import { motion } from "motion/react";

const What_Our_Customers_Say = () => {
  return (
    <motion.div initial={
            {
              opacity:0
            }
          } transition={{
            duration:1
          }} whileInView={{
            opacity:1
          }} viewport={{
            once:true
          }} className="flex flex-col py-30 px-6 gap-24">
      <div className="flex flex-col justify-center items-center">
        <p className="text-[36px] text-center font-semibold sm:text-[40px]">What Our Customers Say</p>
        <p className="text-center text-[14px] sm:text-[16px] sm:w-160 text-gray-500">
          Discover why discerning travelers choose StayVenture for their luxury
          accommodations around the world.
        </p>
      </div>
      <div className="flex flex-col gap-4 sm:flex-row sm:px-42 sm:gap-8">
       <Comment image="./src/images/women1.png" firstName="Emma Rodriguez" address="Barcelona, Spain">
       "I've rented cars from various companies, but the experience with CarRental was exceptional."
       </Comment>
       <Comment image="./src/images/women2.png" firstName="John Smith" address="New York, USA">
       "CarRental made my trip so much easier. The car was delivered right to my door, and the customer service was fantastic!"
       </Comment>
       <Comment image="./src/images/women1.png" firstName="Ava Johnson" address="Sydney, Australia">
       "I highly recommend CarRental! Their fleet is amazing, and I always feel like I'm getting the best deal with excellent service."
       </Comment>
      </div>
    </motion.div>
  );
};

export default What_Our_Customers_Say;
