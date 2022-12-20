<<<<<<< HEAD
import AxiosExample from "./AxiosExample";
import styled from "styled-components";
=======
import { useState } from 'react';
import Header from './Header';
import Congestion from './Congestion/Congestion';
// import Speedlimit from './Speedlimit/SpeedLimit';
import Speedlimit from '@/Components/Speedlimit/map/SpeedMarker_cluster';
import CCTV from './CCTV/CCTV';
>>>>>>> 6f9e58eb936016daf4c035b6788e06f064eb2ac4

declare global {
  interface Window {
    kakao: any;
  }
}

const LayOut = () => {
  const [button, Setbutton] = useState<string>('congestion');

  const getbutton = (data: string): void => {
    Setbutton(data);
  };

  // header에 함수 자체를 props를 보내 탭버튼 클릭시 바뀌는 value값을 받아옴
  return (
    <>
      <Header getbutton={getbutton}></Header>
      {button === 'congestion' ? (
        <Congestion />
      ) : button === 'speed' ? (
        <Speedlimit />
      ) : button === 'cctv' ? (
        <CCTV />
      ) : null}
    </>
  );
};

export default LayOut;
