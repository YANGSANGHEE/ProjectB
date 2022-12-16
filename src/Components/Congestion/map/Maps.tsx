import { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { calcPx, calcPxX } from '@/Hooks/CalcPx';
// import GetInfo from "./GetInfo"
const { kakao } = window; //불러오기에 문제없음

const Loading = styled.div`
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.72);
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
  ${({ theme }) => theme.flexSet.flexRowCenter}
  &>img {
    width: 100px;
    height: 100px;
    ${({ theme }) => theme.device.mobile_wide} {
      width: ${calcPxX(70)};
      height: ${calcPxX(115)};
    }
  }
`;

const Maps = () => {
  const [loading, Setloading] = useState<boolean>(true);
  const [data, SetData] = useState<any>(null);
  const ITS = process.env.REACT_APP_ITS_KEY_SPARE;

  useEffect(() => {
    Setloading(true);
    axios
      .get<object>(
        `https://openapi.its.go.kr:9443/vslInfo?apiKey=${ITS}&getType=json`
      ) // API url 입력
      .then((res) => {
        Setloading(false);
        SetData(res.data.items);
        let container = document.getElementById('map');
        let options = {
          center: new kakao.maps.LatLng(36.33395949, 127.3719135),
          level: 5,
        };

        let map = new kakao.maps.Map(container, options);
        // 일반 <-> 스카이뷰 타입 전환 컨트롤
        let mapTypeControl = new kakao.maps.MapTypeControl();
        map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);
        // 혼잡도 표시
        map.addOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC);
      })
      .catch((e: ErrorCallback) => {
        Setloading(true);
        if (e) throw e;
        console.log('에러');
      }); //에러처리
  }, []);

  return (
    <>
      {data === null ? (
        <Loading>
          <img src='/img/Podori_Loading.png'></img>
        </Loading>
      ) : null}
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
