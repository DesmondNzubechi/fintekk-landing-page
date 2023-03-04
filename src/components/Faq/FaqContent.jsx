import React, { useState } from "react";
import {RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";

export const FaqContent = (props) => {
    const [btnUp, setBtnUp] = useState(false);
    const [btnDown, setBtnDown] = useState(true);
    const [ans, setAns] = useState(false);

    const showAns = () => {
        if (ans) {
            setAns(false);
            setBtnUp(false);
            setBtnDown(true)
            
        } else {
            setAns(true);
            setBtnUp(true);
            setBtnDown(false)

        }
    }
    return (
        <div className="flex flex-col items-start  gap-0 ">
                <button onClick={showAns} className="flex flex-row border w-[100%] border-[#fff] items-center rounded-[8px] text-[#fff] justify-between gap-[50px] px-[10px] py-[5px] "><span>{props.question}</span> <span>{btnDown && <RiArrowDropDownLine className="text-[40px] font-[700] "/>}{btnUp && <RiArrowDropUpLine className="text-[40px] font-[700] "/>}</span> </button>
               {ans && <p className="bg-[#fff] py-[30px] rounded-[8px] px-[20px] text-[#172E80] text-[20px] ">{props.answer} </p>}
            </div>
    )
}