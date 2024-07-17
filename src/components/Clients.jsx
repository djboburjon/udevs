import React from "react";
import styled, { keyframes, css } from "styled-components";

function Clients() {
  const row1 = [
    "/images/akfaMedline.svg",
    "/images/cspase.svg",
    "/images/delever.svg",
    "/images/fonon.svg",
    "/images/hamkorbank.svg",
    "/images/hoshimov.svg",
    "/images/iman.svg",
  ];

  const row2 = [
    "/images/maxtra.svg",
    "/images/smsuz.svg",
    "/images/goodzone.svg",
    "/images/rabota.svg",
    "/images/workly.svg",
    "/images/mytaxi.svg",
    "/images/shefburger.svg",
  ];
  return (
    <div id="clients" className="pt-28">
      <div className="max-w-[1140px] mx-auto">
        <h1 className="custom-title mb-20">Our services</h1>
      </div>
      <Wrapper>
        <Marquee>
          <MarqueeGroup>
            {row1.map((el) => (
              <ImageGroup>
                <Image src={el} className="hover:scale-110" />
              </ImageGroup>
            ))}
          </MarqueeGroup>
          <MarqueeGroup>
            {row1.map((el) => (
              <ImageGroup>
                <Image src={el} className="hover:scale-110" />
              </ImageGroup>
            ))}
          </MarqueeGroup>
        </Marquee>
        <Marquee>
          <MarqueeGroup2>
            {row2.map((el) => (
              <ImageGroup>
                <Image src={el} className="hover:scale-110" />
              </ImageGroup>
            ))}
          </MarqueeGroup2>
          <MarqueeGroup2>
            {row2.map((el) => (
              <ImageGroup>
                <Image src={el} className="hover:scale-110" />
              </ImageGroup>
            ))}
          </MarqueeGroup2>
        </Marquee>
      </Wrapper>
    </div>
  );
}

export default Clients;

const Wrapper = styled.div`
  width: 100%;
  height: fit-content;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Marquee = styled.div`
  display: flex;
  width: 100%;
  overflow: hidden;
  user-select: none;
  margin-bottom: 30px;
`;

const scrollX = keyframes`
  from {
    left: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
`;

const common = css`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  white-space: nowrap;
  width: 100%;
  animation: ${scrollX} 100s linear infinite;
`;

const MarqueeGroup = styled.div`
  ${common}
`;
const MarqueeGroup2 = styled.div`
  ${common}
  animation-direction: reverse;
  animation-delay: -3s;
`;

const ImageGroup = styled.div`
  display: grid;
  place-items: center;
  width: clamp(10rem, 1rem + 40vmin, 30rem);
  padding: calc(clamp(10rem, 1rem + 30vmin, 30rem) / 20);
  `;
  
  const Image = styled.img`
  object-fit: contain;
  width: 100%;
  height: 100%;
  /* border: 1px solid black; */
  border-radius: 24px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease-in-out;
`;