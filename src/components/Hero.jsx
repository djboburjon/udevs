import React from "react";
import TypingEffect from "./TypingEffect";

function Hero() {
  const handleSetActive = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div
      className='w-full bg-[url("/images/download.jfif")] bg-no-repeat bg-cover'
      id="hero"
    >
      <div className=" max-w-[1140px] mx-auto pt-36 pb-32 flex items-center justify-between">
        <div className="w-1/2">
          <img className="w-72 mb-10" src="/images/logo.svg" alt="Logo image" />
          <h1 className="mb-6 text-4xl font-bold text-zinc-700">IT-Outsourcing Company</h1>
          <TypingEffect />
          <button className="text-2xl font-semibold py-3 bg-blue-600 text-white rounded-lg px-20 transition-all duration-300 hover:scale-105"
          onClick={() => handleSetActive("contact")}>
            Contact
          </button>
        </div>
        <div className="w-1/2">
          <img src="/images/hero.svg" alt="Hero image" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
