import React from "react";

function ERPSystems() {
  return (
    <div id="erpSystems" className="bg-[#F4F7FF] bg-no-repeat bg-cover py-24">
      <div className=" max-w-[1140px] mx-auto ">
        <h1 className="custom-title mb-20">ERP systems</h1>
        <div className="flex justify-between flex-row-reverse gap-28">
          <div className="w-1/2">
            <p className="max-w-[500px] text-2xl leading-10 font-medium text-[#18191f]">
              IT Systems of any level of complexity at a convenient time for you
            </p>
            <div className="my-10">
              <div className="flex mb-4">
                <div className="min-w-[150px] px-[10px] pt-[20px] pb-[10px] mr-[15px] rounded-lg bg-[#E0E8FF]">
                  <img
                    className="mb-3"
                    src="/images/crmIcon.svg"
                    alt="CRM icon"
                  />
                  <p className="text-lg font-semibold">CRM</p>
                </div>
                <div className="min-w-[150px] px-[10px] pt-[20px] pb-[10px] mr-[15px] rounded-lg bg-[#E0E8FF]">
                  <img
                    className="mb-3"
                    src="/images/learningIcon.svg"
                    alt="eLearning icon"
                  />
                  <p className="text-lg font-semibold">eLearning</p>
                </div>
                <div className="min-w-[150px] px-[10px] pt-[20px] pb-[10px] mr-[15px] rounded-lg bg-[#E0E8FF]">
                  <img
                    className="mb-3"
                    src="/images/ecommerceIcon.svg"
                    alt="E-Commerce icon"
                  />
                  <p className="text-lg font-semibold">E-Commerce</p>
                </div>
              </div>
              <div className="flex">
                <div className="min-w-[150px] px-[10px] pt-[20px] pb-[10px] mr-[15px] rounded-lg bg-[#E0E8FF]">
                  <img
                    className="mb-3"
                    src="/images/posIcon.svg"
                    alt="POS icon"
                  />
                  <p className="text-lg font-semibold">POS</p>
                </div>
                <div className="min-w-[150px] px-[10px] pt-[20px] pb-[10px] mr-[15px] rounded-lg bg-[#E0E8FF]">
                  <img
                    className="mb-3"
                    src="/images/emailIcon.svg"
                    alt="Sms / Email icon"
                  />
                  <p className="text-lg font-semibold">Sms / Email</p>
                </div>
                <div className="min-w-[150px] px-[10px] pt-[20px] pb-[10px] mr-[15px] rounded-lg bg-[#E0E8FF]">
                  <img
                    className="mb-3"
                    src="/images/warehouseIcon.svg"
                    alt="Warehouse icon"
                  />
                  <p className="text-lg font-semibold">Warehouse</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-1/2 bg-[url('/images/mobileImageBack.png')] rounded-[25px] flex items-center justify-center bg-no-repeat bg-cover">
            <img className="" src="/images/laptopImage.png" alt="Team Image" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ERPSystems;
