import { useState } from "react";
import styled, { keyframes } from "styled-components";

import { calcPx, calcPxX } from "@/Hooks/CalcPx";
import Logo from "../../../public/img/Logo";
import Car from "../../../public/img/intro_Traffic_car";

// svg matirx 정리
const matrixRed = "0 0 0 0 1 0 0 0 0 0.254902 0 0 0 0 0.254902 0 0 0 1 0";
const matrixYellow = "0 0 0 0 1 0 0 0 0 0.796078 0 0 0 0 0.0196078 0 0 0 1 0";
const matrixGreen = "0 0 0 0 0 0 0 0 0 1 0 0 0 0 0.0999999 0 0 0 1 0";

// 올그린 애니메이션 효과 키 프레임
const allGreen = keyframes`
  0% {
    right: 70vw;
  }
  80%{
    right: 70vw;
  }
  97%{
    right: -10vw;
  }
  99%{
    transform: rotate(-20deg)
  }
  100% {
    right:  0vw;
  }
`;
const IntroWrap = styled.div`
  ${({ theme }) => theme.device.mobile} {
    // 세로 화면
    // 도로 배경화면
    width: 100vw;
    height: 100vh;
    background: url("/img/intro_bg_Y.png") no-repeat center;
    background-size: cover;
    flex-direction: column;
    ${({ theme }) => theme.flexSet.flexRowCenter};
    & > div:nth-child(1) {
      // 올 그린 이미지
      width: ${calcPx(130)};
      height: ${calcPx(13)};
      background: url("/img/intro_AllGreen.png") no-repeat;
      background-size: ${calcPx(130)} ${calcPx(13)};
      position: relative;
      bottom: 11vh;
      animation: ${allGreen} 4s normal forwards;
    }
    & > div:nth-child(2) {
      // 가운데 동그라미 이미지
      width: ${calcPx(200)};
      height: ${calcPx(200)};
      background: url("/img/intro_Traffic.png") no-repeat;
      background-size: ${calcPx(200)} ${calcPx(200)};
      ${({ theme }) => theme.flexSet.flexRowCenter};
      & > div {
        // 차 svg 감싼 div
        width: ${calcPx(190)};
        height: ${calcPx(130)};
        position: relative;
        right: 1vw;
        bottom: 1vh;
        ${({ theme }) => theme.flexSet.flexColumnJcAs};
      }
    }
    & > div:nth-child(3) {
      // import한 logo svg를 감싼 div
      width: ${calcPx(150)};
      height: ${calcPx(37)};
      position: absolute;
      top: 75vh;
      ${({ theme }) => theme.flexSet.flexRowCenter};
    }
    & > div:nth-child(4) {
      // 해당 페이지는 모바일만 지원됩니다.
      position: absolute;
      top: 90vh;
      font-size: 11px;
      color: ${({ theme }) => theme.Color.gray};
    }

    ${({ theme }) => theme.device.mobile_wide} {
      // 가로 화면
      // 도로 배경화면
      background: url("/img/intro_bg_X.png") no-repeat center;
      background-size: cover;
      & > div:nth-child(1) {
        // 올 그린 이미지
        width: ${calcPxX(100)};
        height: ${calcPxX(12)};
        background: url("/img/intro_AllGreen.png") no-repeat;
        background-size: ${calcPxX(100)} ${calcPxX(12)};
        position: relative;
        bottom: 5vh;
      }
      & > div:nth-child(2) {
        // 가운데 동그라미 이미지
        width: ${calcPxX(160)};
        height: ${calcPxX(140)};
        background: url("/img/intro_Traffic.png") no-repeat center;
        background-size: ${calcPxX(160)} ${calcPxX(140)};
        & > div {
          // 차 svg 감싼 div
          width: ${calcPx(200)};
          height: ${calcPx(45)};
          position: relative;
          right: 0.3vw;
          ${({ theme }) => theme.flexSet.flexColumnJcAs};
        }
      }
      & > div:nth-child(3) {
        // import한 logo svg를 감싼 div
        width: ${calcPxX(126)};
        height: ${calcPxX(37)};
        position: relative;
        top: 5vh;
        ${({ theme }) => theme.flexSet.flexRowCenter};
      }
      & > div:nth-child(4) {
        // 해당 페이지는 모바일만 지원됩니다.
        position: absolute;
        top: 90vh;
        left: 70vw;
        font-size: 11px;
        color: ${({ theme }) => theme.Color.gray};
      }
    }
  }
`;

const Intro = () => {
  const [redCar, setRedCar] = useState({ bgcolor: "black", matrix: "0" });
  const [yellowCar, setYellowCar] = useState({ bgcolor: "black", matrix: "0" });
  const [greenCar, setGreenCar] = useState({ bgcolor: "black", matrix: "0" });

  setTimeout(() => {
    setRedCar({
      bgcolor: "#FF4141",
      matrix: matrixRed,
    });
    setTimeout(() => {
      setYellowCar({
        bgcolor: "#FFCB05",
        matrix: matrixYellow,
      });
      setTimeout(() => {
        setGreenCar({
          bgcolor: "#00ED5F",
          matrix: matrixGreen,
        });
      }, 1000);
    }, 1000);
  }, 1000);
  console.log(window.innerWidth);
  if (window.innerWidth >= 769) {
    return (
      <>
        <div>해당 페이지는 모바일만 지원됩니다.</div>
      </>
    );
  } else {
    return (
      <IntroWrap>
        <div id="allGreen">{/* 올그린 */}</div>
        <div>
          {/* 차 svg */}
          <div>
            <Car
              bgcolor={redCar.bgcolor}
              filter="filter0_d_158_128"
              matrixValues={redCar.matrix}
              feBlendValues="158_128"
            />
            <Car
              bgcolor={yellowCar.bgcolor}
              filter="filter0_d_157_109"
              matrixValues={yellowCar.matrix}
              feBlendValues="157_109"
            />
            <Car
              bgcolor={greenCar.bgcolor}
              filter="filter0_d_45_6613"
              matrixValues={greenCar.matrix}
              feBlendValues="45_6613"
            />
          </div>
        </div>
        <div id="logo">
          <Logo />
        </div>
        <div>해당 페이지는 모바일만 지원됩니다.</div>
      </IntroWrap>
    );
  }
};
export default Intro;
