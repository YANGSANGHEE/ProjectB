import { useState } from "react";
import Header from "./Header";
import Congestion from "./Congestion/Congestion";
import Speedlimit from "@/Components/Speedlimit/map/SpeedMarker_cluster";
import CCTV from "./CCTV/CCTV";
import TrafficNews from "./TrafficNews/TrafficNews";
import styled from "styled-components";
import Loadings from "@/Common/Loading";

declare global {
  interface Window {
    kakao: any;
  }
}

const TrafficSet = styled.div`
  width: 100vw;
  ${({ theme }) => theme.flexSet.flexColumnCenter}
`;

const LayOut = () => {
  const [button, Setbutton] = useState<string>("congestion");

  const getbutton = (data: string): void => {
    Setbutton(data);
  };
  // header에 함수 자체를 props를 보내 탭버튼 클릭시 바뀌는 value값을 받아옴
  return (
    <>
      <Header getbutton={getbutton}></Header>
      {button === "congestion" ? (
        <Congestion />
      ) : button === "speed" ? (
        <Speedlimit />
      ) : button === "cctv" ? (
        <CCTV />
      ) : null}
      <TrafficSet>
        <TrafficNews />
      </TrafficSet>
    </>
  );
};

export default LayOut;
