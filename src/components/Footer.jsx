import React from "react";
import {
  FaYoutube,
  FaFacebookSquare,
  FaInstagram,
  FaTelegramPlane,
  FaTwitter,
} from "react-icons/fa";

function Footer() {
  const handleSetActive = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div id="footer" className="bg-[#F4F7FF] pt-16">
      <div className=" max-w-[1140px] mx-auto ">
        <img
          className="mx-auto"
          src="/images/logo.svg"
          alt="Logotip"
          width={106}
        />
        <div className="mt-11 mb-8 flex justify-between">
          <div>
            <h3 className="text-lg font-bold mb-[18px] text-[#313133]">
              About us
            </h3>
            <a
              className="flex flex-col text-lg text-[#1b5bf7] leading-8 cursor-pointer  hover:underline"
              onClick={() => handleSetActive("direction")}
            >
              Direction
            </a>
            <a
              className="flex flex-col text-lg text-[#1b5bf7] leading-8 cursor-pointer  hover:underline"
              onClick={() => handleSetActive("command")}
            >
              Command
            </a>
            <a
              className="flex flex-col text-lg text-[#1b5bf7] leading-8 cursor-pointer  hover:underline"
              
              onClick={() => handleSetActive("tools")}
            >
              Tools
            </a>
            <a
              className="flex flex-col text-lg text-[#1b5bf7] leading-8 cursor-pointer  hover:underline"
              onClick={() => handleSetActive("clients")}
            >
              Clients
            </a>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-[18px] text-[#313133]">
              Services
            </h3>
            <a
              className="flex flex-col text-lg text-[#1b5bf7] leading-8 cursor-pointer  hover:underline"
              onClick={() => handleSetActive("services")}
            >
              Development of mobile applications
            </a>
            <a
              className="flex flex-col text-lg text-[#1b5bf7] leading-8 cursor-pointer  hover:underline"
              onClick={() => handleSetActive("erpSystems")}
            >
              Development and implementation ERP systems
            </a>
            <a
              className="flex flex-col text-lg text-[#1b5bf7] leading-8 cursor-pointer  hover:underline"
              onClick={() => handleSetActive("uxDesign")}
            >
              User interface, User experience design
            </a>
            <a
              className="flex flex-col text-lg text-[#1b5bf7] leading-8 cursor-pointer  hover:underline"
              onClick={() => handleSetActive("itConsulting")}
            >
              IT consulting
            </a>
            <a
              className="flex flex-col text-lg text-[#1b5bf7] leading-8 cursor-pointer  hover:underline"
              onClick={() => handleSetActive("optimization")}
            >
              Optimization IT consulting infrastructure
            </a>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-[18px] text-[#313133]">
              Portfolio
            </h3>
            <a
              className="flex flex-col text-lg text-[#1b5bf7] leading-8 cursor-pointer  hover:underline"
              onClick={() => handleSetActive("portfolio")}
            >
              Delever
            </a>
            <a
              className="flex flex-col text-lg text-[#1b5bf7] leading-8 cursor-pointer  hover:underline"
              onClick={() => handleSetActive("smsuz")}
            >
              Sms.uz
            </a>
            <a
              className="flex flex-col text-lg text-[#1b5bf7] leading-8 cursor-pointer  hover:underline"
              onClick={() => handleSetActive("goodzone")}
            >
              Goodzone
            </a>
            <a
              className="flex flex-col text-lg text-[#1b5bf7] leading-8 cursor-pointer  hover:underline"
              onClick={() => handleSetActive("iman")}
            >
              Iman
            </a>
          </div>
        </div>
        <div className="flex justify-between py-6 border-t border-t-[rgba(27,91,247,0.2)]">
          <p className="text-sm leading-6 text-[#1b5bf7] font-medium">
            © 2024 Udevs. All rights reserved
          </p>
          <div className="flex items-center">
            <a
              href="/"
              className="flex justify-center items-center ml-4 p-[7px] rounded-[50%] text-2xl text-[#1b5bf7] bg-[rgba(27,91,247,0.1)]"
            >
              <FaInstagram />
            </a>
            <a
              href="/"
              className="flex justify-center items-center ml-4 p-[7px] rounded-[50%] text-2xl text-[#1b5bf7] bg-[rgba(27,91,247,0.1)]"
            >
              <FaTwitter />
            </a>
            <a
              href="/"
              className="flex justify-center items-center ml-4 p-[7px] rounded-[50%] text-2xl text-[#1b5bf7] bg-[rgba(27,91,247,0.1)]"
            >
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
