const { kakao } = window;
declare global {
  interface Window {
    kakao: any;
  }
}
const CCTVALL = () => {
  const container = document.getElementById('map');
  const options = {
    center: new kakao.maps.LatLng(36.3504119, 127.3845475),
    level: 9,
  };
  const mapScript = new kakao.maps.Map(container, options);
  // 카카오맵 기본 설정 좌표 실행
  const mapTypeControl = new kakao.maps.MapTypeControl();
  // 지도와 스카이뷰를 선택해서 볼 수 있음.
  mapScript.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);
  const zoomControl = new kakao.maps.ZoomControl();
  // 확대 축소가 가능한 컨트롤바
  mapScript.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);
  return (
    <div
      id='map'
      style={{
        width: '100vw',
        height: '100vh',
        position: 'relative',
        overflow: 'hidden',
      }}></div>
  );
};
export default CCTVALL;
