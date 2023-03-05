import React from "react";


export const SignUp = () => {
    return(
       
            <div className=" flex flex-col px-[20px] py-[60px] gap-[30px] my-[80px] rounded-[40px] mx-[50px] bg-[#2E5CFF] jutify-center items-center ">
                <h1 className=" flex flex-col text-left md:text-center text-[50px] text-[#fff] font-[700]  ">
                Start growing <br /> your wealth today
                </h1>
                
                <div className="border border-[#fff] p-[10px] w-[100%] md:w-fit md:p-[2px] gap-[100px] rounded-[10px] md:rounded-[50px]  flex  flex-row justify-between  ">
                    <input className="border-0 bg-[#2E5CFF]  px-[20px] rounded-[50px] outline-0 " type="email" name="Email" placeholder="Enter your email address" id="" />
                    <button className="bg-[#fff] hidden md:flex py-[15px] rounded-[50px] px-[25px] text-[#3A3A3A] ">Sign up</button>
               
                </div>
                <button className="bg-[#fff] self-start flex md:hidden  py-[10px] rounded-[10px] px-[20px] text-[#3A3A3A] ">Sign up</button>
                
            </div>
       
    )
}