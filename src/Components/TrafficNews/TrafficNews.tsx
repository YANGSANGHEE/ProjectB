import axios from "axios";
import { it } from "node:test";
import { useEffect, useState } from "react";
// const {kakao} = window;
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
  console.log("g")
  

  
  return (
    <> 
   
    <div>hello</div> 
    
    //대전 뉴스·공사 
    {news.map((item:any , index:number)=>{
     console.log(item)
     return(
   
     <div className="news_div">
     {item.roadName}
     {item.message}
     </div>   
     )
    })}
    
    </>
 
   
    
  )
  
 
};

export default TrafficNews;
