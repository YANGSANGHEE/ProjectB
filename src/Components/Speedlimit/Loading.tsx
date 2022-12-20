import { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { calcPx, calcPxX } from '@/Hooks/CalcPx';
const { kakao } = window; //불러오기에 문제없음

const Loading = styled.div`
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 1);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 3;
  ${({ theme }) => theme.flexSet.flexColumnCenter}
  & > img {
    margin-bottom: 2rem;
  }
  & > p {
    ${({ theme }) => theme.fontSize.font_12}
    color: #fff;
  }
  ${({ theme }) => theme.device.mobile} {
    & > img {
      width: ${calcPx(70)};
      height: ${calcPx(115)};
    }
  }
  ${({ theme }) => theme.device.mobile_wide} {
    & > img {
      width: ${calcPxX(70)};
      height: ${calcPxX(115)};
    }
  }
`;

const Loadings = ({data}:any) => {
  return (
    <>
      {data === null ? (
        <Loading>
          <img src='/img/Podori_Loading.png' alt='포돌이'></img>
          <p>데이터를 불러오는 중 입니다...</p>
        </Loading>
      ) : null}
    </>
  );
};
export default Loadings;