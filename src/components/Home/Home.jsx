import React from "react";
import  '../../App.css';
import { Navbar } from "../Navbar/Navbar";
import { Header } from "../Header/Header";
import { User } from "../User/User";
import { Orgs } from "../Orgs/Orgs";
import { Services } from "../Services/Services";
import { RegistretionStep } from "../Step/Step";
import { FAQ } from "../Faq/FAQs";
import { Testimonial } from "../Testimonial/Testimonial";
import { SignUp } from "../Sign/Sign";

export const Home = () => {
    return(
        <>
        <Navbar/>
        <Header/>
        <Orgs/>
        <User/>
      <Services/>
      <RegistretionStep/>
      <FAQ/>
      <Testimonial/>
      <SignUp/>
        </>
    )
}