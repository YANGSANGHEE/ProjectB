import React from 'react';
import styled from 'styled-components';

interface btnSet {
  name: string;
  con: string;
  [index: string]: string;
}

const HeaderSet = styled.div`
  background-color: #fff;
  width: 100vw;
  padding: 30px 0px 0px 25px;
  border: 1px solid red;
  display: flex;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
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
      }
      & > div.line {
        background: ${({ theme }) => theme.Color.l_gray};
        width: 100%;
        height: 3px;
      }
      &:hover {
        & > div.line {
          background-color: ${({ theme }) => theme.Color.green_gradient};
        }
      }
    }
  }
`;

const ButtonSet: btnSet[] = [
  { name: 'traffic', con: '혼잡도' },
  { name: 'speed', con: '단속구간' },
  { name: 'cctv', con: 'CCTV' },
];

const Header = ({ getbutton }: { getbutton: (data: string) => void }) => {
  const getData = (e: React.MouseEvent<HTMLButtonElement>) => {
    getbutton(e.currentTarget.value);
  };
  // const addClass = (e: React.MouseEvent<HTMLButtonElement>) => {
  //   e.currentTarget.classList.add('active');
  // };
  return (
    <HeaderSet>
      <img src='/img/Logo_Top.png' alt='logo'></img>
      <div>
        {ButtonSet.map((value, key) => {
          return (
            <div key={key}>
              <button value={value.name} onClick={getData}>
                {value.con}
              </button>
              <div className='line'></div>
            </div>
          );
        })}
      </div>
    </HeaderSet>
  );
};

export default Header;
