import axios from "axios";
import { it } from "node:test";
import { useEffect, useState } from "react";
const key = "480dc33ea22b4f79ac3ea6368e1c9eac"; 
const url = `https://openapi.its.go.kr:9443/eventInfo?apiKey=${key}&type=all&eventType=all&minX=126.800000&maxX=127.890000&minY=34.900000 &maxY=35.100000&getType=json`;
const TrafficNews = () => {   


   const [news, setnews] = useState([]);   


   useEffect(() => {
    const fatchData = async () => {
      try{
        const res = await axios.get(url); 
        setnews(res.data.body.items)
      }catch(e){
        console.log(e)
      }
    }
    fatchData()
   },[]) 




  
  console.log(news)
  
  
//   for(let key in news){
//     console.log(news[key]) 
//     for(let keys in news[key]){ 
//       getbodyValue(news[key][keys])
//     }
//   } 
  
// console.log(bodyValue)


  
  // 객체의 value값 으로 접근 
  const keys = Object.values(news)
  

 
 

   


  
  const trafficAip = "https://openapi.its.go.kr:9443/eventInfo?apiKey=480dc33ea22b4f79ac3ea6368e1c9eac&type=all&eventType=all&minX=126.800000&maxX=127.890000&minY=34.900000 &maxY=35.100000&getType=json"
  return <> 
   
   <div>hello</div> 
     
   <>
   {/* {news.map((item:any , index:number)=>{
    console.log(item)
    return(
    
   <div>{item}</div> 
       
    )
   })} */}
   
   </>

  </>;
};

export default TrafficNews;
