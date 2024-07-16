import React from "react";

function UxDesign() {
  return (
    <div
      id="uxDesign"
      className="bg-[url('/images/download.jfif')] bg-no-repeat bg-cover py-24"
    >
      <div className=" max-w-[1140px] mx-auto ">
        <h1 className="custom-title mb-20">UI / UX design</h1>
        <div className="flex justify-between gap-28">
          <div className="w-1/2">
            <p className="max-w-[500px] text-2xl leading-10 font-medium text-[#18191f]">
              Our company takes a human-centered approach to design
            </p>
            <div className="my-10">
              <div className="flex mb-4">
                <div className="min-w-[150px] px-[10px] pt-[20px] pb-[10px] mr-[15px] rounded-lg bg-[#f4f7ff]">
                  <img
                    className="mb-3"
                    src="/images/uxIcon.svg"
                    alt="UX icon"
                  />
                  <p className="text-lg font-semibold">UX</p>
                </div>
                <div className="min-w-[150px] px-[10px] pt-[20px] pb-[10px] mr-[15px] rounded-lg bg-[#f4f7ff]">
                  <img
                    className="mb-3"
                    src="/images/UiIcon.svg"
                    alt="UI icon"
                  />
                  <p className="text-lg font-semibold">UI</p>
                </div>
                <div className="min-w-[150px] px-[10px] pt-[20px] pb-[10px] mr-[15px] rounded-lg bg-[#f4f7ff]">
                  <img
                    className="mb-3"
                    src="/images/prototypeIcon.svg"
                    alt="Prototyping icon"
                  />
                  <p className="text-lg font-semibold">Prototyping</p>
                </div>
              </div>
              <div className="flex">
                <div className="min-w-[150px] px-[10px] pt-[20px] pb-[10px] mr-[15px] rounded-lg bg-[#f4f7ff]">
                  <img
                    className="mb-3"
                    src="/images/mobileDesignIcon.svg"
                    alt="Mobile Design icon"
                  />
                  <p className="text-lg font-semibold">Mobile Design</p>
                </div>
                <div className="min-w-[150px] px-[10px] pt-[20px] pb-[10px] mr-[15px] rounded-lg bg-[#f4f7ff]">
                  <img
                    className="mb-3"
                    src="/images/webDesignIcon.svg"
                    alt="Web Design icon"
                  />
                  <p className="text-lg font-semibold">Web Design</p>
                </div>
                <div className="min-w-[150px] px-[10px] pt-[20px] pb-[10px] mr-[15px] rounded-lg bg-[#f4f7ff]">
                  <img
                    className="mb-3"
                    src="/images/atomicDesignIcon.svg"
                    alt="Atomic Design icon"
                  />
                  <p className="text-lg font-semibold">Atomic Design</p>
                </div>
              </div>
            </div>
            <div className="mb-7 text-[32px] font-extrabold text-[#464359]">
              Technologies
            </div>
            <div className="flex">
              <div className="min-w-[68px] mr-12">
                <img
                  className="mb-2"
                  src="/images/figmaIcon.svg"
                  alt="Figma Icon"
                />
                <p className="text-xl font-semibold">Figma</p>
              </div>
              <div className="min-w-[68px] mr-12">
                <img
                  className="mb-2"
                  src="/images/sketchIcon.svg"
                  alt="Sketch Icon"
                />
                <p className="text-xl font-semibold">Sketch</p>
              </div>
              <div className="min-w-[68px] mr-12">
                <img
                  className="mb-2 w-10 h-14"
                  src="/images/lottieIcon.svg"
                  alt="Lottie Icon"
                />
                <p className="text-xl font-semibold">Lottie</p>
              </div>
              <div className="min-w-[68px] mr-12">
                <img
                  className="mb-2"
                  src="/images/IllustratorIcon.svg"
                  alt="Illustrator Icon"
                />
                <p className="text-xl font-semibold">Illustrator</p>
              </div>
            </div>
          </div>
          <div className="w-1/2 bg-[url('/images/mobileImageBack.png')] rounded-[25px] flex items-center justify-center bg-no-repeat bg-cover">
            <img className="py-9" src="/images/uxImage.png" alt="Team Image" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default UxDesign;
