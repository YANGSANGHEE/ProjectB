import axios from 'axios';
import { useEffect, useState } from 'react';

const Test = () => {
  useEffect(() => {
    axios.defaults.withCredentials = true;
    axios
      .get('http://localhost:8080/cctv', {
        withCredentials: true,
      })
      .then((res) => console.log(res))
      .catch((e?: ErrorCallback) => console.log(e));
  });
  return <></>;
};

export default Test;
