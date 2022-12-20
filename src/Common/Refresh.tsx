import styled from 'styled-components';
const { kakao } = window;

const Refresh = ({ map, center, level }: any) => {
  const setCenter = () => {
    // 지도 중심으로 이동하는 함수
    let moveLatLon = center;
    map.setLevel(level);
    map.panTo(moveLatLon);
  };
  return (
    <RefButton onClick={setCenter}>
      <span>&#x21bb;</span>
    </RefButton>
  );
};

const RefButton = styled.div`
  /* 포지션 */
  position: absolute;
  top: 9rem;
  right: 2rem;
  z-index: 2;
  /* 디스플레이 속성 */
  display: flex;
  align-items: center;
  justify-content: center;
  /* 사이즈 */
  width: 2.5rem;
  height: 2.5rem;
  /* 여백 */
  /* 색상 */
  background: white;
  /* 기타 */
  box-shadow: rgba(0, 0, 0, 0.2) 1.95px 1.95px 2.6px;
  opacity: 75%;
  ${({ theme }) => theme.border.border_5px};
  &:hover {
    background: #cdcdcd;
    transition: 0.3s;
  }
  & > span {
    /* 글자 속성 */
    color: ${({ theme }) => theme.Color.black};
    font-size: 14pt;
    &:hover {
      transform: rotate(360deg);
      transition: 0.4s;
    }
  }
`;

export default Refresh;
