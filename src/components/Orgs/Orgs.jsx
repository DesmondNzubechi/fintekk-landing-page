import React from "react";
import cnbc from '../images/cdn.png';
import bloomberg from '../images/bloomberg.png';
import forbes from '../images/forbes.png';
import stripe from '../images/stripe.png';
import quartz from '../images/quartz.png';

export const Orgs = () => {
    return (
   <div className="bg-[#FBFBFB] relative  px-[20px] hover:overflow-x-auto md:overflow-x-hidden py-[30px]  items-center flex flex-row gap-[20px] ">
    <img src={bloomberg} alt="" className=" min-w-[150px] max-w-[250px] p-[20px]" />
    <img src={cnbc} alt="" className="min-w-[150px] p-[20px]  "/>
    <img src={forbes} alt="" className="min-w-[150px] p-[20px] "/>
    <img src={stripe} alt="" className="min-w-[150px] p-[20px]"/>
    <img src={quartz} alt="" className="p-[20px] min-w-[150px]"/>
   </div>
    )
}