import { useEffect } from 'react';
import axios from 'axios';
// import GetInfo from "./GetInfo"
const { kakao } = window; //불러오기에 문제없음

const Maps = () => {
  const ITS = process.env.REACT_APP_ITS_KEY_SPARE;
  // let latitude = Number(data.market_latitude);
  // let logitude = Number(data.market_longitude);
  useEffect(() => {
    let data;
    axios
      .get<object>(
        `https://openapi.its.go.kr:9443/vslInfo?apiKey=${ITS}&getType=json`
      ) // API url 입력
      .then((res) => {
        data = res.data.body.items;
        let container = document.getElementById('map');
        let options = {
          center: new kakao.maps.LatLng(36.33395949, 127.3719135),
          level: 5,
        };

        let map = new kakao.maps.Map(container, options);
        // 일반 <-> 스카이뷰 타입 전환 컨트롤
        let mapTypeControl = new kakao.maps.MapTypeControl();
        map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);

        // 지도에 교통정보를 표시하도록 지도타입을 추가
        // map.addOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC);

        let marker: any;
        data.forEach((value: any) => {
          let markerPosition = new kakao.maps.LatLng(
            value.coordY,
            value.coordX
          );
          marker = new kakao.maps.Marker({
            position: markerPosition,
          });
          marker.setMap(map);
          '언니 너무머시써';
        });
      }) // axios는 default가 JSON으로 값을 받아옴
      .catch((e: ErrorCallback) => {
        if (e) throw e;
        console.log('에러');
      }); //에러처리
  }, []);

  return (
    <div
      id='map'
      style={{
        width: '100vw',
        height: '100vh',
        position: 'absolute',
        zIndex: '-1',
      }}></div>
  );
};
export default Maps;
