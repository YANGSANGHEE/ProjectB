import Refresh from '@/Common/Refresh';
import { useEffect, useState, useRef } from 'react';
import Infos from './Infos';
const { kakao } = window; //불러오기에 문제없음

const Maps = () => {
  const [map, setMap] = useState<any>();
  const [center, setCenter] = useState<any>();

  const map_def = useRef({});
  const getCenter_def = useRef();

  useEffect(() => {
    // State data에 응답 데이터를 담음
    let container = document.getElementById('map');
    //kakao map dom
    let options = {
      center: new kakao.maps.LatLng(36.3504119, 127.3845475),
      //위도 경도
      level: 5,
      //줌 단계
    };
    getCenter_def.current = options.center;

    setCenter(getCenter_def.current);
    let map = new kakao.maps.Map(container, options);
    map_def.current = map;
    setMap(map_def.current);

    // 일반 <-> 스카이뷰 타입 전환 컨트롤
    let mapTypeControl = new kakao.maps.MapTypeControl();
    console.log(mapTypeControl);
    map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);
    // 혼잡도 표시
    map.addOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC);
  }, []);

  return (
    <>
      <Infos />
      <Refresh map={map} center={center} level={5} />
      <div
        id='map'
        style={{
          width: '100vw',
          height: '100vh',
          position: 'absolute',
          zIndex: '-2',
        }}></div>
    </>
  );
};
export default Maps;
