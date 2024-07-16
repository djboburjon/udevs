import React from "react";
import "./Clients.css"

function Clients() {
  const root = document.documentElement;
  const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue(
    "--marquee-elements-displayed"
  );
  const marqueeContent = document.querySelector("ul.marquee-content");
  const marqueeContent1 = document.querySelector("ul.marquee-content1");

  root.style.setProperty("--marquee-elements", marqueeContent?.children.length);
  root.style.setProperty("--marquee-elements1", marqueeContent1?.children.length);

  for (let i = 0; i < marqueeElementsDisplayed; i++) {
    marqueeContent?.appendChild(marqueeContent.children[i].cloneNode(true));
  }
  for (let i = 0; i < marqueeElementsDisplayed; i++) {
    marqueeContent1?.appendChild(marqueeContent1.children[i].cloneNode(true));
  }
  return (
    <div id="clients" className="py-28">
      <div className="max-w-[1140px] mx-auto">
        <h1 className="custom-title mb-20">Our services</h1>
      </div>
      <div className="marquee mb-5">
        <ul className="marquee-content flex items-center gap-12">
          <li className="w-5 h-5 bg-blue-300">
            <img src="/images/akfaMedline.svg" alt="" />
          </li>
          <li className="w-5 h-5 bg-blue-300">
            <img src="/images/cspase.svg" alt="" />
          </li>
          <li className="w-5 h-5 bg-blue-300">
            <img src="/images/delever.svg" alt="" />
          </li>
          <li className="w-5 h-5 bg-blue-300">
            <img src="/images/fonon.svg" alt="" />
          </li>
          <li className="w-5 h-5 bg-blue-300">
            <img src="/images/hamkorbank.svg" alt="" />
          </li>
          <li className="w-5 h-5 bg-blue-300">
            <img src="/images/hoshimov.svg" alt="" />
          </li>
          <li className="w-5 h-5 bg-blue-300">
            <img src="/images/iman.svg" alt="" />
          </li>          
        </ul>
      </div>
      <div className="marquee1">
        <ul className="marquee-content1 flex items-center gap-12">
          <li className="w-5 h-5 bg-blue-300">
            <img src="/images/maxtra.svg" alt="" />
          </li>
          <li className="w-5 h-5 bg-blue-300">
            <img src="/images/smsuz.svg" alt="" />
          </li>
          <li className="w-5 h-5 bg-blue-300">
            <img src="/images/goodzone.svg" alt="" />
          </li>
          <li className="w-5 h-5 bg-blue-300">
            <img src="/images/rabota.svg" alt="" />
          </li>
          <li className="w-5 h-5 bg-blue-300">
            <img src="/images/workly.svg" alt="" />
          </li>
          <li className="w-5 h-5 bg-blue-300">
            <img src="/images/mytaxi.svg" alt="" />
          </li>
          <li className="w-5 h-5 bg-blue-300">
            <img src="/images/shefburger.svg" alt="" />
          </li>          
        </ul>
      </div>
    </div>
  );
}

export default Clients;
