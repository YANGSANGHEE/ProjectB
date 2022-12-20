import axios from 'axios';
import { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import Modal from './Modal';
import { calcPx, calcPxX } from '@/Hooks/CalcPx';

const ITS = process.env.REACT_APP_ITS_KEY_AYEON;
//대전 실시간 사고·공사 api
const url = `https://openapi.its.go.kr:9443/eventInfo?apiKey=${ITS}&type=all&eventType=all&minX=127.252183&maxX=127.538356&minY=36.194005&maxY=36.499218&getType=json`;
const TrafficNews = () => {
  // const ITS = process.env.REACT_APP_ITS_KEY2;
  const [news, setNews] = useState([]);
  useEffect(() => {
    //교통정보 끌고오는 api
    const fetchData = async () => {
      try {
        const res = await axios.get(url);
        // setNews(res.data.body.items)
        setNews(res.data.body.items);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, []);
  console.log(news);
  //popup창 useState값이 참일때 열리고 false일때 닫힘
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => {
    setModalOpen(true);
    console.log(modalOpen);
  };
  const closeModal = () => {
    setModalOpen(false);
  };
  //css
  const move = keyframes`
    0%{
      transform: translateX(130px);
      opacity: 1;
    }
    100%{
      transform: translateX(-200px);
      /* opacity: 0; */
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
    /* border: solid 7px green; */
    width: 85%;
    height: 3rem;
    overflow: hidden;
    flex-wrap: wrap;
    align-content: center;
    ${({ theme }) => theme.flexSet.flexColumnCenter}
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
  const StyledDiv: any = styled.div`
    height: 100%;
    margin-right: 10px;
    animation: ${move} 10s linear infinite;
    ${({ theme }) => theme.flexSet.flexRowCenter}
  `;
  return (
    <>
      <Digit onClick={openModal}>
        <Modal
          open={modalOpen}
          close={closeModal}
          header='Modal heading'></Modal>
        <Siren>
          <img className='img' src='/img/Siren.png' alt='siren'></img>
        </Siren>
        <WrapDiv>
          {news.map((item: any, index: number) => {
            return (
              <StyledDiv key={index}>
                <span style={{ fontSize: '12px' }}>
                  {item.roadName}
                  {item.message}
                </span>
              </StyledDiv>
            );
          })}
        </WrapDiv>
      </Digit>
    </>
  );
};

export default TrafficNews;
