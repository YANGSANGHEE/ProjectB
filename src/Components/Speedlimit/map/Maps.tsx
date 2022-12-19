import { useEffect, useState, useRef } from 'react';
import axios, { AxiosResponse } from 'axios';
import Refresh from '@/Common/Refresh';
import StylePopup from './Enforcement';
const { kakao } = window; //불러오기에 문제없음
import Loadings from '@/Common/Loading';

/* 테스트 컴포넌트에서 작동 확인 후 이전 */
const Maps = () => {
  const ITS = process.env.REACT_APP_ITS_KEY;
  const [mapE, setMapE] = useState({}); //map_def 상태고정용
  const map_def = useRef({});
  const goCenter_def = useRef();
  const getCenter_def = useRef();
  const [data, SetData] = useState<any>(null);

  useEffect(() => {
    let datas;
    axios
      .get<object>(
        `https://openapi.its.go.kr:9443/vslInfo?apiKey=${ITS}&getType=json`
      ) // API url 입력
      .then((res: AxiosResponse) => {
        datas = res.data.body.items;
        SetData(datas);
        let container = document.getElementById('map');
        let options = {
          center: new kakao.maps.LatLng(36.3504119, 127.3845475),
          level: 10,
        };
        getCenter_def.current = options.center; //center값 고정
        let map = new kakao.maps.Map(container, options);
        map_def.current = map; //map 고정
        // console.log(map.panTo);
        setMapE(map_def.current); //map 고정값 저장(없애면 작동안됨)

        /* 지도 확대 축소를 제어할 수 있는 줌 컨트롤을 생성 */
        // let zoomControl = new kakao.maps.ZoomControl();
        // map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

        /* 일반 <-> 스카이뷰 타입 전환 컨트롤 */
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
          //속도에 따라 표시되는 마커 이미지
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
          }
          let imgSize = new kakao.maps.Size(60 * 0.5, 73 * 0.5); //마커 사이즈
          let markerImg = new kakao.maps.MarkerImage(imgSrc, imgSize);
          return new kakao.maps.Marker({
            position: new kakao.maps.LatLng(value.coordY, value.coordX),
            image: markerImg, //마커이미지
          });
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
      {/* <Loadings data={data} /> */}
      <StylePopup />
      <Refresh map={map_def.current} center={getCenter_def.current} />
      <div id='map' style={{ width: '100vw', height: '70vh' }}></div>
    </>
  );
};
export default Maps;
