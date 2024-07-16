import React from "react";

function Portfolio() {
  return (
    <div
      id="portfolio"
      className="bg-[url('/images/download.jfif')] bg-no-repeat bg-cover py-24"
    >
      <div className=" max-w-[1140px] mx-auto ">
        <div className="flex justify-between flex-row-reverse gap-28">
          <div className="w-1/2">
            <img className="mb-8" src="/images/deleverLogo.svg" alt="" />
            <div className="bg-[#FFDDD2] text-[#FF5722] inline-flex items-center gap-2 py-1 px-4 rounded-[100px] text-sm font-medium mb-9">
              <img src="/images/deliverIcon.svg" alt="" />
              <span>Delivery</span>
            </div>
            <p className="text-xl leading-10 font-semibold text-[#464359]">
              Delever - Delivery service automation targeted at both consumers
              and restaurants.
            </p>
            <h3 className="my-6 text-2xl font-bold">What we did?</h3>
            <div className="">
              <div className="flex mb-4">
                <div className="min-w-[150px] px-[10px] pt-[20px] pb-[10px] mr-[15px] rounded-lg bg-[#f4f7ff]">
                  <img
                    className="mb-3"
                    src="/images/websiteIcon.svg"
                    alt="Website icon"
                  />
                  <p className="text-lg font-semibold">Website</p>
                </div>
                <div className="min-w-[150px] px-[10px] pt-[20px] pb-[10px] mr-[15px] rounded-lg bg-[#f4f7ff]">
                  <img
                    className="mb-3"
                    src="/images/adminIcon.svg"
                    alt="Admin panel icon"
                  />
                  <p className="text-lg font-semibold">Admin panel</p>
                </div>
                <div className="min-w-[150px] px-[10px] pt-[20px] pb-[10px] mr-[15px] rounded-lg bg-[#f4f7ff]">
                  <img
                    className="mb-3"
                    src="/images/mobileBoth.svg"
                    alt="Crossplatform icon"
                  />
                  <p className="text-lg font-semibold">Crossplatform</p>
                </div>
              </div>
              <div className="flex mb-4">
                <div className="min-w-[150px] px-[10px] pt-[20px] pb-[10px] mr-[15px] rounded-lg bg-[#f4f7ff]">
                  <img
                    className="mb-3"
                    src="/images/webDesignIcon.svg"
                    alt="Web design icon"
                  />
                  <p className="text-lg font-semibold">Web design</p>
                </div>
                <div className="min-w-[150px] px-[10px] pt-[20px] pb-[10px] mr-[15px] rounded-lg bg-[#f4f7ff]">
                  <img
                    className="mb-3"
                    src="/images/mobileDesignIcon.svg"
                    alt="Mobile design icon"
                  />
                  <p className="text-lg font-semibold">Mobile design</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-1/2 flex items-center justify-center bg-no-repeat bg-cover">
            <img
              className="rounded-[25px]"
              src="/images/deleverImage.png"
              alt="Team Image"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
