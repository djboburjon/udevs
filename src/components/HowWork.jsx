import React from "react";

function HowWork() {
  return (
    <div id="howWork" className="bg-white bg-no-repeat bg-cover py-24">
      <div className=" max-w-[1140px] mx-auto ">
        <h1 className="custom-title mb-20">How we work!</h1>
        <div className="relative pb-48">
          <img className="absolute top-10 px-24" src="/images/hLine.svg" alt="" />
          <div className="absolute flex justify-between bg-transparent z-20 ">
            <div className="text-center max-w-[20%]">
              <img className="mx-auto" src="/images/contactImage.svg" alt="" />
              <h4 className="text-lg font-bold leading-7">Contact</h4>
              <p className="font-normal leading-6">
                Send us your project request or project idea.
              </p>
            </div>
            <div className="text-center max-w-[20%]">
              <img className="mx-auto" src="/images/analysisImage.svg" alt="" />
              <h4 className="text-lg font-bold leading-7">Analysis</h4>
              <p className="font-normal leading-6">
                Send us your project request or project idea.
              </p>
            </div>
            <div className="text-center max-w-[20%]">
              <img className="mx-auto" src="/images/offerImage.svg" alt="" />
              <h4 className="text-lg font-bold leading-7">Offer</h4>
              <p className="font-normal leading-6">
                Send us your project request or project idea.
              </p>
            </div>
            <div className="text-center max-w-[20%]">
              <img
                className="mx-auto"
                src="/images/teamRoundImage.svg"
                alt=""
              />
              <h4 className="text-lg font-bold leading-7">Team</h4>
              <p className="font-normal leading-6">
                Send us your project request or project idea.
              </p>
            </div>
            <div className="text-center max-w-[20%]">
              <img className="mx-auto" src="/images/startImage.svg" alt="" />
              <h4 className="text-lg font-bold leading-7">Start</h4>
              <p className="font-normal leading-6">
                Send us your project request or project idea.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HowWork;
