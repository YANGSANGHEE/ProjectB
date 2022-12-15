// import axios from 'axios';
// import { useEffect, useState } from 'react';
// const { kakao } = window;
// import Speedlimit from '@/Components/Speedlimit/SpeedLimit';

// // class Markers {
// //   title: string;
// //   latlng: any;
// //   constructor(title:string, latlng_x:number, latlng_y:number){
// //     this.title = title,
// //     this.latlng = new kakao.maps.LatLng(latlng_x, latlng_y)
// //   }
// // }
// // let testMarker = new Markers("카카오", 33.450703, 126.570664);
// // console.log(testMarker);

// const GetMarker = (imgSrc: String, map: any) => {
//   console.log('test');
//   console.log(Speedlimit().coordX);

//   // 마커부분 시작
//   let imageSrc = imgSrc, // 마커이미지의 주소
//     imageSize = new kakao.maps.Size(64, 69), // 마커이미지의 크기
//     imageOption = { offset: new kakao.maps.Point(27, 69) }; // 마커이미지의 옵션. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정.

//   // 마커의 이미지정보를 가지고 있는 마커이미지를 생성
//   let markerImage = new kakao.maps.MarkerImage(
//       imageSrc,
//       imageSize,
//       imageOption
//     ),
//     markerPosition = new kakao.maps.LatLng(33.450701, 126.570667); // 마커가 표시될 위치
//   // markerPosition = new kakao.maps.LatLng(coordAndlimitS.coordY, coordAndlimitS.coordX);

//   // 마커를 생성
//   let marker = new kakao.maps.Marker({
//     map: map,
//     position: markerPosition,
//     image: markerImage, // 마커이미지 설정
//   });

//   return marker.setMap(map);
// };

// export default GetMarker;
