import React from "react";
import star from "../images/Group 5182.png"

type TcommentType={
    firstName:string,
    address:string
    image:string
    children:React.ReactNode
}
const Comment = ({firstName,address,image,children}:TcommentType) => {
  return (
    <div className="flex flex-col gap-4 p-6 shadow-xl rounded-2xl">
        <div className="flex gap-2  items-center">
            <div>
                <img className="w-12 h-12 " src={image} alt="" />
            </div>
            <div className="flex flex-col ">
              <p className="text-[20px]">{firstName}</p>
              <p className="text-[16px] text-gray-600">{address}</p>
            </div>
        </div>
        <div>
            <img  src={star} alt="" />
        </div>
        <div className="text-gray-500">
           {children}
        </div>
    </div>
  )
};

export default Comment;
