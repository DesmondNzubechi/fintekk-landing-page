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
import { Footer } from "../Footer/Footer";
import { NavMobile } from "../Navbar/NavMobile";

export const Home = () => {
    return(
      <div className="overflow-x-hidden ">
        <Navbar/>
        <Header/>
        <Orgs/>
        <User/>
      <Services/>
      <RegistretionStep/>
      <FAQ/>
      <Testimonial/>
      <SignUp/>
  <Footer/>
  <NavMobile/>
        </div>
    )
}