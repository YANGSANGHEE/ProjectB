import AxiosExample from './AxiosExample';
import styled from 'styled-components';
import Speedlimit from './Speedlimit/SpeedLimit';
import { calcPx } from '@/Hooks/CalcPx';

const Media = styled.div`
  width: ${calcPx(100)};
  height: ${calcPx(100)};
  ${({ theme }) => theme.device.mobile} {
    background-color: salmon;
  }
  background-color: red;
`;

const LayOut = () => {
  return (
    <>
      <Media />
      <AxiosExample />
      <Speedlimit />
    </>
  );
};

export default LayOut;
