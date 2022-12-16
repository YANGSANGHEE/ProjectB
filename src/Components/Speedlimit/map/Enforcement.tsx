import { useCallback, useRef } from 'react';
import styled, { css } from 'styled-components';

const StylePopup = () => {
  const close = useCallback(() => {
    let popup: HTMLElement | null = document.getElementById('popup');
    popup.style.display = 'none';
  }, []);
  const ref = useRef(null);
  
  return (
    <EnforceContainer id='popup' ref={ref}>
      <CloseButton onClick={close}>
        <p>&times;</p>
      </CloseButton>
      <Box>
        <div className='boxContainer'>
          <img src='/img/Camera.svg' />
          <p className='title'>구간단속중</p>
          <p className='desc'>Enforcement</p>
        </div>
      </Box>
    </EnforceContainer>
  );
};

const EnforceContainer = styled.div`
  display: block;
  position: absolute;
  top: 150px; left: 40px;
  z-index: 2;
`
const CloseButton = styled.div`
  /* 포지션 */
  position: relative;
  top: 13px; left: 81px;
  z-index: 1;
  /* 디스플레이 속성 */
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  /* 사이즈 */
  width: 18px; height: 18px;
  /* 색상 */
  background: white;
  &:hover {
    background: #CDCDCD;
    transition: 0.3s;
  }
  /* 글자 속성 */
  font-weight: bold;
  font-size: 0.7rem;
  /* 기타 */
  border-radius: 50%;
  box-shadow: rgba(0, 0, 0, 0.2) 1.95px 1.95px 2.6px;
`;

const Box = styled.div`
  /* 디스플레이 속성 */
  display: flex;
  align-items: center;
  justify-content: center;
  /* 사이즈 */
  width: 95px; height: 60px;
  /* 여백 */
  /* 색상 */
  background: #FED000;
  /* 글자 속성 */
  ${({ theme }) => theme.Color.black };
  ${({ theme }) => theme.fontSize.font_12 };
  font-weight: bold;

  /* 기타 */
  ${({ theme }) => theme.border.border_5px };
  box-shadow: rgba(0, 0, 0, 0.2) 1.95px 1.95px 2.6px;
  opacity: 85%;

  /* 하위요소 속성 */
  .boxContainer {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    margin: 10px;
    img{
      width: 26px; height: 12px;
    }
    .title {
      font-size: 0.9rem;
      font-weight: bold;
      margin: 0;
    }
    .desc {
      font-size: 0.1rem;
      font-weight: lighter;
      margin: 0;
    }
  }
`
export default StylePopup;