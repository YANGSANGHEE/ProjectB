import '@/App.css';
import LayOut from './Components/Layout';
import styled from 'styled-components';
import { calcPx } from './Hooks/CalcPx';

const Test = styled.div`
  width: ${calcPx(100)};
  height: ${calcPx(100)};
  background: ${({ theme }) => theme.Color.black};
`;

const App = () => {
  return (
    <>
      <LayOut />
      <Test></Test>
    </>
  );
};

export default App;
