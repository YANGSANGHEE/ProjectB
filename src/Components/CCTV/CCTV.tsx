import styled from 'styled-components';
import { useState, useEffect, useRef, useCallback } from 'react';
import axios, { AxiosAdapter, AxiosDefaults, AxiosResponse } from 'axios';
import ReactPlayer from 'react-player';
import { rootCertificates } from 'tls';
import CCTVItem from './CCTVItem';
import { prototype } from 'events';
import AxiosExample from '../AxiosExample';
const { kakao } = window;
// const Media = styled.div`
//   width: 320px;
//   height: 720px;
//   ${({ theme }) => theme.device.mobile} {
//     background-color: salmon;
//   }
//   /* 0~768px 까지 background-color salmon 색 그이후는 red */
//   background-color: red;
// `;
const CCTV = () => {
  const [map, setMap] = useState({
    center: {
      lat: 36.3504119,
      lng: 127.3845475,
    },
    isPanto: true,
  });
  const ref = useRef(null);
  const ITS = process.env.REACT_APP_ITS_KEY;
  useEffect(() => {
    axios
      .get(
        `https://openapi.its.go.kr:9443/cctvInfo?apiKey=${ITS}&type=all&cctvType=2&minX=127.252183&maxX=127.538356&minY=36.194005&maxY=36.499218&getType=json`
      )
      .then((res: AxiosResponse) => {
        const cctvPlace = res.data.response.data;
        // cctv데이터 변수 선언
        const container = document.getElementById('map');
        const options = {
          center: new kakao.maps.LatLng(map.center.lat, map.center.lng),
          level: 9,
        };
        // 초기 카카오맵 설정값
        const mapScript = new kakao.maps.Map(container, options);
        // 카카오맵 기본 설정 좌표 실행
        const mapTypeControl = new kakao.maps.MapTypeControl();
        // 지도와 스카이뷰를 선택해서 볼 수 있음.
        mapScript.addControl(
          mapTypeControl,
          kakao.maps.ControlPosition.TOPRIGHT
        );
<<<<<<< HEAD
        const imgSrc = "/img/CCTV.png",
=======
        // const zoomControl = new kakao.maps.ZoomControl();
        // // 확대 축소가 가능한 컨트롤바
        // mapScript.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);
        const imgSrc = '/img/CCTV.png',
>>>>>>> 7858ea638f4ed2d6f778bb28dddcf738dca90620
          imgSize = new kakao.maps.Size(25, 40);
        const imageOption = { offset: new kakao.maps.Point(15, 33) };
        // 마커 디자인 변경
        const markerImg = new kakao.maps.MarkerImage(
          imgSrc,
          imgSize,
          imageOption
        );
        cctvPlace.map((el: any) => {
          const marker = new kakao.maps.Marker({
            map: mapScript,
            // 카카오맵
            position: new kakao.maps.LatLng(el.coordy, el.coordx),
            // 받아온 데이터 좌표 뿌리기
            image: markerImg,
            // 마커 이미지 변경
          });
          let iwContent =
            "<video id='video' autoplay='autoplay' muted='muted' controls style='width:300px; height: 200px'>" +
            `<source src=${el.cctvurl} type="video/mp4"/>` +
            '</video>';
          //   `
          // <div style='width:200px; height:80px; position:relative;'>
          //   <div id = 'close'  style='width:20px; height:20px; position:absolute; top:10px; left:10px; background:#fff;'></div>
          //   <video id='video' autoplay='autoplay' muted='muted' controls>
          //   <source src=${el.cctvurl} type="video/mp4"/>
          //   </video>
          // </div>
          // `;

          const infowindow = new window.kakao.maps.InfoWindow({
            zIndex: 1,
            content: iwContent,
            removable: true,
            // 닫기버튼 기능
          });
          // 비디오 영상구현
          kakao.maps.event.addListener(marker, 'click', function () {
            infowindow.open(mapScript, marker);
          });

          marker.setMap(mapScript);
        });
        const setDraggable = (draggable: any) => {
          // 마우스 드래그로 지도 이동 가능여부를 설정
          mapScript.setDraggable(draggable);
        };
        setDraggable(true);
        // 드래그 가능
        console.log('loading kakaomap');
      })
      .catch((e: ErrorCallback) => {
        if (e) throw e;
        console.log('에러');
      });
  }, []);

  return (
    <div
      id='map'
      style={{
        width: '100vw',
        height: '100vh',
        position: 'relative',
        overflow: 'hidden',
      }}>
      <CCTVItem></CCTVItem>
    </div>
  );
};

export default CCTV;
