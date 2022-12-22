import axios from "axios";
import { useEffect, useState, useRef } from "react";
import styled, { keyframes } from "styled-components";
import Modal from "./Modal";
import { calcPx } from "@/Hooks/CalcPx";

const ITS = process.env.REACT_APP_ITS_KEY_SPARE;
//대전 실시간 사고·공사 api
const url = `https://openapi.its.go.kr:9443/eventInfo?apiKey=${ITS}&type=all&eventType=all&minX=127.252183&maxX=127.538356&minY=36.194005&maxY=36.499218&getType=json`;
const TrafficNews = () => {
  // const ITS = process.env.REACT_APP_ITS_KEY2;
  const [news, setNews] = useState<[] | null>(null);
  useEffect(() => {
    //교통정보 끌고오는 api
    const fetchData = async () => {
      try {
        const res = await axios.get(url);
        setNews(res.data.body.items);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, []);

  let ref = useRef<null[] | HTMLDivElement[]>([]);
  useEffect(() => {
    ref.current;
  });

  //popup창 useState값이 참일때 열리고 false일때 닫힘
  const [open, setOpen] = useState(false);

  //css
  const move = keyframes`
    0%{
      transform: translateX(130px);
      opacity: 1;
    }
    100%{
      transform: translateX(-200px);
    }
  `;
  const Digit: any = styled.div`
    width: ${calcPx(280)};
    height: 3.8rem;
    ${({ theme }) => theme.border.border_5px}
    background-color: rgba(255,255,255,0.8);
    flex-wrap: nowrap;
    align-content: center;
    padding-right: 0 1rem;
    //지도위에 올라가게 설정
    position: absolute;
    bottom: 2rem;
    z-index: 2;
    ${({ theme }) => theme.flexSet.flexRowCenter};
  `;
  let WrapDiv: any = styled.div`
    width: 85%;
    height: 3rem;
    overflow: hidden;
    flex-wrap: wrap;
    align-content: center;
    ${({ theme }) => theme.flexSet.flexColumnCenter}
    &>div {
      height: 100%;
      padding-right: 10px;
      animation: ${move} 10s linear infinite;
      ${({ theme }) => theme.flexSet.flexRowCenter}
    }
  `;
  let Siren: any = styled.div`
    flex-wrap: nowrap;
    align-content: center;
    position: relative;
    margin-right: 10px;
    ${({ theme }) => theme.flexSet.flexRowCenter};
    & > img {
      width: 14px;
      height: 17px;
      position: relative;
    }
  `;

  const falseSet = (val: boolean): any => {
    setOpen(val);
  };
  return (
    <>
      <Modal open={open} falseSet={falseSet}></Modal>
      <Digit
        onClick={() => {
          setOpen(!open);
        }}
      >
        <Siren>
          <img className="img" src="./img/Siren.png" alt="siren"></img>
        </Siren>
        <WrapDiv>
          {news !== null ? (
            news.map((item: any, index: number) => {
              return (
                <div key={index}>
                  <span id="flowtext" style={{ fontSize: "12px" }}>
                    {item.roadName}
                    {item.message}
                  </span>
                </div>
              );
            })
          ) : (
            <div id="flow_wrap">
              <span id="flowtext" style={{ fontSize: "12px" }}>
                실시간 돌발상황
              </span>
            </div>
          )}
        </WrapDiv>
      </Digit>
    </>
  );
};

export default TrafficNews;
