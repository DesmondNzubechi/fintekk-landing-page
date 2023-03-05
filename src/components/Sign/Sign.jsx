import React from "react";


export const SignUp = () => {
    return(
       <div className="flex justify-center px-[30px] py-[50px]">
            <div className=" flex flex-col px-[80px] py-[60px] gap-[30px]  rounded-[40px] md:min-w-[700px] lg:min-w-[1000px]  md:mx-[50px] bg-[#2E5CFF] jutify-center md:items-center items-start ">
                <h1 className=" md:text-center md:self-center text-[25px]  md:text-[50px] text-[#fff] font-[700]  ">
                Start growing <br /> your wealth today
                </h1>
                
                <div className="border border-[#fff] p-[10px] w-fit md:p-[2px] gap-[20px] rounded-[10px] md:rounded-[50px]  flex  flex-row justify-between  ">
                    <input className="border-0 bg-[#2E5CFF]  px-[20px] rounded-[50px] outline-0 " type="email" name="Email" placeholder="Enter your email address" id="" />
                    <button className="bg-[#fff] hidden md:flex py-[15px] rounded-[50px] px-[25px] text-[#3A3A3A] ">Sign up</button>
               
                </div>
                <button className="bg-[#fff] self-start flex md:hidden  py-[10px] rounded-[10px] px-[20px] text-[#3A3A3A] ">Sign up</button>
                
            </div>
            </div>
       
    )
}