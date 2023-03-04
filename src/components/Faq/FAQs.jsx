import React, { useState } from "react";
import {RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
import { FaqProps } from "./FaqProps";

import Faq from '../images/fa.png';

export const FAQ = () => {
    const [hideFBtn, setHideFBtn] = useState(false);
    const [showFBtn, setShowFBtn] = useState(true);
    const [hideSBtn, setHideSBtn] = useState(false);
    const [showSBtn, setShowSBtn] = useState(true);
    const [hideTBtn, setHideTBtn] = useState(false);
    const [showTBtn, setShowTBtn] = useState(true);
    const [hideFiAns, setHideFiAns] = useState(true);
    const [hideSeAns, setHideSeAns] = useState(false);
    const [hideThAns, setHideThAns] = useState(false);
    
    const fiAns = () => {
        if (hideFiAns) {
            setHideFiAns(false);
            setHideFBtn(true);
            setShowFBtn(false);
        } else {
            setHideFiAns(true);
            setShowFBtn(true);
            setHideFBtn(false);
        };
        setHideSBtn(false);
        setShowSBtn(true);
        setHideSeAns(false);

        setHideTBtn(false);
        setShowTBtn(true);
        setHideThAns(false);

    }
    const seAns = () => {
        if (!hideSeAns) {
            setHideSeAns(true);
            setHideSBtn(true);
            setShowSBtn(false);
        } else {
            setHideSeAns(false);
            setShowSBtn(true);
            setHideSBtn(false);
        }
        setHideFBtn(true);
        setShowFBtn(false);
        setHideFiAns(false);

        setHideTBtn(false);
        setShowTBtn(true);
        setHideThAns(false);

    }
    const thAns = () => {
        if (!hideThAns) {
            setHideThAns(true);
            setHideTBtn(true);
            setShowTBtn(false);
        } else {
            setHideThAns(false);
            setShowTBtn(true);
            setHideTBtn(false);
        }
        setHideSBtn(false);
        setShowSBtn(true);
        setHideSeAns(false);

        setHideFBtn(true);
        setShowFBtn(false);
        setHideFiAns(false);
    }

    return (
        <div className="md:grid flex flex-col-reverse md:grid-cols-2 my-[30px]">
            <div className="flex justify-center bg-[#2E5CFF] p-[30px]">
          <div className=" flex flex-col px-[100px] justify-center items-start gap-[20px] ">
            <h1 className="font-[500] text-[#fff] text-[67px]  ">FAQs</h1>
            <div className="flex flex-col items-start w-[100%]  gap-0 ">
                <button onClick={fiAns} className="flex flex-row border w-[100%] border-[#fff] items-center rounded-[8px] text-[#fff] justify-between gap-[50px] px-[10px] py-[5px] "><span>Is fintekk’s security guaranteed?</span> <span>{hideFBtn && <RiArrowDropDownLine className="text-[40px] font-[700] "/>} {showFBtn && <RiArrowDropUpLine className="text-[40px] font-[700] "/>}</span> </button>
              {hideFiAns &&  <p className="bg-[#fff] py-[30px] rounded-[8px] px-[20px] text-[#172E80] text-[20px] ">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. </p> }
            </div>
            <div className="flex flex-col items-start w-[100%]  gap-0 ">
                <button onClick={seAns} className="flex flex-row border w-[100%] border-[#fff] items-center rounded-[8px] text-[#fff] justify-between gap-[50px] px-[10px] py-[5px] "><span>How to activate Fintekk account</span> <span>{showSBtn && <RiArrowDropDownLine className="text-[40px] font-[700] "/>}{hideSBtn && <RiArrowDropUpLine className="text-[40px] font-[700] "/>}</span> </button>
              {hideSeAns &&  <p className="bg-[#fff] py-[30px] rounded-[8px] px-[20px] text-[#172E80] text-[20px] ">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. </p>}
            </div>
            <div className="flex flex-col items-start w-[100%]  gap-0 ">
                <button onClick={thAns} className="flex flex-row border w-[100%] border-[#fff] items-center rounded-[8px] text-[#fff] justify-between gap-[50px] px-[10px] py-[5px] "><span>What should i do if i forget my pin</span> <span>{showTBtn && <RiArrowDropDownLine className="text-[40px] font-[700] "/>}{hideTBtn && <RiArrowDropUpLine className="text-[40px] font-[700] "/>}</span> </button>
              {hideThAns && <p className="bg-[#fff] py-[30px] rounded-[8px] px-[20px] text-[#172E80] text-[20px] ">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. </p> }
            </div>
            
          </div>
          </div>
          <div className="bg-[#FBFBFB] flex justify-center">
            <img src={Faq} alt="faq" />
          </div>
        </div>
    )
}