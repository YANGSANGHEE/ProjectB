import styled from "styled-components";
import { useState, useEffect } from "react";
import axios from "axios";
const CCTV = () => {
  const [kakao, setKakao] = useState({
    center: {
      lat: 36.3504119,
      lng: 127.3845475,
    },
    isPanto: true,
  });
  const MAP = process.env.REACT_APP_KAKAO_KEY;
  useEffect(() => {
    axios
      .get(`//dapi.kakao.com/v2/maps/sdk.js?appkey=${MAP}`) // API url 입력
      .then(res => console.log(res.data)) // axios는 default가 JSON으로 값을 받아옴
      .catch((e: ErrorCallback) => {
        if (e) throw e;
        console.log("에러");
      }); //에러처리
  }, []);
  return <></>;
};

export default CCTV;
