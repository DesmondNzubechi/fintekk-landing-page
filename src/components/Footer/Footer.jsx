import React from "react";


export const Footer = () => {
    return(
        <div  className="bg-[#FBFBFB] py-[50px] px-[50px] ">

            <div className="grid grid-cols-2 md:grid-cols-6  items-start gap-[10px] ">
<div className=" flex flex-col gap-[20px] col-span-2 items-start">
    <h1 className="md:text-[25px] text-[22px]  font-[500] text-[#172E80] leading-[24.26px]  ">Fintekk</h1>
    <p className="font-[300] md:text-[20px] text-[17px] text-[#777777] ">Fintekk is the bank that does it all. Manage everything directly and easy with fintekk.</p>
</div>
<div className="flex flex-col gap-[20px] justify-center items-start">
    <h1 className="md:text-[25px] text-[22px] font-[500] text-[#172E80] leading-[24.26px]  ">Company</h1>
    <a href="#" className="font-[300] md:text-[20px] text-[17px] text-[#172E80] ">Careers</a>
    <a href="#" className="font-[300] md:text-[20px] text-[17px] text-[#172E80] ">About Us</a>
    <a href="#" className="font-[300] md:text-[20px] text-[17px] text-[#172E80] ">Privacy</a>
    <a href="#" className="font-[300] md:text-[20px] text-[17px] text-[#172E80] ">Terms</a>
</div>
<div className="flex flex-col gap-[20px] justify-center items-start">
  <h1 className="md:text-[25px] text-[22px] font-[500] text-[#172E80] leading-[24.26px]  ">Services</h1>
  <a href="" className="font-[300] md:text-[20px] text-[17px] text-[#172E80] ">Payments</a>
  <a href="" className="font-[300] md:text-[20px] text-[17px] text-[#172E80] ">Investments</a>
  <a href="" className="font-[300] md:text-[20px] text-[17px] text-[#172E80] ">Savings Plans</a>
</div>
<div className="flex flex-col gap-[20px] justify-center items-start">
    <h1 className="md:text-[25px] text-[22px] font-[500] text-[#172E80] leading-[24.26px]  ">Company</h1>
    <a href="#" className="font-[300] md:text-[20px] text-[17px] text-[#172E80] ">Media</a>
    <a href="#" className="font-[300] md:text-[20px] text-[17px] text-[#172E80] ">FAQs</a>
    <a href="#" className="font-[300] md:text-[20px] text-[17px] text-[#172E80] ">Help Center</a>
    <a href="#" className="font-[300] md:text-[20px] text-[17px] text-[#172E80] ">Security</a>
</div>
<div className="flex flex-col gap-[20px] justify-center items-start">
  <h1 className="md:text-[25px] text-[22px] font-[500] text-[#172E80] leading-[24.26px]  ">Contact Us</h1>
  <a href="" className="font-[300] md:text-[20px]  text-[17px] text-[#172E80] ">www.fintekk.com</a>
  </div>
            </div>
<div className="flex pt-[60px] flex-row justify-between items-start ">
  <p className="md:text-[20px] text-[15px] text-[#172E80] leading-[24.26px] font-[400] ">Copyright 2022 fintekk. All rights reserved</p>  
  <p className="text-[20px] md:flex hidden text-[#172E80] leading-[24.26px] font-[400] ">Terms and Conditions, Privacy Policy</p>
</div>
        </div>
    )
}