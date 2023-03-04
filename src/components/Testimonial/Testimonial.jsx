import React, { useState } from "react";
import { BsArrowUp, BsArrowDown } from "react-icons/bs";
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';


export const Testimonial = () => {
let Reviews = [
    {
        text: 'Dealt with enquiry and subsequent order efficiently and quickly. So pleased with price and service i ordered a second one',
        name: 'Maryam Adegoke'
    },
    {
        text: 'Fintekk is the bank that does it all. Manage everything directly and easy with finty.subsequent order efficiently and quickly',
        name: 'Nzubechukwu'
    },
    {
        text: 'Dealt with enquiry and subsequent order efficiently and quickly. So pleased with price and service i ordered a second one',
        name: 'Official_B2R'
    }
];
const [index, setIndex] = useState(0);
let ReviewContent = Reviews[index];
const [fiBg, setFiBg] = useState('#172E80');
const [fiCol, setFiCol] = useState('#fff');

const [seBg, setSeBg] = useState('');
const [seCol, setSeCol] = useState('#3a3a3a');

const [ThBg, setThBg] = useState('');
const [ThCol, setThCol] = useState('#3a3a3a');
const handleNext = () => {
  if (Reviews.length - 1 === index) {
    setIndex(index + 0);
  } else {
    setIndex(index + 1)
  };
  if (Reviews.length - 2 === index) {
    setFiBg('');
    setSeBg('');
    setThBg('#172E80')
    setFiCol('#3a3a3a')
    setSeCol('#3a3a3a')
    setThCol('#fff')
  } else if (Reviews.length - 3 === index) {
    setFiBg('');
    setSeBg('#172E80');
    setThBg('')
    setFiCol('#3a3a3a')
    setSeCol('#fff')
    setThCol('#3a3a3a')
  } 
}
const handPrev = () => {
    if (Reviews.length - 3 === index) {
        setIndex(index - 0)
    } else {
        setIndex(index - 1)
    }
    
}


    return(
        <div className="bg-[#FBFBFB] flex flex-row gap-[20px] justify-center items-center my-[50px] px-[20px] py-[30px] ">
         <div className="flex flex-col gap-[10px] justify-center items-start ">
            <h1 className="text-[25px] text-[3a3a3a]">TESTIMONIALS</h1>
            <h2 className="text-[#172E80] text-[30px]  font-[700] max-w-[350px] ">What Our Customers Say About Us</h2>
         </div>
         <div>
         <div className="bg-[#ffffff] max-w-[600px] px-[24px] py-[30px] flex flex-col rounded-[24px] gap-[20px]  ">
            <p >{ReviewContent.text}</p>
            <div className="flex flex-col gap-[5px] items-start ">
            <h1 className="text-[24px] font-[500] text-[#172E80] ">{ReviewContent.name}</h1>
            <span className="flex flex-row gap-[2px] jutify-center ">
                <AiFillStar className="text-[#FAC12F] "/>
                <AiFillStar className="text-[#FAC12F] "/>
                <AiFillStar className="text-[#FAC12F] "/>
                <AiFillStar className="text-[#FAC12F] "/>
                <AiOutlineStar className="text-[#9D9D9D] "/>
            </span>
            </div>  
         </div>
         </div>
        
         <div className="flex gap-[5px] flex-col items-center ">
           <BsArrowUp onClick={handPrev} className="text-[#172E80] "/>
            <button className={` px-[10px] py-[3px] text-[16px] text-[${fiCol}]  font-[400] rounded-[50%] bg-[${fiBg}] `}>1</button>
            <button className={` px-[10px] py-[3px] text-[16px] bg-[${seBg}] font-[400] rounded-full text-[${seCol}]  `}>2</button>
            <button className={`px-[10px] py-[3px] text-[16px] bg-[${ThBg}] font-[400] rounded-full text-[${ThCol}] `}>3</button>
            <BsArrowDown onClick={handleNext}  className="text-[#172E80]  "/>
         </div>
        </div>
    )
}