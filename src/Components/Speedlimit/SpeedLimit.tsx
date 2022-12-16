import axios, { AxiosResponse } from 'axios';
import { useEffect, useState } from 'react';
import Maps from './map/Maps';

declare global {
  interface Window {
    kakao: any;
  }
}

const Speedlimit = () => {
  return (
    <>
      <Maps />
    </>
  );
};

export default Speedlimit;
