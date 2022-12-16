import { useCallback, useEffect, useState, useRef } from 'react'
import axios from 'axios';
const { kakao } = window; //불러오기에 문제없음
import vslData from "../testData/vsl.json" //api 복사한 json데이터
import StylePopup from './Enforcement';
import Refresh from './Refresh';

/* 줌 인 or 아웃에 따라 마커가 그룹으로 표시됨 */
const MarkerCluster = () => {
  // const ITS = process.env.REACT_APP_ITS_KEY2;
  // const [mapE, setMapE] = useState(null); //onClick 이벤트용
  // const [boundsE, setBoundsE] = useState(null); //onClick 이벤트용
  const map_def = useRef<any>();

  useEffect(() => {
    let data = vslData.body.items;
    //* 요청 횟수 문제로 테스트 데이터 사용
    new Promise((resolve, rejects) => {
      resolve(data);
    })
      .then(() => {
        let container = document.getElementById('map');
        let options = {
          center: new kakao.maps.LatLng(36.3504119, 127.3845475),
          level: 10,
        };
        // console.log(data)
        let map = new kakao.maps.Map(container, options);
        map_def.current = map;
        
        // 지도 확대 축소를 제어할 수 있는  줌 컨트롤을 생성합니다
        let zoomControl = new kakao.maps.ZoomControl();
        map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);
        kakao.maps.event.addListener(map, 'zoom_changed', function() {        
          let level = map.getLevel(); // 지도의 현재 레벨
          let cenLatlng = map.getCenter(); // 지도의 중심좌표
          let message = '현재 레벨'+level+',중심좌표'+cenLatlng;
          console.log(message)
        });

        // 일반 <-> 스카이뷰 타입 전환 컨트롤
        let mapTypeControl = new kakao.maps.MapTypeControl();
        map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);
        // 지도에 교통정보를 표시하도록 지도타입을 추가
        // map.addOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC);
        
        // 지도를 재설정할 범위정보를 가지고 있을 LatLngBounds 객체를 생성
        let bounds = new kakao.maps.LatLngBounds(); 
        // let points = new kakao.maps.LatLng(36.3504119, 127.3845475);
        bounds.extend(options.center) //객체에 좌표 추가
        // 클러스터러(마커 그룹화)
        let clusterer = new kakao.maps.MarkerClusterer({
          map: map, // 마커들을 클러스터로 관리하고 표시할 지도 객체 
          averageCenter: true, // 클러스터에 포함된 마커들의 평균 위치를 클러스터 마커 위치로 설정 
          minLevel: 9 // 클러스터 할 최소 지도 레벨 
        });
        // 마커
        const markers = data.map((value) => {
          let imgSrc;
          let speed =  value.limitSpeed;
          //속도에 따라 표시되는 마커 이미지 
          switch(speed) {
            case '20':
              imgSrc = "/img/limit_20.png";
              break;
            case '30':
              imgSrc = "/img/limit_30.png";
              break;
            case '40':
              imgSrc = "/img/limit_40.png";
              break;
            case '50':
              imgSrc = "/img/limit_50.png";
              break;
            case '60':
              imgSrc = "/img/limit_60.png";
              break;
            case '70':
              imgSrc = "/img/limit_70.png";
              break;
            case '80':
              imgSrc = "/img/limit_80.png";
              break;
            case '100':
              imgSrc = "/img/limit_100.png";
              break;
            case '110':
              imgSrc = "/img/limit_110.png";
              break;
          };
          let imgSize = new kakao.maps.Size(60*0.5, 73*0.5); //마커 사이즈
          let markerImg = new kakao.maps.MarkerImage(imgSrc, imgSize);
            return new kakao.maps.Marker({
                position : new kakao.maps.LatLng(value.coordY, value.coordX),
                image : markerImg //마커이미지 
            });
        });
        //클러스터러에 마커 추가
        clusterer.addMarkers(markers);
      }) // axios는 default가 JSON으로 값을 받아옴
      .catch((e: ErrorCallback) => {
        if (e) throw e;
        console.log('에러');
      }); //에러처리
    }, []);
  
  return (
  <>
    <StylePopup />
    <Refresh />
    <div id='map' style={{ width: '100vw', height: '70vh' }}></div>
  </>
  );
};
export default MarkerCluster;