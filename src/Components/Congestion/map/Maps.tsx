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
  z-index: 2;
  ${({ theme }) => theme.flexSet.flexColumnCenter}
  & > img {
    margin-bottom: 2rem;
  }
  & > p {
    ${({ theme }) => theme.fontSize.font_12}
    color: #fff;
  }
  ${({ theme }) => theme.device.mobile} {
    & > img {
      width: ${calcPx(70)};
      height: ${calcPx(115)};
    }
  }
  ${({ theme }) => theme.device.mobile_wide} {
    & > img {
      width: ${calcPxX(70)};
      height: ${calcPxX(115)};
    }
  }
`;

const Maps = () => {
  const [data, SetData] = useState<any>(null);
  // 데이터 담기는 State
  const ITS = process.env.REACT_APP_ITS_KEY_SPARE;
  // 환경변수로 APU key를 불러옴

  useEffect(() => {
    axios
      .get<object>(
        `https://openapi.its.go.kr:9443/vslInfo?apiKey=${ITS}&getType=json`
      ) // API url 입력
      .then((res) => {
        SetData(res.data.items);
        // State data에 응답 데이터를 담음
        let container = document.getElementById('map');
        //kakao map dom
        let options = {
          center: new kakao.maps.LatLng(36.33395949, 127.3719135),
          //위도 경도
          level: 5,
          //줌 단계
        };

        let map = new kakao.maps.Map(container, options);
        // 일반 <-> 스카이뷰 타입 전환 컨트롤
        let mapTypeControl = new kakao.maps.MapTypeControl();
        map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);
        // 혼잡도 표시
        map.addOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC);
      })
      .catch((e: ErrorCallback) => {
        if (e) throw e;
        console.log('에러');
      }); //에러처리
  }, []);

  return (
    <>
      {data === null ? (
        //data 값이 null 일때 로딩창 띄움
        <Loading>
          <img src='/img/Podori_Loading.png' alt='포돌이'></img>
          <p>데이터를 불러오는 중 입니다...</p>
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
