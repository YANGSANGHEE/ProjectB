import { useState } from 'react';
import Header from './Header';
import { calcPx } from '@/Hooks/CalcPx';

const LayOut = () => {
  const [button, Setbutton] = useState<string>('traffic');

  const getbutton = (data: string): void => {
    Setbutton(data);
  };

  console.log(button);
  return (
    <>
      <Header getbutton={getbutton}></Header>
    </>
  );
};

export default LayOut;
