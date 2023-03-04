import React from "react";
import { BsArrowRightShort } from 'react-icons/bs';
import payment from '../images/hand.png';
import investment from '../images/coin.png';
import saving from '../images/saving.png';

export const Services = () => {
    return (
        <div className="bg-[#FBFBFB] py-[50px] px-[20px] ">
            <div className="flex flex-col items-center justify-center text-center ">
                <h1 className=" text-[#3A3A3A] text-[24px] font-[400]  ">OUR SERVICES</h1>
                <h1 className="text-[#172E80] font-[500] text-[50px]  ">What we offer</h1>
                <div>
                <p className=" text-center flex justify-center text-[20px]  font-[300] max-w-[700px] ">We help individuals become more flexible and responsible with their finances and handle  payments smooth and easy. </p>
                </div>
               </div>
            <div className="flex justify-center items-center mt-[30px] gap-[40px] flex-col md:flex-row  ">
                <div className="bg-[#F4F6FF] p-[20px] min-h-[400px] w-[368px] flex flex-col rounded-[30px] justify-center items-center ">
                    <div className="flex flex-col items-start gap-[10px] ">
                    <h1 className="text-[#172E80] text-[38px] font-[500] ">Easy Payment</h1>
                    <p className="text-[#777777] font-[300] ">Stress-free payment for all transactions that you do at any time.</p>
                    <button className=" text-[#2E5CFF] items-center flex flex-row gap-[5px]  "><span className="text-[18px]">Read More </span>  <BsArrowRightShort className="text-[40px] "/></button> 
                    </div>
                    <img src={payment} alt="" className="h-[200px] " />
                </div>

                <div className="bg-[#FEF7F1] p-[20px] flex flex-col rounded-[30px] w-[368px]  min-h-[400px] justify-center items-center ">
                    <div className="flex flex-col items-start gap-[10px] ">
                    <h1 className="text-[#172E80] text-[38px] font-[500] ">Investments</h1>
                    <p className="text-[#777777] font-[300] ">Grow your money by investing in pre-vetted investment opportunities.</p>
                    <button className=" text-[#2E5CFF] items-center flex flex-row gap-[5px]  "><span className="text-[18px]">Read More </span>  <BsArrowRightShort className="text-[40px] "/></button> 
                    </div>
                    <img src={investment} alt="" className=" h-[200px]"/>
                </div>

                <div className="bg-[#F4F6FF] p-[20px] flex flex-col w-[368px]  min-h-[400px] rounded-[30px] justify-center items-center ">
                    <div className="flex flex-col items-start gap-[10px] ">
                    <h1 className="text-[#172E80] text-[38px] font-[500] ">Fixed Savings</h1>
                    <p className="text-[#777777] font-[300] ">Build a dedicated savings faster on your terms automatically or manually.</p>
                    <button className=" text-[#2E5CFF] items-center flex flex-row gap-[5px]  "><span className="text-[18px]">Read More </span>  <BsArrowRightShort className="text-[40px] "/></button> 
                     </div>
                    <img src={saving} alt="" className=" h-[200px] "/>
                </div>
            </div>
        </div>
    )
}