import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Direction from "../components/Direction";
import Command from "../components/Command";
import Services from "../components/Services";
import Tools from "../components/Tools";
import Clients from "../components/Clients";
import Portfolio from "../components/Portfolio";
import Contact from "../components/Contact";
import ERPSystems from "../components/ERPSystems";
import UxDesign from "../components/UxDesign";
import Optimization from "../components/Optimization";
import ItConsulting from "../components/ItConsulting";
import Smsuz from "../components/Smsuz";
import Goodzone from "../components/Goodzone";
import Iman from "../components/Iman";
import HowWork from "../components/HowWork";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Direction />
      <Command />
      <Services />
      <ERPSystems />
      <UxDesign />
      <Optimization />
      <ItConsulting />
      <Tools />
      <Clients />
      <Portfolio />
      <Smsuz />
      <Goodzone />
      <Iman />
      <HowWork />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;
