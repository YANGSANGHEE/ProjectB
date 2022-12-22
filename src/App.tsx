import '@/App.css';
import LayOut from './Components/Layout';
import Intro from './Components/Intro/Intro';
import { useState, useEffect } from 'react';
import { Web } from './Components/Web';
import '../public/img/CCTV.png';
import '../public/img/Intro_bg_x.png';
import '../public/img/Intro_bg_y.png';
import '../public/img/Intro_AllGreen.png';
import '../public/img/intro_Traffic.png';
import '../public/img/web.png';
import '../public/img/green_logo.svg';
import '../public/img/Camera.svg';
import '../public/img/limit_20.png';
import '../public/img/limit_30.png';
import '../public/img/limit_40.png';
import '../public/img/limit_50.png';
import '../public/img/limit_60.png';
import '../public/img/limit_70.png';
import '../public/img/limit_80.png';
import '../public/img/limit_100.png';
import '../public/img/limit_110.png';
import '../public/img/Logo_top.png';
import '../public/img/Podori_Loading.png';
import '../public/img/Siren.png';

const App = () => {
  const [width, Setwidth] = useState<number>(window.innerWidth);
  //화면 너비 값을 받을 State

  useEffect(() => {
    window.addEventListener('resize', () => {
      Setwidth(window.innerWidth);
      //화면 너비가 바뀔때마다 State에 갱신
    });
  }, [width]);

  return (
    <>
      <Intro />
      {width < 899 ? (
        <>
          <LayOut />
        </>
      ) : (
        <Web />
      )}
    </>
  );
};

export default App;
