import React from "react";


export const Navbar = () => {
    return(
      <nav className="flex justify-around items-center shadow-xl py-[20px] px-[30px] flex-row gap-[20px] bg-[#fff]  ">
        <a href="" className="text-[28px] font-[500] text-[#2E5CFF] leading-[34%] ">Fintekk</a>

        <ul className="flex flex-row justify-center items-center gap-[30px] ">
            <li><a href="" className="text-[24px] font-[300] text-[#171717] ">Home</a></li>
            <li><a href="" className="text-[24px] font-[300] text-[#171717] ">About</a></li>
            <li><a href="" className="text-[24px] font-[300] text-[#171717] ">FAQs</a></li>
            <li><a href="" className="text-[24px] font-[300] text-[#171717] ">Contact Us</a></li>
        </ul>

        <div className="flex flex-row justify-center items-center gap-[30px] ">
            <button className="text-[#2E5CFF] font-[500] text-[21px] px-[24px] border border-[#2E5CFF] rounded-[16px]  py-[10px] ">Login</button>
            <button className="text-[#fff] font-[500] bg-[#2E5CFF] text-[21px] px-[24px] border border-[#2E5CFF] rounded-[16px]  py-[10px] ">Sign Up For Free</button>
        </div>
      </nav>
    )
}