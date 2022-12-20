import "@/App.css";
import LayOut from "./Components/Layout";
import styled from "styled-components";
import { calcPx } from "./Hooks/CalcPx";
import CCTV from "./Components/CCTV/CCTV";

const Test = styled.div`
  width: ${calcPx(100)};
  height: ${calcPx(100)};
  background: ${({ theme }) => theme.Color.black};
`;

const App = () => {
  const [width, Setwidth] = useState<number>(window.innerWidth);
  //화면 너비 값을 받을 State

  useEffect(() => {
    window.addEventListener("resize", () => {
      Setwidth(window.innerWidth);
      //화면 너비가 바뀔때마다 State에 갱신
    });
  }, [width]);

  return (
    <>
      <LayOut />
      <img src="/img/CCTV.png" alt="CCTV"></img>\{/* 이미지 경로 참고 */}
      {/* <Test /> */}
      {/* styled component , calcPx적용 */}
      <CCTV />
    </>
  );
};

export default App;
