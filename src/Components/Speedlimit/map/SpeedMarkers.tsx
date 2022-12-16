import { useEffect } from 'react'
import axios from 'axios';
const { kakao } = window; //불러오기에 문제없음
import vslData from "../testData/vsl.json" //api 복사한 json데이터
import { resolve } from 'path';
import { rejects } from 'assert';

/* 줌 인 or 아웃에 상관없이 마커가 전부 보임 */
const MapsTest = () => {
  const ITS = process.env.REACT_APP_ITS_KEY2;
  // let latitude = Number(data.market_latitude);
  // let logitude = Number(data.market_longitude);

  useEffect(() => {
    //* 요청 횟수 문제로 테스트 데이터 사용
    let data = vslData.body.items;
    let testDataToVsl = new Promise((resolve, rejects) => {
      resolve(data);
    })
      .then(() => {
        let container = document.getElementById('map');
        let options = {
          center: new kakao.maps.LatLng(36.33395949, 127.3719135),
          level: 13,
        };
        // console.log(data)
        let map = new kakao.maps.Map(container, options);
        // 일반 <-> 스카이뷰 타입 전환 컨트롤
        let mapTypeControl = new kakao.maps.MapTypeControl();
        map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);
        // 지도에 교통정보를 표시하도록 지도타입을 추가
        // map.addOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC);

        //전체 속도 추출(아직 사용안함)
        const speedLimit = data.map((value: any) => {
          return value.limitSpeed;
        })
        const speedArr = [...new Set(speedLimit)]; 
        //['110', '100', '50', '80', '30', '40', '20', '60', '70']
        // console.log(speedArr)

        // 마커
        const markers = data.forEach((value: any) => {
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
          let markerPosition = new kakao.maps.LatLng(
            value.coordY,
            value.coordX
          );
          let marker = new kakao.maps.Marker({
            position: markerPosition,
            image : markerImg //마커이미지 
          });
          marker.setMap(map); //마커 표시
        });
      }) // axios는 default가 JSON으로 값을 받아옴
      .catch((e: ErrorCallback) => {
        if (e) throw e;
        console.log('에러');
      }); //에러처리
  }, []);

  return (
  <>
    <div id='map' style={{ width: '700px', height: '500px' }}></div>
  </>
  );
};
export default MapsTest;