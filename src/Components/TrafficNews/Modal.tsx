import React from 'react';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
const Modal = (props: any) => {
  // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
  const { open, close, header } = props;
  console.log(props.open);
  const [modalClose, setModalclose] = useState(true);
  const closeModal = () => {
    setModalclose(false);
    console.log(modalClose);
  };
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
    // 모달이 열릴때 openModal 클래스가 생성된다.
    <div className={open ? 'openModal modal' : 'modal'}>
      {open ? (
        <Section>
          <div>
            <header>
              {header}
              <button className='close' onClick={close}>
                &times;
              </button>
            </header>
            <main>{props.children}</main>
            <footer>
              <button className='close' onClick={closeModal}>
                close
              </button>
            </footer>
          </div>
        </Section>
      ) : null}
    </div>
  );
};
export default Modal;
