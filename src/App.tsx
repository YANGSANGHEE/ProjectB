import '@/App.css';
import LayOut from './Components/Layout';
import Intro from './Components/Intro/Intro';
import { useState, useEffect } from 'react';
import { Web } from './Components/Web';
import '../public/img/green_logo.svg';
import '../public/img/Camera.svg';
import '../public/img/limit_0.png';

const App = () => {
  const [width, Setwidth] = useState<number>(window.innerWidth);
  const [trueSet, setTrue] = useState<boolean>(false);
  //화면 너비 값을 받을 State

  useEffect(() => {
    window.addEventListener('resize', () => {
      Setwidth(window.innerWidth);
      //화면 너비가 바뀔때마다 State에 갱신
    });
  }, [width]);

  const SetTruth = (val: boolean): void => {
    setTrue(val);
  };

  return (
    <>
      <Intro SetTruth={SetTruth} />
      {trueSet ? width < 899 ? <LayOut /> : <Web /> : null}
    </>
  );
};

export default App;
