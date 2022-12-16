import axios from 'axios';
import { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import TrafficNews from './TrafficNews';
const { kakao } = window;

const key = '480dc33ea22b4f79ac3ea6368e1c9eac';

//대전 실시간 사고·공사 api
const url = `https://openapi.its.go.kr:9443/eventInfo?apiKey=480dc33ea22b4f79ac3ea6368e1c9eac&type=all&eventType=all&minX=127.252183&maxX=127.538356&minY=36.194005&maxY=36.499218&getType=json`;

// `https://openapi.its.go.kr:9443/eventInfo?apiKey=${ITS}=all&eventType=all&minX=127.252183&maxX=127.538356&minY=36.194005&maxY=36.499218&getType=json`

declare global {
  interface window {
    kakao: any;
  }
}

const TrafficMap = () => {
  const ITS = process.env.REACT_APP_ITS_KEY;
  const [news, setnews] = useState([]);

  useEffect(() => {
    let news;
    axios
      .get<any>(
        `https://openapi.its.go.kr:9443/eventInfo?apiKey=${ITS}&type=all&eventType=all&minX=127.252183&maxX=127.538356&minY=36.194005&maxY=36.499218&getType=json`
      )
      .then((res) => {
        news = res.data.body.items;
        // console.log(news)
        let container = document.getElementById('map');
        let options = {
          center: new kakao.maps.LatLng(36.3504119, 127.3845475),
          level: 3,
        };
        let map = new kakao.maps.Map(container, options);
        //스카이뷰 전환 컨트롤
        let mapTypeControl = new kakao.maps.MapTypeControl(); 
        map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);
        //확대 축소 
        var zoomControl = new kakao.maps.ZoomControl();
  map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);
        // 교통정보
        let mapTypes ={
          trraffic: kakao.maps.MapTypeId.TRAFFIC
        }
        map.addOverlayMapTypeId(mapTypes.trraffic)
      })
      .catch((e) => {
        console.log(e);
      });
  });

  return (
    <>
      <TrafficNews></TrafficNews>
      <div
        id='map'
        style={{
          width: '50vw',
          height: '50vh',
          border: 'solid 2px red',
        }}></div>
    </>
  );
};

export default TrafficMap;