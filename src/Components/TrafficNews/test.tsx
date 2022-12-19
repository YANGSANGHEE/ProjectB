import axios from 'axios';
import { useEffect } from 'react'; 
import cors from 'cors';
//도시교통정보센터
const url= `http://www.utic.go.kr/guide/imsOpenData.do?key=5nI1S0Ty2bIVg1k4RtGKAZLHpKL4cA2eMXoMcHWVEtaCygc5qJHXD3iBheSG93`
         //xml 을 json으로 바꿔주자 그럼 해결 될지도 !!

         //아니면 서버를 (express)통해 받아와보기  

const Traffic = () => {
   

  useEffect(()=>{
    const fetchData = async() => {
        try{ 
            const res = await axios.get(url) 
            console.log(res.data)

        }catch(e){
            console.log(e)
        }
    }
    fetchData();
  },[])

  return (
    <>
      <div>hello</div>
    </>
  );
};

export default Traffic;
