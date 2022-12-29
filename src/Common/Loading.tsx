import { calcPx, calcPxX } from '../Hooks/CalcPx';
import styled from 'styled-components';

const Loading = styled.div`
  width: 100vw;
  height: 100vh;
  background: #fff;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 3;
  ${({ theme }) => theme.flexSet.flexColumnCenter};
  & > img {
    margin-bottom: 2rem;
  }
  & > p {
    ${({ theme }) => theme.fontSize.font_12}
    color: ${({ theme }) => theme.Color.black};
  }
  ${({ theme }) => theme.device.mobile} {
    & > img {
      width: ${calcPx(145)};
      height: ${calcPx(146)};
    }
  }
  ${({ theme }) => theme.device.mobile_wide} {
    & > img {
      width: ${calcPxX(145)};
      height: ${calcPxX(146)};
    }
  }
`;

const Loadings = () => {
  return (
    <Loading>
      <img src='https://i.ibb.co/SK3cknC/Podori-Loading.png' alt='포돌이'></img>
      <p>데이터를 불러오는 중 입니다...</p>
    </Loading>
  );
};

export default Loadings;
