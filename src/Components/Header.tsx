import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';

interface btnSet {
  name: string;
  con: string;
  [index: string]: string;
}

const HeaderSet = styled.div`
  background-color: #fff;
  width: 100vw;
  padding: 30px 0px 0px 25px;
  display: flex;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 3;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.25);
  img {
    width: 7.2rem;
    height: 2.1rem;
  }
  & > div:nth-child(2) {
    width: 20rem;
    ${({ theme }) => theme.flexSet.flexRowCenter}
    &>div {
      width: calc(100% / 3);
      ${({ theme }) => theme.flexSet.flexColumnCenter}
      &>button {
        width: 100%;
        background: none;
        border: none;
        margin-bottom: 1.5rem;
        color: ${({ theme }) => theme.Color.l_gray};
        ${({ theme }) => theme.fontSize.font_12};
        &.line {
          color: ${({ theme }) => theme.Color.black};
        }
      }
      & > div {
        background: ${({ theme }) => theme.Color.l_gray};
        width: 100%;
        height: 3px;
        transition: 0.3s ease;
        &.line {
          background: ${({ theme }) => theme.Color.green_gradient};
        }
      }
    }
  }
`;

const ButtonSet: btnSet[] = [
  { name: 'congestion', con: '혼잡도' },
  { name: 'speed', con: '단속구간' },
  { name: 'cctv', con: 'CCTV' },
];
// Element에 넣을 value와 노출된 버튼 이름을 객체화 시킨 배열

const Header = ({ getbutton }: { getbutton: (data: string) => void }) => {
  //getbutton : 부모컴포넌트(Layout에서 자식 컴포넌트에서 바뀌는 값을 props로 받아오기 위한 함수)
  const [button, Setbutton] = useState('congestion');
  //기본 활성화 버튼 세팅 (혼잡도)

  const getData = (e: React.MouseEvent<HTMLButtonElement>) => {
    getbutton(e.currentTarget.value);
    Setbutton(e.currentTarget.value);
  };
  //click 시 이벤트 타겟의 value값을 가져오는 함수

  return (
    <HeaderSet>
      <img src='./img/Logo_Top.png' alt='logo'></img>
      <div>
        {ButtonSet.map((value, key) => {
          // Element에 넣을 value와 노출된 버튼 이름을 객체화 시킨 배열을 map 돌림
          return (
            <div key={key}>
              <button
                value={value.name}
                onClick={getData}
                className={button === value.name ? 'line' : ''}>
                {value.con}
              </button>
              <div className={button === value.name ? 'line' : ''}></div>
              {/* class name과 button(현재 congestion)과 값이 같으면 line이라는 class가 붙음(버튼활성화 CSS) */}
            </div>
          );
        })}
      </div>
    </HeaderSet>
  );
};

export default Header;
