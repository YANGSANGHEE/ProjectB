import styled, { css } from 'styled-components';
const { kakao } = window; 

const Refresh =({event}:any)=> {
  return(
    <RefButton onClick={event}>
      <span>&#x21bb;</span>
    </RefButton>
  )
}

const RefButton = styled.div`
  /* 포지션 */
  position: absolute;
  top: 22vh; right: 2vw;
  z-index: 2;
  /* 디스플레이 속성 */
  display: flex;
  align-items: center;
  justify-content: center;
  /* 사이즈 */
  width: 25px; height: 25px;
  /* 여백 */
  /* 색상 */
  background: white;
  &:hover {
    background: #CDCDCD;
    transition: 0.3s;
  }
  /* 기타 */
  ${({ theme }) => theme.border.border_5px };
  box-shadow: rgba(0, 0, 0, 0.2) 1.95px 1.95px 2.6px;
  opacity: 75%;
  span {
    /* 글자 속성 */
    ${({ theme }) => theme.Color.black };
    font-size: 14pt;
    &:hover {
      transform: rotate( 360deg );
      transition: 0.4s;
    }
  }
  `

export default Refresh;

