import { useState } from 'react';
import Header from './Header';
import Congestion from './Congestion/Congestion';
import Speedlimit from '@/Components/Speedlimit/map/SpeedMarker_cluster';
import CCTV from './CCTV/CCTV';
import TrafficNews from './TrafficNews/TrafficNews';
import styled from 'styled-components';

declare global {
  interface Window {
    kakao: any;
  }
}

const Center = styled.div`
  ${({ theme }) => theme.flexSet.flexColumnCenter}
`;

const LayOut = () => {
  const [button, Setbutton] = useState<string>('congestion');

  const getbutton = (data: string): void => {
    Setbutton(data);
  };
  // header에 함수 자체를 props를 보내 탭버튼 클릭시 바뀌는 value값을 받아옴
  return (
    <Center>
      <Header getbutton={getbutton}></Header>
      {button === 'congestion' ? (
        <Congestion />
      ) : button === 'speed' ? (
        <Speedlimit />
      ) : button === 'cctv' ? (
        <CCTV />
      ) : null}
      <TrafficNews />
    </Center>
  );
};

export default LayOut;
