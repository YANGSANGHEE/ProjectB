import { useEffect } from 'react'
// import GetInfo from "./GetInfo"
import GetMarker from './GetMarker';
const { kakao } = window; //불러오기에 문제없음

const Maps = () => {
  // let latitude = Number(data.market_latitude); 
  // let logitude = Number(data.market_longitude);

  useEffect(() => {
    let container = document.getElementById('map');
    let options = {
      center: new kakao.maps.LatLng(36.33395949, 127.3719135),
      lever: 3
    };
    let map = new kakao.maps.Map(container, options);
    // let markerPosition = new kakao.maps.LatLng(latitude, logitude); 
    // let marker = new kakao.maps.Marker({ position: markerPosition, }); 
    // marker.setMap(map); 

    // 일반 <-> 스카이뷰 타입 전환 컨트롤
    let mapTypeControl = new kakao.maps.MapTypeControl();
    map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);

    // 지도에 교통정보를 표시하도록 지도타입을 추가
    map.addOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC);

    // 마커
    GetMarker('https://www.svgrepo.com/show/99140/cctv.svg', map);

  }, []);

  return (
    <div id='map'
      style={{ width: '800px', height: '500px' }}>
    </div>
  )
}
export default Maps;