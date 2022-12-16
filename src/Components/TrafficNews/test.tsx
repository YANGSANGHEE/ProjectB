import axios from 'axios';
import { useEffect } from 'react';
//도시교통정보센터

const Traffic = () => {
  useEffect(() => {
    let news;
    axios
      .get<any>(
        `http://www.utic.go.kr/guide/imsOpenData.do?key=5nI1S0Ty2bIVg1k4RtGKAZLHpKL4cA2eMXoMcHWVEtaCygc5qJHXD3iBheSG93`
      )
      .then((res) => {
        news = res;
        console.log(res);
        console.log(news);
      })
      .catch((e) => {
        console.log(e);
      });
  });

  return (
    <>
      <div>hello</div>
    </>
  );
};

export default Traffic;
