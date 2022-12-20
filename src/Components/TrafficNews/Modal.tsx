import React from 'react';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
const Modal = (props: any) => {
  const {open} = props



  const Section: any = styled.div`
    border: solid 2px red;
    width: 80vw;
    height: 50vh;
    background-color: #dcdcdc;
    position: absolute;
    top: -505px;
    left: 19px;
    z-index: 1;
  
  `;   


  return (
   // 클릭시 open 값이 true면 팝업창 출력 false면 팝업창 닫음
    <div >
      {open ? (
        <Section>
          <div>
            <header> 
              <button className='close' onClick = {() => {(!open)}}>
                &times;
              </button>
            </header>
          </div>
        </Section>
      ) : ""}
    </div>

  );
};
export default Modal;
