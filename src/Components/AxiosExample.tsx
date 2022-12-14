import axios from 'axios';
import { useEffect } from 'react';

const AxiosExample = () => {
  //컴포넌트가 처음 나타났을때
  useEffect(() => {
    // axios는 Promise 기반
    axios
      .get('http://localhost:8080/test') // API url 입력
      .then((res) => console.log(res.data)) // axios는 default가 JSON으로 값을 받아옴
      .catch((e: ErrorCallback) => {
        if (e) throw e;
        console.log('에러');
      }); //에러처리
  }, []);
  return (
    <>
      <h1>Axios 테스트</h1>
    </>
  );
};

export default AxiosExample;
