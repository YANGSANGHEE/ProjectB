<<<<<<< HEAD
import Refresh from '@/Common/Refresh';
import { useEffect, useRef, useState } from 'react';
import vslData from '../testData/vsl.json'; //api 복사한 json데이터
import StylePopup from './Enforcement';
const { kakao } = window; //불러오기에 문제없음
=======
import { useCallback, useEffect, useState, useRef } from 'react'
import axios from 'axios';
const { kakao } = window; //불러오기에 문제없음
import vslData from "../testData/vsl.json" //api 복사한 json데이터
import StylePopup from './Enforcement';
import Refresh from './Refresh';
import Loadings from '../Loading';
>>>>>>> f5131e01eb997ed4182139f0ca01592faf180331

/* 줌 인 or 아웃에 따라 마커가 그룹으로 표시됨 */
const MarkerCluster = () => {
  // const ITS = process.env.REACT_APP_ITS_KEY2;
<<<<<<< HEAD
  const [map, setMap] = useState<any>();
  const [center, setCenter] = useState<any>();

  const map_def = useRef({});
  const getCenter_def = useRef();
=======
  const [data, SetData] = useState<any>(null);
  const [mapE, setMapE] = useState({}); //map_def 상태고정용
  const map_def = useRef({});
  const getCenter_def = useRef();
  const data_def = useRef();
>>>>>>> f5131e01eb997ed4182139f0ca01592faf180331

  let datas = vslData.body.items;
  useEffect(() => {
    //* 요청 횟수 문제로 테스트 데이터 사용
    new Promise((resolve, rejects) => {
      resolve(datas);
    })
      .then(() => {
        SetData(datas);
        let container = document.getElementById('map');
        let options = {
          center: new kakao.maps.LatLng(36.3504119, 127.3845475),
          level: 10,
        };
<<<<<<< HEAD
        getCenter_def.current = options.center;
        setCenter(getCenter_def.current);
        // console.log(data)
        let map = new kakao.maps.Map(container, options);
        map_def.current = map;
        setMap(map_def.current);
        // 일반 <-> 스카이뷰 타입 전환 컨트롤
=======
        getCenter_def.current = options.center; //center값 고정
        let map = new kakao.maps.Map(container, options);
        map_def.current = map; //map 고정
        setMapE(map_def.current); //map 고정값 저장(없애면 작동안됨)

        /* 일반 <-> 스카이뷰 타입 전환 컨트롤 */
>>>>>>> f5131e01eb997ed4182139f0ca01592faf180331
        let mapTypeControl = new kakao.maps.MapTypeControl();
        map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);

        /* 지도에 교통정보를 표시하도록 지도타입을 추가 */
        // map.addOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC);

        /* 클러스터러(마커 그룹화) */
        let clusterer = new kakao.maps.MarkerClusterer({
          map: map, // 마커들을 클러스터로 관리하고 표시할 지도 객체
          averageCenter: true, // 클러스터에 포함된 마커들의 평균 위치를 클러스터 마커 위치로 설정
          minLevel: 9, // 클러스터 할 최소 지도 레벨
        });
        // 마커
        const markers = datas.map((value: any) => {
          let imgSrc;
          let speed = value.limitSpeed;
<<<<<<< HEAD
          //속도에 따라 표시되는 마커 이미지
=======
          //속도에 따라 표시되는 마커 이미지 
>>>>>>> f5131e01eb997ed4182139f0ca01592faf180331
          switch (speed) {
            case '20':
              imgSrc = '/img/limit_20.png';
              break;
            case '30':
              imgSrc = '/img/limit_30.png';
              break;
            case '40':
              imgSrc = '/img/limit_40.png';
              break;
            case '50':
              imgSrc = '/img/limit_50.png';
              break;
            case '60':
              imgSrc = '/img/limit_60.png';
              break;
            case '70':
              imgSrc = '/img/limit_70.png';
              break;
            case '80':
              imgSrc = '/img/limit_80.png';
              break;
            case '100':
              imgSrc = '/img/limit_100.png';
              break;
            case '110':
              imgSrc = '/img/limit_110.png';
              break;
<<<<<<< HEAD
          }
          let imgSize = new kakao.maps.Size(60 * 0.5, 73 * 0.5); //마커 사이즈
          let markerImg = new kakao.maps.MarkerImage(imgSrc, imgSize);
          return new kakao.maps.Marker({
            position: new kakao.maps.LatLng(value.coordY, value.coordX),
            image: markerImg, //마커이미지
          });
        });
        clusterer.addMarkers(markers); //클러스터러에 마커 추가
=======
          };
          let imgSize = new kakao.maps.Size(60 * 0.5, 73 * 0.5); //마커 사이즈
          let markerImg = new kakao.maps.MarkerImage(imgSrc, imgSize);
          let positions = new kakao.maps.LatLng(value.coordY, value.coordX); //마커가 표시될 좌표
          let marker = new kakao.maps.Marker({
            position: positions,
            image: markerImg, //마커이미지 
          });

          /* 마커 마우스오버 이벤트 */
          // 마커에 표시할 인포윈도우를 생성 
          let infowindow = new kakao.maps.InfoWindow({
            content: `<div>${value.coordY},${value.coordX}</div>` // 인포윈도우에 표시할 내용 -- 진행중
          });
          (function (marker, infowindow) {
            // 마커에 mouseover 이벤트를 등록하고 마우스 오버 시 인포윈도우를 표시
            kakao.maps.event.addListener(marker, 'mouseover', function () {
              infowindow.open(map, marker);
            });
            // 마커에 mouseout 이벤트를 등록하고 마우스 아웃 시 인포윈도우를 닫기
            kakao.maps.event.addListener(marker, 'mouseout', function () {
              infowindow.close();
            });
          })(marker, infowindow);
          
          return marker; //markers의 return 
          });
        //클러스터러에 마커 추가 & 마커 표시
        clusterer.addMarkers(markers);
>>>>>>> f5131e01eb997ed4182139f0ca01592faf180331
      }) // axios는 default가 JSON으로 값을 받아옴
      .catch((e: ErrorCallback) => {
        if (e) throw e;
        console.log('에러');
      }); //에러처리
  }, []);
  return (
    <>
<<<<<<< HEAD
      <StylePopup />
      <Refresh map={map} center={center} level={10} />
      <div
        id='map'
        style={{
          width: '100vw',
          height: '100vh',
          position: 'absolute',
          top: '0',
          left: '0',
          zIndex: '-1',
        }}></div>
=======
      <Loadings data={data} />
      <StylePopup />
      <Refresh map={map_def.current} center={getCenter_def.current} />
      <div id='map' style={{ width: '100vw', height: '70vh' }}></div>
>>>>>>> f5131e01eb997ed4182139f0ca01592faf180331
    </>
  );
};
export default MarkerCluster;
