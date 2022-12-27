import { useCallback, useEffect, useState, useRef } from 'react';
const { kakao } = window; //불러오기에 문제없음
// import vslData from "../testData/vsl.json" //api 복사한 json데이터
import Refresh from '@/Common/Refresh';
import StylePopup from './Enforcement';
import enfCamData from '../testData/unmanned_enforcement_cam_dajeon.json';
/**
 * ? 대전 교통 단속카메라 기준
 * 줌 인 or 아웃에 따라 마커가 그룹으로 표시됨(클러스터)
 * 사용데이터 : 전국무인교통단속카메라표준데이터(대전 기준)
 * * 221220 기준 사용중
 */
const MarkerClusterEnfCam = () => {
  // const ITS = process.env.REACT_APP_ITS_KEY2;
  const [map, setMap] = useState<any>();
  const [center, setCenter] = useState<any>();

  const map_def = useRef({});
  const getCenter_def = useRef();

  // console.log(enfCamData.map(val => {return val["제한속도"]}))
  let datas = enfCamData;
  let arr: any = [];
  useEffect(() => {
    //* 요청 횟수 문제로 테스트 데이터 사용
    new Promise((resolve, rejects) => {
      resolve(datas);
    })
      .then(() => {
        let container = document.getElementById('map');
        let options = {
          center: new kakao.maps.LatLng(36.3504119, 127.3845475),
          level: 7,
        };
        getCenter_def.current = options.center; //center값 고정
        setCenter(getCenter_def.current);
        let map = new kakao.maps.Map(container, options);
        map_def.current = map; //map 고정
        setMap(map_def.current);

        /* 일반 <-> 스카이뷰 타입 전환 컨트롤 */
        let mapTypeControl = new kakao.maps.MapTypeControl();
        map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);

        /* 지도에 교통정보를 표시하도록 지도타입을 추가 */
        // map.addOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC);

        /* 클러스터러(마커 그룹화) */
        let clusterer = new kakao.maps.MarkerClusterer({
          map: map, // 마커들을 클러스터로 관리하고 표시할 지도 객체
          averageCenter: true, // 클러스터에 포함된 마커들의 평균 위치를 클러스터 마커 위치로 설정
          minLevel: 6, // 클러스터 할 최소 지도 레벨
        });
        // 마커
        let arr: any[] = [];
        const markers = enfCamData.map((value: any) => {
          let imgSrc;
          let speed: number = value['제한속도'];
          //속도에 따라 표시되는 마커 이미지
          switch (speed) {
            case 20:
              imgSrc = './img/limit_20.png';
              break;
            case 30:
              imgSrc = './img/limit_30.png';
              break;
            case 40:
              imgSrc = './img/limit_40.png';
              break;
            case 50:
              imgSrc = './img/limit_50.png';
              break;
            case 60:
              imgSrc = './img/limit_60.png';
              break;
            case 70:
              imgSrc = './img/limit_70.png';
              break;
            case 80:
              imgSrc = './img/limit_80.png';
              break;
            case 100:
              imgSrc = './img/limit_100.png';
              break;
            case 110:
              imgSrc = './img/limit_110.png';
              break;
            default:
              imgSrc = './img/limit_0.png'; //투명 이미지
          }
          let imgSize = new kakao.maps.Size(60 * 0.5, 73 * 0.5); //마커 사이즈
          let markerImg = new kakao.maps.MarkerImage(imgSrc, imgSize);
          let positions = new kakao.maps.LatLng(value['위도'], value['경도']); //마커가 표시될 좌표
          let marker = new kakao.maps.Marker({
            position: positions,
            image: markerImg, //마커이미지
          });
          /* 마커 마우스오버 이벤트 - 인포윈도우 */
          // 마커에 표시할 인포윈도우를 생성
          if (value['제한속도'] !== 0) {
            let infowindow = new kakao.maps.InfoWindow({
              content: `
              <div style="
              display: flex;
              align-items: center;
              justify-content: center;
              ">
                <div style="
                width: 95%;
                display: flex;
                flex-direction: column;
                align-items: center;
                padding: 3%;">
                  <span style="
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  font-size: 10pt;
                  width: 100%;
                  padding-bottom: 1%;
                  border-bottom: #CECECE 1px solid;
                  text-align: center;
                  color: #32A48E;
                  "><img src='https://www.svgrepo.com/show/404469/cctv-cctv-camera-monitoring-camera-security-camera-surveillance.svg' 
                  style="
                  width: 25px;
                  padding-right: 1%;
                  "
                  />단속중 ···</span>
                  <span style="
                  font-size: 10pt;
                  text-align: center;
                  padding-top: 1%;
                  ">${value['설치장소']}
                  </span>
                </div>
              </div>
              `,
              removable: true,
            });
            const infoStyles = () => {
              /* 인포윈도우 기본 스타일 */
              let infowinDefault = infowindow.a;
              infowinDefault.style.backgroundColor = '#FFF';
              infowinDefault.style.border = 'none';
              infowinDefault.style.borderRadius = '5px';
              infowinDefault.style.opacity = '80%';
              infowinDefault.style.maxWidth = '270px';
              infowinDefault.style.boxShadow =
                'rgba(0, 0, 0, 0.2) 1.95px 1.95px 2.6px';
              /* 닫기 버튼 */
              infowinDefault.children[2].src =
                'https://www.svgrepo.com/show/12848/x-symbol.svg';
              infowinDefault.children[2].style.right = '1rem';
              infowinDefault.children[2].style.top = '1rem';
              infowinDefault.children[2].style.width = '10px';
              infowinDefault.children[2].style.opacity = '50%';
            };
            infoStyles();

            const infoStylesArrow = () => {
              let infowinDefault = infowindow.a;
              /* 아래 화살표 */
              infowinDefault.children[0].style.background =
                "url('https://www.svgrepo.com/show/4166/up-arrow.svg') 0% 0% / 11px 9px no-repeat";
              infowinDefault.children[0].style.marginTop = '0.5%';
              infowinDefault.children[0].style.rotate = '180deg';
              // console.log(infowinDefault.children[0].style.background)
            };

            arr.push(infowindow);
            const CloseEvent = () => {
              arr.map((value, index) => arr[index].close());
            };
            kakao.maps.event.addListener(marker, 'click', function () {
              CloseEvent();
              infowindow.open(map, marker);
              infoStylesArrow();
            });
          }
          return marker; //markers의 return
        });
        //클러스터러에 마커 추가 & 마커 표시
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
      <Refresh map={map} center={center} level={7} />
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
    </>
  );
};
export default MarkerClusterEnfCam;
