import React from "react";
import { FaqContent } from "./FaqContent";


export const FaqProps = () => {
    return(
        <>
         <FaqContent
        question='How to activate Fintekk account'
        answer='Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.'
        />
         <FaqContent
        question='What should i do if i forget my pin'
        answer='Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.'
        />
        </>
    )
}