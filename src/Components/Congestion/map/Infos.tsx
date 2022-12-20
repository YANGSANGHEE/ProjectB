import { useCallback, useRef } from 'react';
import styled from 'styled-components';
import { calcPx, calcPxX } from '@/Hooks/CalcPx';
import { theme } from '@/Theme/theme';

interface InfoSet {
  con: string;
  Color: string;
  [index: string]: string;
}
// 배열 안 객체 인터페이스 선언

const Information = styled.div`
  position: absolute;
  top: 9rem;
  left: 3rem;
  z-index: 1;
  background-color: rgba(255, 255, 255, 0.8);
  max-width: 18rem;
  width: ${calcPx(130)};
  padding: ${calcPx(11)} ${calcPx(16)};
  ${({ theme }) => theme.border.border_5px}
  /* 최상위 부모 */
  & > div:nth-child(1) {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* 혼잡도 컨텐츠 전체 콘테이너 */
    & > div {
      display: flex;
      align-items: center;
      margin-bottom: 5px;
      /* 혼잡도 라인 / 글짜 컨테이너 */
      & > span:nth-child(1) {
        display: inline-block;
        border-radius: 0.5rem;
        margin-right: 10px;
        width: ${calcPx(50)};
        max-width: 14rem;
        height: 0.5rem;
        /* 혼잡도 라인 */
      }
      & > span:nth-child(2) {
        ${({ theme }) => theme.fontSize.font_12}/* 혼잡도 글씨 */
      }
    }
    & > div:nth-child(5) {
      margin-bottom: 15px;
    }
    /* 혼잡도 라인 / 글짜 컨테이너 마지막 요소 */
    & > p {
      ${({ theme }) => theme.fontSize.font_11};
      color: #646464;
      text-align: center;
      word-break: keep-all;
    }
    /* 날짜 텍스트*/
  }
  & > div:nth-child(2) {
    /* 포지션 */
    position: absolute;
    top: -0.5rem;
    right: -0.5rem;
    z-index: 1;
    /* 디스플레이 속성 */
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    /* 사이즈 */
    width: 18px;
    height: 18px;
    /* 색상 */
    background: white;
    &:hover {
      background: #cdcdcd;
      transition: 0.3s;
    }
    /* 글자 속성 */
    font-weight: bold;
    font-size: 0.7rem;
    /* 기타 */
    border-radius: 50%;
    box-shadow: rgba(0, 0, 0, 0.2) 1.95px 1.95px 2.6px;
  }
  /* close 버튼*/
  ${({ theme }) => theme.device.mobile_wide} {
    /* 가로모드일때 스타일링*/
    padding: ${calcPxX(11)} ${calcPxX(16)};
    position: absolute;
    top: 9rem;
    left: 3rem;
    width: ${calcPx(130)};
    max-width: 21rem;
    & > div:nth-child(1) {
      & > div {
        & > span:nth-child(1) {
          width: ${calcPxX(80)};
          max-width: 14rem;
        }
      }
      & > p {
        ${({ theme }) => theme.fontSize.font_12}
      }
    }
  }
`;
// container 스타일 선언

const Info = () => {
  const InfoSet: InfoSet[] = [
    { con: '정체', Color: `${theme.Color.red}` },
    { con: '지체', Color: `${theme.Color.orange}` },
    { con: '보통', Color: `${theme.Color.yellow}` },
    { con: '원활', Color: `${theme.Color.green}` },
    { con: '원활', Color: `${theme.Color.l_gray}` },
  ];
  // 혼잡도 객체화 배열

  const ref = useRef(null);
  // Dom 사용을 위한 useRef

  const close = useCallback(() => {
    const info: HTMLElement | null = document.getElementById('info');
    if (info !== null) {
      info.style.display = 'none';
    }
  }, []);
  // 클릭시 콘테이너가 닫히는 클릭 이벤트

  return (
    <Information id='info' ref={ref}>
      <div>
        {InfoSet.map((value, index) => {
          return (
            <div key={index}>
              <span style={{ backgroundColor: `${value.Color}` }}></span>
              <span style={{ color: `${value.Color}` }}>{value.con}</span>
            </div>
          );
        })}
        <p>2022.12.13 11:46 기준</p>
      </div>
      <div onClick={close}>
        <p>&times;</p>
      </div>
    </Information>
  );
};

export default Info;
