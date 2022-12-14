import '@/App.css';
import LayOut from './Components/Layout';
import styled from 'styled-components';
import { calcPx } from './Hooks/CalcPx';
import Speedlimit from './Components/Speedlimit/SpeedLimit';
import Maps from './Components/Speedlimit/map/Maps';

const Test = styled.div`
  width: ${calcPx(100)};
  height: ${calcPx(100)};
  background: ${({ theme }) => theme.Color.black};
`;

const App = () => {
  return (
    <>
      <LayOut />
      <img src='/img/CCTV.png' alt='CCTV'></img>\{/* 이미지 경로 참고 */}
      <Test />
      {/* styled component , calcPx적용 */}
      <Maps />
    </>
  );
};

export default App;
