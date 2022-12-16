import axios from 'axios';
import { useEffect } from 'react';
// const ITS = process.env.REACT_APP_ITS_KEY;

// console.log(ITS);
const AxiosExample = () => {
  //   //컴포넌트가 처음 나타났을때
  //   useEffect(() => {
  //     // axios는 Promise 기반
  //     axios
  //       .get(`http://localhost:8080/test`) // API url 입력
  //       .then((res) => console.log(res)) // axios는 default가 JSON으로 값을 받아옴
  //       .catch((e: ErrorCallback) => {
  //         if (e) throw e;
  //         console.log('에러');
  //       }); //에러처리
  //   }, []);

  //   const Post = async (): Promise<void> => {
  //     await axios
  //       .post('http://localhost:8080/post/testpost', {
  //         id: '그냥보냄',
  //         password: '1sfasd351243s',
  //       })
  //       .then(() => {
  //         alert('성공!');
  //       })
  //       .catch((e: ErrorCallback) => {
  //         if (e) throw e;
  //         console.log('에러');
  //       });
  //   };
  return (
    <>
      <h1>Axios 테스트</h1>
      {/* <button onClick={Post}>POST</button> */}
    </>
  );
};

export default AxiosExample;
