import React from "react";

function Optimization() {
  return (
    <div id="optimization" className="bg-[#F4F7FF] bg-no-repeat bg-cover py-24">
      <div className=" max-w-[1140px] mx-auto ">
        <h1 className="custom-title mb-20">Optimization Infrastructure</h1>
        <div className="flex justify-between flex-row-reverse gap-28">
          <div className="w-1/2">
            <p className="max-w-[500px] text-2xl leading-10 font-medium text-[#18191f]">
              Our experienced professionals will help you optimize your
              infrastructure
            </p>
            <div className="my-10">
              <div className="flex mb-4">
                <div className="min-w-[150px] px-[10px] pt-[20px] pb-[10px] mr-[15px] rounded-lg bg-[#E0E8FF]">
                  <img
                    className="mb-3"
                    src="/images/architectureIcon.svg"
                    alt="Architecture icon"
                  />
                  <p className="text-lg font-semibold">Architecture</p>
                </div>
                <div className="min-w-[150px] px-[10px] pt-[20px] pb-[10px] mr-[15px] rounded-lg bg-[#E0E8FF]">
                  <img
                    className="mb-3"
                    src="/images/autoTestingIcon.svg"
                    alt="Auto Testing icon"
                  />
                  <p className="text-lg font-semibold">Auto Testing</p>
                </div>
                <div className="min-w-[150px] px-[10px] pt-[20px] pb-[10px] mr-[15px] rounded-lg bg-[#E0E8FF]">
                  <img
                    className="mb-3"
                    src="/images/stressTestingIcon.svg"
                    alt="Stress testing icon"
                  />
                  <p className="text-lg font-semibold">Stress testing</p>
                </div>
              </div>
              <div className="flex mb-4">
                <div className="min-w-[150px] px-[10px] pt-[20px] pb-[10px] mr-[15px] rounded-lg bg-[#E0E8FF]">
                  <img
                    className="mb-3"
                    src="/images/loadTestingIcon.svg"
                    alt="Load Testing icon"
                  />
                  <p className="text-lg font-semibold">Load Testing</p>
                </div>
                <div className="min-w-[150px] px-[10px] pt-[20px] pb-[10px] mr-[15px] rounded-lg bg-[#E0E8FF]">
                  <img
                    className="mb-3"
                    src="/images/devopsIcon.svg"
                    alt="Devops icon"
                  />
                  <p className="text-lg font-semibold">Devops</p>
                </div>
                <div className="min-w-[150px] px-[10px] pt-[20px] pb-[10px] mr-[15px] rounded-lg bg-[#E0E8FF]">
                  <img
                    className="mb-3"
                    src="/images/cloudIcon.svg"
                    alt="Cloud icon"
                  />
                  <p className="text-lg font-semibold">Cloud</p>
                </div>
              </div>
              <div className="flex">
                <div className="min-w-[150px] px-[10px] pt-[20px] pb-[10px] mr-[15px] rounded-lg bg-[#E0E8FF]">
                  <img
                    className="mb-3"
                    src="/images/cdIcon.svg"
                    alt="CI / CD icon"
                  />
                  <p className="text-lg font-semibold">CI / CD</p>
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

export default Optimization;
