import React from "react";
import phone from '../images/app.png';


export const RegistretionStep = () => {
    return(
        <div className="px-[20px] pt-[70px] pb-[50px]">
         <div className="flex flex-col md:flex-row justify-center md:justify-around gap-[40px] items-center ">
            <div>
            <img src={phone} alt="" />
            </div>
              <div className="max-w-[700px]">
                <div className="flex flex-col justify-center gap-[40px] items-start  ">
                    <h1 className="text-[#172E80] font-[500] text-[39px] md:text-[40px] md:text-left text-center  ">Start the journey to reach your financial goals today.</h1>
                <div className="flex items-start flex-col gap-[20px] ">
               <div className="flex flex-row justify-around gap-[20px] items-start ">
                <span className="flex items-center flex-col gap-[5px] ">
                    <button className="text-[#2E5CFF] text-[20px] font-[700] ">01</button>
                    <span className="h-[100px] w-[3px] bg-[#2E5CFF] "></span>
                </span>
                <span className="flex flex-col gap-[10px] items-start ">
                    <h1 className="text-[#172E80] font-[500] text-[20px] md:text-[28px] ">Download the mobile app</h1>
                    <p className="text-[300] text-[#777777] text-[17px] md:text-[20px] ">Sign up for an account with your name, email  and phone number.</p>
                </span>
                </div>

                <div className="flex flex-row justify-around gap-[20px] items-start ">
                <span className="flex flex-col items-center gap-[5px] ">
                    <button className="text-[#2E5CFF] text-[20px] font-[700] ">02</button>
                    <span className="h-[100px] w-[3px] bg-[#2E5CFF] "></span>
                </span>
                <span className="flex flex-col gap-[10px] items-start ">
                    <h1 className="text-[#172E80] font-[500] text-[20px] md:text-[28px] ">Create a free account</h1>
                    <p className="text-[300] text-[#777777] text-[17px] md:text-[20px] ">Sign up for an account with your name, email  and phone number.</p>
                </span>
                </div>

                <div className="flex flex-row justify-around gap-[20px] items-start ">
                <span className="flex flex-col items-center gap-[5px] ">
                    <button className="text-[#2E5CFF] text-[20px] font-[700]  ">03</button>
                    <span className="h-[100px] w-[3px] bg-[#fff] "></span>
                </span>
                <span className="flex flex-col gap-[10px] items-start ">
                    <h1 className="text-[#172E80] font-[500] text-[20px] md:text-[28px] ">Add a payment method</h1>
                    <p className="text-[300] text-[#777777] text-[17px] md:text-[20px] ">Using your debit card, bank account, QR code, perform your first transaction.</p>
                </span>
                </div>
                <button className="self-justify-center self-center rounded-xl text-center text-[#fff] font-[500] text-[20px] bg-[#2E5CFF] px-[18px] py-[10px]  md:px-[24px] md:py-[20px] ">
                Download Now 
                </button>
                </div>
                </div>
              </div>
            </div>   
        </div>
    )
}