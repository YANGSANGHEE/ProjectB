// import styled from "styled-components";
// import { useRef, useCallback, useState } from "react";
// import ReactPlayer from "react-player";
// const Movie = styled.div`
//   width: 1000px;
//   height: 1000px;
// `;
// const CCTVItem = () => {
//   const ref = useRef(null);
//   const Open = useCallback(() => {
//     let movie = document.getElementById("cctv");
//     movie.style.opacity = "1";
//     movie.style.zIndex = "100";
//   }, []);
//   const Close = useCallback(() => {
//     let movie = document.getElementById("cctv");
//     movie.style.opacity = "0";
//     movie.style.zIndex = "-1";
//   }, []);
//   return (
//     <>
//       <button onClick={Open}>동영상</button>
//       <Movie id="cctv" ref={ref}>
//         <div id="close" onClick={Close}>
//           <span></span>
//           <span></span>
//         </div>
//         <ReactPlayer
//           className="react-player"
//           url={
//             "http://210.99.67.118/media/CTV0008/CTV0008_20221216.151530.000.mp4"
//           }
//           width="200px"
//           height="450px"
//           playing={true}
//           muted={true}
//         ></ReactPlayer>
//       </Movie>
//       {/* <LayOut /> */}
//     </>
//   );
// };
// export default CCTVItem;
