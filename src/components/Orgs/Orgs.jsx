import React from "react";
import cnbc from '../images/cdn.png';
import bloomberg from '../images/bloomberg.png';
import forbes from '../images/forbes.png';
import stripe from '../images/stripe.png';
import quartz from '../images/quartz.png';

export const Orgs = () => {
    return (
   <div className="bg-[#FBFBFB]  px-[20px] py-[30px]  items-center grid grid-cols-5 gap-[20px] ">
    <img src={bloomberg} alt="" className=" p-[20px]" />
    <img src={cnbc} alt="" className=" p-[20px]  "/>
    <img src={forbes} alt="" className=" p-[20px] "/>
    <img src={stripe} alt="" className=" p-[20px]"/>
    <img src={quartz} alt="" className="p-[20px] "/>
   </div>
    )
}