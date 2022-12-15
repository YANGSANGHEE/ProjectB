import styled from "styled-components";
import { useState, useEffect } from "react";
import axios from "axios";
const { kakao } = window;
const Media = styled.div`
  width: 100px;
  height: 100px;
  ${({ theme }) => theme.device.mobile} {
    background-color: salmon;
  }
  /* 0~768px 까지 background-color salmon 색 그이후는 red */
  background-color: red;
`;
const CCTV = () => {
  const [map, setMap] = useState({
    center: {
      lat: 36.3504119,
      lng: 127.3845475,
    },
    isPanto: true,
  });

  useEffect(() => {
    // let markers = [];
    const container = document.getElementById("map");
    const options = {
      center: new kakao.maps.LatLng(map.center.lat, map.center.lng),
      level: 3,
    };
    const mapScript = new kakao.maps.Map(container, options);
    console.log(mapScript);
    const markerPosition = new kakao.maps.LatLng(
      map.center.lat,
      map.center.lng
    );
    const marker = new kakao.maps.Marker({
      position: markerPosition,
    });
    marker.setMap(mapScript);
    const setDraggable = (draggable: any) => {
      // 마우스 드래그로 지도 이동 가능여부를 설정
      mapScript.setDraggable(draggable);
    };
    console.log("loading kakaomap");
  });

  return (
    <div
      id="map"
      style={{
        width: "100%",
        height: "50vh",
        position: "relative",
        overflow: "hidden",
      }}
    ></div>
  );
};

export default CCTV;
