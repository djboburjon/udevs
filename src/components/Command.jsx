import React, { useEffect, useState } from "react";

function Command() {
  let start = 75;
  let end = 100;
  const [number, setNumber] = useState(start);

  useEffect(() => {
    const increment = 1;
    const updateNumber = () => {
      setNumber((prev) => {
        if (prev < end) {
          return prev + increment;
        } else {
          return end;
        }
      });
    };

    const interval = setInterval(updateNumber, 50);
    return () => clearInterval(interval);
  }, [start, end]);
  return (
    <div id="command" className="bg-[#F4F7FF] py-24">
      <div className=" max-w-[1140px] mx-auto ">
        <h1 className="custom-title mb-10">Team</h1>
        <div className="flex items-end justify-between gap-28">
          <div className="w-1/2">
            <p className="text-xl leading-10 font-medium text-[#464359]">
              For each project, we form a team that includes a project manager,
              business analyst, UI / UX designer, DevOps, QA engineer, backend
              and front-end developers.
            </p>
            <div className="mt-10 mb-1 text-[120px] leading-[96px] text-[#1b5bf7] font-bold transition-opacity duration-500 ease-in-out">
              {`${Math.floor(number)}${number == 100 ? "+" : ""}`}
            </div>
            <h2 className="text-[40px] font-extrabold text-[#464359]">
              Dedicated team
            </h2>
          </div>
          <div className="w-1/2">
            <img src="/images/teamImage.svg" alt="Team Image" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Command;
