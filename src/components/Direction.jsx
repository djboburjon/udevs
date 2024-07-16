import React from "react";

function Direction() {
  return (
    <div id="direction" className="max-w-[1140px] mx-auto py-28">
      <h1 className="custom-title mb-20">Our services</h1>
      <div className=" flex justify-between flex-wrap">
        <div className="p-8 mb-6 pb-12 bg-[#F4F7FF] rounded-lg w-[31.5%]">
          <img className="mb-6" src="/images/serviceTeam.svg" alt="" />
          <p className="text-xl font-semibold leading-8 text-[#18191F]">Team</p>
        </div>
        <div className="p-8 mb-6 pb-12 bg-[#F4F7FF] rounded-lg w-[31.5%]">
          <img className="mb-6" src="/images/serviceMobile.svg" alt="" />
          <p className="text-xl font-semibold leading-8 text-[#18191F]">
            Development of mobile applications
          </p>
        </div>
        <div className="p-8 mb-6 pb-12 bg-[#F4F7FF] rounded-lg w-[31.5%]">
          <img className="mb-6" src="/images/serviceDevelopment.svg" alt="" />
          <p className="text-xl font-semibold leading-8 text-[#18191F]">
            Development and implementation ERP systems
          </p>
        </div>
        <div className="p-8 mb-6 bg-[#F4F7FF] rounded-lg w-[31.5%]">
          <img className="mb-6" src="/images/serviceInterface.svg" alt="" />
          <p className="text-xl font-semibold leading-8 text-[#18191F]">
            User interface, User experience design
          </p>
        </div>
        <div className="p-8 mb-6 bg-[#F4F7FF] rounded-lg w-[31.5%]">
          <img className="mb-6" src="/images/serviceOptimization.svg" alt="" />
          <p className="text-xl font-semibold leading-8 text-[#18191F]">
            Optimization IT consulting infrastructure
          </p>
        </div>
        <div className="p-8 mb-6 bg-[#F4F7FF] rounded-lg w-[31.5%]">
          <img className="mb-6" src="/images/serviceConsulting.svg" alt="" />
          <p className="text-xl font-semibold leading-8 text-[#18191F]">
            IT consulting
          </p>
        </div>
      </div>
    </div>
  );
}

export default Direction;
