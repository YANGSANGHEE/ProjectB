import '@/App.css';
import LayOut from './Components/Layout';
import Intro from './Components/Intro/Intro';
import { useState, useEffect } from 'react';
import { Web } from './Components/Web';

const App = () => {
  const [width, Setwidth] = useState<number>(window.innerWidth);
  //화면 너비 값을 받을 State

  useEffect(() => {
    window.addEventListener('resize', () => {
      Setwidth(window.innerWidth);
      //화면 너비가 바뀔때마다 State에 갱신
    });
  }, [width]);

  return (
    <>
      {/* <Intro /> */}
      {width < 899 ? (
        <>
          <LayOut />
        </>
      ) : (
        <Web />
      )}
    </>
  );
};

export default App;
