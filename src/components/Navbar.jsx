import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import useScrollSpy from "../hooks/useScrollSpy";

function Navbar() {
  const sectionIds = [
    "hero",
    "direction",
    "command",
    "services",
    "tools",
    "clients",
    "portfolio",
    "contact"
  ];
  const activeSection = useScrollSpy(sectionIds);

  const handleSetActive = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };
  return (
    <nav className="fixed z-30 w-full bg-white border-b border-b-gray">
      <ul className="max-w-[1140px] mx-auto flex justify-between items-center py-4">
        <li>
          <button
            className="text-lg font-bold"
            onClick={() => handleSetActive("hero")}
          >
            <img src="/images/logo.svg" alt="Logo" className="w-24" />
          </button>
        </li>
        <div className="flex items-center space-x-8 font-sans font-bold text-zinc-700">
          <li>
            <button
              className={`text-sm py-2 transition-all hover:border-b-2 hover:border-blue-500 ${
                activeSection === "direction"
                  ? "border-b-2 border-blue-500"
                  : "border-b-2 border-transparent"
              }`}
              onClick={() => handleSetActive("direction")}
            >
              Direction
            </button>
          </li>
          <li>
            <button
              className={`text-sm py-2 transition-all hover:border-b-2 hover:border-blue-500 ${
                activeSection === "command"
                  ? "border-b-2 border-blue-500"
                  : "border-b-2 border-transparent"
              }`}
              onClick={() => handleSetActive("command")}
            >
              Command
            </button>
          </li>
          <li>
            <button
              className={`text-sm py-2 ${
                activeSection === "services"
                  ? "border-b-2 border-blue-500"
                  : "border-b-2 border-transparent"
              }`}
              onClick={() => handleSetActive("services")}
            >
              Services
            </button>
          </li>
          <li>
            <button
              className={`text-sm py-2 transition-all hover:border-b-2 hover:border-blue-500 ${
                activeSection === "tools"
                  ? "border-b-2 border-blue-500"
                  : "border-b-2 border-transparent"
              }`}
              onClick={() => handleSetActive("tools")}
            >
              Tools
            </button>
          </li>
          <li>
            <button
              className={`text-sm py-2 transition-all hover:border-b-2 hover:border-blue-500 ${
                activeSection === "clients"
                  ? "border-b-2 border-blue-500"
                  : "border-b-2 border-transparent"
              }`}
              onClick={() => handleSetActive("clients")}
            >
              Clients
            </button>
          </li>
          <li>
            <button
              className={`text-sm py-2 ${
                activeSection === "portfolio"
                  ? "border-b-2 border-blue-500"
                  : "border-b-2 border-transparent"
              }`}
              onClick={() => handleSetActive("portfolio")}
            >
              Portfolio
            </button>
          </li>
          <li>
            <button className="text-sm py-2">
              Language
            </button>
          </li>

          <li>
            <button
              className={`text-sm font-bold bg-blue-600 text-white rounded-lg px-7 py-[10px] transition-all duration-300 hover:scale-105`}
              onClick={() => handleSetActive("contact")}
            >
              Contact
            </button>
          </li>
        </div>
      </ul>
    </nav>
  );
}

export default Navbar;
