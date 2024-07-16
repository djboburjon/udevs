import React from "react";

function Services() {
  return (
    <div
      id="services"
      className="bg-[url('/images/download.jfif')] bg-no-repeat bg-cover py-24"
    >
      <div className=" max-w-[1140px] mx-auto ">
        <h1 className="custom-title mb-20">
          Development of mobile applications
        </h1>
        <div className="flex justify-between gap-28">
          <div className="w-1/2">
            <p className="max-w-[500px] text-2xl leading-10 font-medium text-[#18191f]">
              In collaboration with startups, we have learned how to create a
              creative and functional user interface for mobile applications.
            </p>
            <div className="my-10 flex">
              <div className="min-w-[150px] px-[10px] pt-[20px] pb-[10px] mr-[15px] rounded-lg bg-[#f4f7ff]">
                <img
                  className="mb-3"
                  src="/images/mobileIOS.svg"
                  alt="Ios icon"
                />
                <p className="text-lg font-semibold">IOS</p>
              </div>
              <div className="min-w-[150px] px-[10px] pt-[20px] pb-[10px] mr-[15px] rounded-lg bg-[#f4f7ff]">
                <img
                  className="mb-3"
                  src="/images/mobileAndroid.svg"
                  alt="Android icon"
                />
                <p className="text-lg font-semibold">Android</p>
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
            <div className="mb-7 text-[32px] font-extrabold text-[#464359]">Technologies</div>
            <div className="flex">
              <div className="min-w-[68px] mr-12">
                <img className="mb-2" src="/images/swiftIcon.svg" alt="Swift Icon" />
                <p className="text-xl font-semibold">Swift</p>
              </div>
              <div className="min-w-[68px] mr-12">
                <img className="mb-2" src="/images/kotlinIcon.svg" alt="Kotlin Icon" />
                <p className="text-xl font-semibold">Kotlin</p>
              </div>
              <div className="min-w-[68px] mr-12">
                <img className="mb-2" src="/images/flutterIcon.svg" alt="Flutter Icon" />
                <p className="text-xl font-semibold">Flutter</p>
              </div>
            </div>
          </div>
          <div className="w-1/2 bg-[url('/images/mobileImageBack.png')] rounded-[25px] flex items-center justify-center bg-no-repeat bg-cover">
            <img
              className="py-9"
              src="/images/mobileImage.png"
              alt="Team Image"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
