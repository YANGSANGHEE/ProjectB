import '@/App.css';
import LayOut from './Components/Layout';
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
    </>
  );
};

export default App;
