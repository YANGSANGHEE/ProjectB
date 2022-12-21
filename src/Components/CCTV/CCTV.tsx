import { useState, useEffect, useRef } from "react";
import axios, { AxiosResponse } from "axios";
import CCTVItem from "./CCTVItem";
import Loadings from "@/Common/Loading";
import Refresh from "@/Common/Refresh";
const { kakao } = window;

const CCTV = () => {
  const [cctv, Setcctv] = useState(null);
  const [mapE, setMapE] = useState({}); //map_def 상태고정용

  const map_def = useRef({});
  const getCenter_def = useRef();

  useEffect(() => {
    axios
      .get(`http://localhost:8080/cctv`)
      .then((res: AxiosResponse) => {
        Setcctv(res.data);

        const CCTV = res.data;
        // cctv데이터 변수 선언

        const container = document.getElementById("map");

        const options = {
          center: new kakao.maps.LatLng(36.3504119, 127.3845475),
          level: 7,
        };
        // 초기 카카오맵 설정값

        getCenter_def.current = options.center;
        //center값 고정

        const mapScript = new kakao.maps.Map(container, options);
        map_def.current = mapScript;

        //map 고정
        setMapE(map_def.current); //map 고정값 저장(없애면 작동안됨)
        // 카카오맵 기본 설정 좌표 실행

        const mapTypeControl = new kakao.maps.MapTypeControl();
        // 지도와 스카이뷰를 선택해서 볼 수 있음.
        mapScript.addControl(
          mapTypeControl,
          kakao.maps.ControlPosition.TOPRIGHT
        );

        const imgSrc = "/img/CCTV.png",
          // 피그마에서 제작한 이미지파일
          imgSize = new kakao.maps.Size(25, 40);
        // cctv 아이콘 크기
        const imageOption = { offset: new kakao.maps.Point(15, 33) };
        // 좌표에 찍히는 마커 포인트 설정
        const markerImg = new kakao.maps.MarkerImage(
          // 마커 디자인 변경 함수
          imgSrc,
          imgSize,
          imageOption
        );

        let arr: any = [];
        // 빈배열 선언

        CCTV.map((el: any) => {
          // map 메소드 활용하여 서버 데이터 요소들 분배

          const marker = new kakao.maps.Marker({
            map: mapScript,
            // 카카오맵
            position: new kakao.maps.LatLng(el.y, el.x),
            // 받아온 데이터 좌표 뿌리기
            image: markerImg,
            // 마커 이미지 변경
          });

          let iwContent = `<iframe title="CCTV" width="320" height="280" style="border: none" src="${el.url}"></iframe><div style="font-size:5px;background-color:black;color:#fff">경찰청(UTIC)(LIVE)제공</div>`;
          // 영상 띄워주는 텍스트가 담겨있는 변수

          let loadingContent = `<div><iframe title="CCTV" width="320" height="300" style="border: none" src="/img/Podori_Loading.png"></iframe><p style="text-align:center">데이터를 불러오는 중 입니다...</p></div><div style="font-size:5px;background-color:black;color:#fff">경찰청(UTIC)(LIVE)제공</div>`;
          // 로딩창 텍스트 변수

          const infowindow = new window.kakao.maps.InfoWindow({
            // 영상 출력 함수
            zIndex: 1,
            content: iwContent,
            // 택스트 담긴 변수
            removable: true,
            // 닫기버튼 기능
          });

          const loadingwindow = new window.kakao.maps.InfoWindow({
            // 로딩창 출력 함수
            zIndex: 1,
            content: loadingContent,
            removable: true,
          });

          arr.push(infowindow);
          // 빈 배열에 cctv영상을 띄워줄 요소들 담기

          const closeInfowindow = () => {
            arr.map((value: any, index: number) => {
              arr[index].close();
            });
          };
          // infowindow 다중 오픈 방지

          // 비디오 영상구현
          kakao.maps.event.addListener(marker, "click", function () {
            closeInfowindow();
            infowindow.close();
            if (el.url === null) {
              // 만약에 url이 불러와지지 않았을때
              loadingwindow.open(mapScript, marker);
              // 로딩페이지 출력
            }
            infowindow.open(mapScript, marker);
            // 그다음 영상출력 페이지 출력
          });
          marker.setMap(mapScript);
        });
        const setDraggable = (draggable: any) => {
          // 마우스 드래그로 지도 이동 가능여부를 설정
          mapScript.setDraggable(draggable);
        };
        setDraggable(true);
        // 드래그 가능
      })
      .catch((e: ErrorCallback) => {
        if (e) throw e;
        console.log("에러");
      });
  }, []);

  return (
    <>
      {cctv === null ? <Loadings /> : null}
      <Refresh map={mapE} center={getCenter_def.current} level={7} />
      <div
        id="map"
        style={{
          width: "100vw",
          height: "100vh",
          position: "relative",
          overflow: "hidden",
          zIndex: "1",
        }}
      ></div>
    </>
  );
};

export default CCTV;
