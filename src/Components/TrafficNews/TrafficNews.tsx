import axios from 'axios';
import { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';

const key = '480dc33ea22b4f79ac3ea6368e1c9eac';

//대전 실시간 사고·공사 api
const url = `https://openapi.its.go.kr:9443/eventInfo?apiKey=4797961b793b49d6902fd954a18df260&type=all&eventType=all&minX=127.252183&maxX=127.538356&minY=36.194005&maxY=36.499218&getType=json`;

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
    border: solid 2px red;
    width: 350px;
    height: 30px; 
    border-radius: 30px;
    display: flex; 
    background-color: aliceblue;
    justify-content: center;
    flex-direction: row;
    flex-wrap: nowrap;
    align-content: center;
    align-items: center; 
    //지도위에 올라가게 설정
  position: absolute;
  top: 500px; left: 100px;
  z-index: 2;

  `;

  let WrapDiv: any = styled.div`
    /* border: solid 7px green; */
    width: 300px;
    height: 30px;
    display: flex;
    overflow: hidden;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
    align-items: center;
  `;

  let Siren: any = styled.div`
    width: 10px;
    height: 10px;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-content: center;
    justify-content: center;
    align-items: center;
    & > img {
      width: 23px;
      height: 23px; 
    & >div{
        color: gray;
      }
    }
  `;

  const StyledDiv: any = styled.div`
    margin-right: 10px;
    /* width: 500px; */
    /* border: solid 5px blue; */
    display: flex;
    /* overflow: hidden; */
    animation: ${move} 5s linear infinite;
  `;

  return (
    <>
      <Digit >
        <Siren>
          {/* {' '} */}
          <img className='img' src='/img/Siren.png' alt='siren'></img> 
          <div>|</div>
        </Siren>
        <WrapDiv> 
          {news.map((item: any, index: number) => {
      
            return ( 
                <StyledDiv>
                  {item.roadName}
                  {item.message}
                </StyledDiv>    
            );
          })}
    
        </WrapDiv>
      </Digit>
    </>
  );
};

export default TrafficNews;
