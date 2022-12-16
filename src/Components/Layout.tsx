import { useState } from 'react';
import Header from './Header';
import Congestion from './Congestion/Congestion';
import Speedlimit from './Speedlimit/SpeedLimit';
import CCTV from './CCTV/CCTV';
import { calcPx } from '@/Hooks/CalcPx';

const LayOut = () => {
  const [button, Setbutton] = useState<string>('congestion');

  const getbutton = (data: string): void => {
    Setbutton(data);
  };

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
