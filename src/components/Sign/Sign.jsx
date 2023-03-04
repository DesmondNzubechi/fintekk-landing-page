import React from "react";


export const SignUp = () => {
    return(
       
            <div className=" flex flex-col py-[60px] gap-[30px] my-[80px] rounded-[40px] mx-[50px] bg-[#2E5CFF] jutify-center items-center ">
                <h1 className="text-center flex flex-col  text-[40px] text-[#fff] font-[700]  ">
                <span>Start growing </span>  <span> your wealth today</span>
                </h1>
                <div className="border border-[#fff] p-[2px] gap-[100px] rounded-[50px]  flex  flex-row justify-between  ">
                    <input className="border-0 bg-[#2E5CFF] px-[20px] rounded-[50px] outline-0 " type="email" name="Email" placeholder="Enter your email address" id="" />
                    <button className="bg-[#fff] py-[15px] rounded-[50px] px-[25px] text-[#3A3A3A] ">Sign up</button>
                </div>
            </div>
       
    )
}