import axios from "axios"; 
import { useEffect, useState } from "react";
import styled,{ keyframes } from "styled-components";
// const {kakao} = window;
import Div from "./div"
// import {keyframes} from "@emotion/react"
const key = "480dc33ea22b4f79ac3ea6368e1c9eac"; 

//대전 실시간 사고·공사 api
  const url = `https://openapi.its.go.kr:9443/eventInfo?apiKey=480dc33ea22b4f79ac3ea6368e1c9eac&type=all&eventType=all&minX=127.252183&maxX=127.538356&minY=36.194005&maxY=36.499218&getType=json`; 
  //const url =`https://openapi.its.go.kr:9443/eventInfo?apiKey=${key}&type=all&eventType=all&minX=127.252183&maxX=127.538356&minY=36.194005 &maxY=36.499218&getType=json`;



  const TrafficNews = () => {   
   const [news, setnews] = useState([]);   


   useEffect(() => {
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
    } 
    100%{
      transform: translateX(-200px);
    }
  `

  const Digit:any = styled.div`
  border: solid 2px red; 
  width: 500px;
  height: 40px;
  display: flex; 
  `



  const StyledDiv:any = styled.div`
    width: 200px;
    height: 20px;
    border: solid 2px blue; 
    animation: ${move} 2s linear infinite;
    `  





  
  return (  
    <> 
    {/* 대전 뉴스·공사  */}
    

     <Digit>
     {/* <StyledDiv>hello</StyledDiv> */}
      

     {news.map((item:any , index:number)=>{
     console.log(item)
     return( 
     <> 
      <StyledDiv>  
     {item.roadName}
     {item.message}</StyledDiv>
      </>
     
     )
    })}     
  


     </Digit>
  

    </> 
  )
  
 
};

export default TrafficNews;
