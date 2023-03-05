import React, { useState } from "react";
import { AiOutlineMenu } from 'react-icons/ai';
import { HiXMark } from 'react-icons/hi2';


export const NavMobile = () => {
    const [isMenu, setIsMenu] = useState(true);
    const [closeMenu, setIsCloseMenu] = useState(false);
    const [isNav, setIsNav] = useState(false);
    const showNav = () => {
        setIsNav(true);
         setIsCloseMenu(true);
         setIsMenu(false);
    };
    const hideNav = () => {
        setIsNav(false);
        setIsCloseMenu(false);
        setIsMenu(true);
    }
    return(
      <nav className="block md:hidden justify-around items-center shadow-xl py-[20px] px-[30px] flex-row gap-[20px] bg-[#fff]  ">
       <div className="fixed flex items-center justify-around z-10 right-0 top-0 shadow left-0 bg-[#fff] py-[20px]  ">
       <a href="" className="text-[28px] relative font-[500] text-[#2E5CFF] leading-[34%] ">Fintekk</a>
    { isMenu &&  <AiOutlineMenu onClick={showNav} className="text-[30px] "/>}

     { closeMenu && <HiXMark onClick={hideNav} className="text-[30px] "/>}
       </div>
     { isNav && <ul className={`flex  border-r fixed left-0 top-0 px-[20px]   h-[100%] flex-col bg-[#fff] w-[70%]  justify-center items-center gap-[20px] `}>
            <li><a href="" className="text-[24px] font-[300] text-[#171717] ">Home</a></li>
            <li><a href="" className="text-[24px] font-[300] text-[#171717] ">About</a></li>
            <li><a href="" className="text-[24px] font-[300] text-[#171717] ">FAQs</a></li>
            <li><a href="" className="text-[24px] font-[300] text-[#171717] ">Contact Us</a></li>
         <button className="text-[#2E5CFF] font-[500] text-[15px] px-[24px] border border-[#2E5CFF] rounded-[10px] min-w-[160px]  py-[10px] ">Login</button>
            <button className="text-[#fff] font-[500] bg-[#2E5CFF] text-[15px] px-[24px] border border-[#2E5CFF] rounded-[10px]  py-[10px] ">Sign Up For Free</button>
       </ul>}
       
      </nav>
    )
}