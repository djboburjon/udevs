import React from "react";

function ItConsulting() {
  return (
    <div
      id="itConsulting"
      className="bg-[url('/images/download.jfif')] bg-no-repeat bg-cover py-24"
    >
      <div className=" max-w-[1140px] mx-auto ">
        <h1 className="custom-title mb-20">IT consulting</h1>
        <div className="flex justify-between gap-28">
          <div className="w-1/2">
            <p className="max-w-[500px] text-2xl leading-10 font-medium text-[#18191f]">
              We can improve the qualifications of your employees thereby
              increasing the efficiency of your company
            </p>
            <div className="my-10">
              <div className="flex mb-4">
                <div className="min-w-[150px] px-[10px] pt-[20px] pb-[10px] mr-[15px] rounded-lg bg-[#f4f7ff]">
                  <img
                    className="mb-3"
                    src="/images/frontendIcon.svg"
                    alt="Frontend icon"
                  />
                  <p className="text-lg font-semibold">Frontend</p>
                </div>
                <div className="min-w-[150px] px-[10px] pt-[20px] pb-[10px] mr-[15px] rounded-lg bg-[#f4f7ff]">
                  <img
                    className="mb-3"
                    src="/images/backendIcon.svg"
                    alt="Backend icon"
                  />
                  <p className="text-lg font-semibold">Backend</p>
                </div>
                <div className="min-w-[150px] px-[10px] pt-[20px] pb-[10px] mr-[15px] rounded-lg bg-[#f4f7ff]">
                  <img
                    className="mb-3"
                    src="/images/architectureIcon.svg"
                    alt="Architecture icon"
                  />
                  <p className="text-lg font-semibold">Architecture</p>
                </div>
              </div>
              <div className="flex">
                <div className="min-w-[150px] px-[10px] pt-[20px] pb-[10px] mr-[15px] rounded-lg bg-[#f4f7ff]">
                  <img
                    className="mb-3"
                    src="/images/devopsIcon.svg"
                    alt="DevOps icon"
                  />
                  <p className="text-lg font-semibold">DevOps</p>
                </div>
                <div className="min-w-[150px] px-[10px] pt-[20px] pb-[10px] mr-[15px] rounded-lg bg-[#f4f7ff]">
                  <img
                    className="mb-3"
                    src="/images/uxUiIcon.svg"
                    alt="UX/UI icon"
                  />
                  <p className="text-lg font-semibold">UX/UI</p>
                </div>
                <div className="min-w-[150px] px-[10px] pt-[20px] pb-[10px] mr-[15px] rounded-lg bg-[#f4f7ff]">
                  <img
                    className="mb-3"
                    src="/images/qaIcon.svg"
                    alt="QA icon"
                  />
                  <p className="text-lg font-semibold">QA</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-1/2">
            <img
              src="/images/itConsultingImage.svg"
              alt="IT Consulting Image"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItConsulting;
