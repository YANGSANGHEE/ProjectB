import axios from "axios"; 
import { useEffect, useState } from "react";
import styled,{ keyframes } from "styled-components";

const key = "480dc33ea22b4f79ac3ea6368e1c9eac"; 

//대전 실시간 사고·공사 api
  const url = `https://openapi.its.go.kr:9443/eventInfo?apiKey=480dc33ea22b4f79ac3ea6368e1c9eac&type=all&eventType=all&minX=127.252183&maxX=127.538356&minY=36.194005&maxY=36.499218&getType=json`; 

 

  const TrafficNews = () => {    
  // const ITS = process.env.REACT_APP_ITS_KEY2;
   const [news, setnews] = useState([]);   

   useEffect(() => {
    //교통정보 끌고오는 api
    const fatchData = async () => {
      try{
        const res = await axios.get(url);  
        // setnews(res.data.body.items)
         setnews(res.data.body.items) 
      }catch(e){
        console.log(e)
      }
    }
    fatchData()
   },[]) 

  console.log(news)
 

  const move = keyframes`
    0%{
      transform: translateX(50px);
      opacity: 1;
    } 
    100%{
      transform: translateX(-200px);
      /* opacity: 0; */
    }
  `

  const Digit:any = styled.div`
  border: solid 2px red; 
  width: 300px;
  height: 40px;
  display: flex;  
  justify-content: center;
  flex-direction: row;
    flex-wrap: nowrap;
    align-content: center;
    align-items: center;

 
  ` 

  let Wrapdiv:any = styled.div` 
     border: solid 2px red; 
  width: 300px;
  height: 40px;
  display: flex;   
      overflow: hidden; 
  `

  let Siren:any  = styled.div`
    width: 50px;
    height: 40px; 
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-content: center;
    justify-content: center;
    align-items: center;
    &>img{
    width: 80px;
    width: 30px;
    height: 30px;
  }
  `

  const StyledDiv:any = styled.div`
  margin-right: 10px;
  border: solid 2px blue; 
  animation: ${move} 4s linear infinite;
    `  
  

  
  return (  
    <> 
     <Digit>       
       <Siren> <img className="img" src="/img/Siren.png" alt='siren'></img></Siren>
       <Wrapdiv>
     {news.map((item:any , index:number)=>{
     console.log(item)
     return( 
     <>  
     <></>
     <StyledDiv>  
     {item.roadName}
     {item.message}</StyledDiv>
      </>
     
     )
    })}
      </Wrapdiv>      
     </Digit>
    </> 
  )
  
 
};

export default TrafficNews;
