import '@/App.css';
import LayOut from './Components/Layout';
import styled from 'styled-components';
import { calcPx } from './Hooks/CalcPx'; 
import  TrafficMap  from './Components/TrafficNews/TrafficMap';
import Traffic from './Components/TrafficNews/Test';


const Test = styled.div`
  width: ${calcPx(100)};
  height: ${calcPx(100)};
  background: ${({ theme }) => theme.Color.black};
`;

const App = () => {
  return (
    <>
      <TrafficMap/>
      <Traffic/>
      
  
      {/* styled component , calcPx적용 */}
    </>
  );
};

export default App;
