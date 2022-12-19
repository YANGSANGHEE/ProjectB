import { useState } from 'react';
import Header from './Header';
import Congestion from './Congestion/Congestion';
import Speedlimit from './Speedlimit/SpeedLimit';
import CCTV from './CCTV/CCTV';

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
