import '@/App.css';
import LayOut from './Components/Layout';
<<<<<<< HEAD
import Intro from './Components/Intro/Intro';
import { useState, useEffect } from 'react';
import { Web } from './Components/Web';

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
      {/* <Intro /> */}
      {width < 899 ? (
        <>
          <LayOut />
        </>
      ) : (
        <Web />
      )}
=======
import styled from 'styled-components';
import { calcPx } from './Hooks/CalcPx';
import Maps from './Components/Speedlimit/map/Maps';
import MapsTest from './Components/Speedlimit/map/SpeedMarkers';
import MarkerCluster from './Components/Speedlimit/map/SpeedMarker_cluster';

const Test = styled.div`
  width: ${calcPx(100)};
  height: ${calcPx(100)};
  background: ${({ theme }) => theme.Color.black};
`;

const App = () => {
  // console.log(Speedlimit());
  return (
    <>
      <LayOut />
      <img src='/img/CCTV.png' alt='CCTV'></img>{/* 이미지 경로 참고 */}
      {/* <Test /> */}
      {/* styled component , calcPx적용 */}
      {/* <Maps /> */}
      <MarkerCluster />
>>>>>>> f5131e01eb997ed4182139f0ca01592faf180331
    </>
  );
};

export default App;
