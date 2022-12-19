import axios, { AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';
const { kakao } = window;

const Speedlimit = () => {
  const [vsl, setVsl] = useState([]);
  // const apiKey = REACT_APP_ITS_KEY;
  const apiKey = process.env.REACT_APP_ITS_KEY;

  //컴포넌트가 처음 나타났을때
  useEffect(() => {
    // axios는 Promise 기반
    axios
      .get<object>(
        `https://openapi.its.go.kr:9443/vslInfo?apiKey=${apiKey}&getType=json`
      ) // API url 입력
      .then((res: AxiosResponse) => {
        // console.log(res.data);
        const items = res.data.body.items;
        setVsl(items);
      }) // axios는 default가 JSON으로 값을 받아옴
      .catch((e: ErrorCallback) => {
        if (e) throw e;
        console.log('에러');
      }); //에러처리
  }, []);

  //좌표 추출
  const coordAndlimitS = {
    coordX: vsl.map((item) => {
      return item.coordX;
    }),
    coordY: vsl.map((item) => {
      return item.coordX;
    }),
    limitSpeed: vsl.map((item) => {
      return item.limitSpeed;
    }),
  };
  console.log(coordAndlimitS);
  // return coordAndlimitS;

  return <></>;
};

export default Speedlimit;
