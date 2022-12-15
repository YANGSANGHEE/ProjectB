import styled from "styled-components";
import { calcPx } from "@/Hooks/CalcPx";
import Traffic from "../../../public/img/intro_Traffic_car";

const IntroWrap = styled.div`
  background: white & > div {
    width: ${calcPx(100)};
    height: ${calcPx(70)};
    display: flex;
    justify-content: center;
    align-items: center;
  }

  ${({ theme }) => theme.device.mobile} {
    // 768 이하
    width: 100vw;
    height: 100vh;
    background: url("/img/Intro_bg.png") no-repeat;
    background-size: 100vw 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;

const Intro = () => {
  return (
    <IntroWrap>
      <img src="/img/Intro_AllGreen.png" alt="로고"></img>
      <div>
        <Traffic bgcolor="red" />
      </div>
      <div>
        <Traffic bgcolor="yellow" />
      </div>
      <div>
        <Traffic bgcolor="green" />
      </div>
    </IntroWrap>
  );
};

export default Intro;
