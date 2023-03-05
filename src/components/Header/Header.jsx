import React from "react";
import { IoLogoGooglePlaystore } from 'react-icons/io5';
import { BsApple, BsPiggyBankFill } from 'react-icons/bs';
import LadyImg from '../images/Ladyb.png';
import { FaTelegramPlane } from 'react-icons/fa'
import { MdPoll } from 'react-icons/md';
import { BiBarChart } from 'react-icons/bi';

export const Header = () => {
    return(
        <div className="py-[70px] px-[40px] gap-[130px]   flex flex-col md:flex-row justify-center ">
            <div className="flex justify-center md:text-left text-center flex-col gap-[10px]">
                <h1 className="font-[500]  text-[38px] md:text-[50px]  max-w-[503px] text-[#172E80] ">Pay, Invest, Save your Cash with a single bank</h1>
                <p className="text-[24px] text-[#777777]  max-w-[503px] font-[399] ">Fintekk is the bank that does it all. Manage everything directly and easy with fintekk.</p>
              <button className="bg-[#2E5CFF] ronded-[16px] px-[24px] py-[16px] w-fit text-[#fff] text-[20px] md:self-start self-center rounded-2xl ">Sign Up for Free</button>
              <div className="flex flex-col md:flex-row items-center gap-[20px] py-[10px] items-start ">
                <button className="flex flex-row gap-[10px] justify-center items-center border px-[24px] py-[16px]  rounded-2xl "> <IoLogoGooglePlaystore className="text-[#3A3A3A] text-[18px] "/> <span className="text-[#3A3A3A] text-[18px] "> Get on Android </span></button>
                <button className="flex flex-row gap-[10px] justify-center items-center border px-[24px] py-[16px] rounded-2xl "><BsApple className="text-[#3A3A3A] text-[18px] "/> <span className="text-[#3A3A3A] text-[18px] ">Get on Apple</span></button>
              </div>
            </div>
            
            <div className=" relative   max-w-[500px] ">
              <img src={LadyImg} alt="A lady" className="bg-[#F4F6FF] w-[400px] h-[100%]  rounded-[64px]   " />
              <span className="absolute flex shadow-xl shadow-paymenshadow gap-[10px] md:gap-[20px] flex-row items-center rounded-xl top-[200px] p-[10px] md:left-[-140px] left-[-20px] bg-[#fff] ">
          <FaTelegramPlane className="bg-payment rounded text-[20px] md:text-[40px]  text-[#5BCDF0] p-[2px] md:p-[10px] "/>
          <span className="flex flex-col gap-[5px] ">
            <p className="text-[#172E80] text-[10px] md:text-[16px] ">Payment</p>
            <span className="bg-[#F4F6FF] flex p-[-20px] h-[10px] rounded-full w-[90px] md:w-[119px] ">
                <span className="bg-[#5BCDF0] w-[80%] h-[7px] md:h-[10px] rounded-full "></span>
            </span>
          </span>
              </span>

              <span className="absolute flex shadow-xl  shadow-savingshadow gap-[20px] flex-row items-center rounded-xl top-[114px] p-[10px] right-[-20px] md:right-[-70px] bg-[#fff] ">
          <BsPiggyBankFill className="bg-saving rounded text-[20px] md:text-[40px] text-[#FF61EF] p-[2px] md:p-[10px] "/>
          <span className="flex flex-col gap-[5px] ">
            <p className="text-[#172E80] text-[10px] md:text-[16px] ">Savings</p>
            <span className="bg-[#F4F6FF] flex p-[-20px] h-[10px] rounded-full w-[90px] md:w-[119px]  ">
                <span className="bg-[#FF61EF] w-[30%] h-[7px] md:h-[10px] rounded-full "></span>
            </span>
          </span>
              </span>

              <span className="absolute flex shadow-investmentshadow shadow-xl gap-[20px] flex-row items-center rounded-xl bottom-[50px] p-[10px] right-[-30px] bg-[#fff] ">
          <BiBarChart className="bg-investment rounded text-[20px] md:text-[40px] text-[#605EFB] p-[2px] md:p-[10px] "/>
          <span className="flex flex-col gap-[5px] ">
            <p className="text-[#172E80] text-[16px] ">Investments</p>
            <span className="bg-[#F4F6FF] flex p-[-20px] h-[10px] rounded-full w-[90px] md:w-[119px]  ">
                <span className="bg-[#605EFB] w-[90%] h-[7px] md:h-[10px] rounded-full "></span>
            </span>
          </span>
              </span>
            </div>
            
            
        </div>
    )
}