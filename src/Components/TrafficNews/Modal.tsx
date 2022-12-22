import axios from 'axios';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

interface Dataset {
  address: string | any;
  title: string | any;
  [index: string]: string;
}

const Modal = (props: any) => {
  // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
  const [data, setData] = useState([]);

  const { open, falseSet } = props;

  useEffect(() => {
    axios
      .get('http://localhost:8080/outbreak')
      .then((res) => {
        setData(res.data.elements[0].elements);
      })
      .catch((e?: ErrorCallback) => {
        console.log(e);
      });
  }, []);

  let DataArr: Dataset[] = [];
  data.map((value: any) => {
    DataArr.push({
      address: value.elements[3].elements[0].text,
      title: value.elements[13].elements[0].text,
    });
  });

  console.log(DataArr);

  const Section: any = styled.section`
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.7);
    position: fixed;
    z-index: 999;
    left: 0;
    top: 0;
    padding: 2rem;
    & > div.close {
      position: relative;
      & > div {
        position: absolute;
        right: 0;
        & > span {
          display: block;
          position: absolute;
          background-color: #fff;
          width: 0.3rem;
          height: 2.5rem;
          transform: rotate(45deg);
        }
        & > span:nth-child(2) {
          transform: rotate(-45deg);
        }
      }
    }
    & > div:nth-child(2) {
      overflow-y: scroll;
      padding-top: 2.5rem;
      width: 100%;
      height: 100%;
      & > div {
        display: flex;
        margin-bottom: 3rem;
        & > img {
          width: 1.6rem;
          height: 1.9rem;
          margin-right: 1rem;
        }
        & > h3 {
          color: #fff;
          font-size: 1.5rem;
        }
      }
      & > p {
        color: #fff;
        ${({ theme }) => theme.fontSize.font_12};
        margin-bottom: 1rem;
        font-weight: 100;
        word-break: keep-all;
        & > span {
          ${({ theme }) => theme.fontSize.font_12};
          font-weight: 100;
          display: block;
          margin-top: 0.3rem;
        }
      }
    }
  `;

  const setFalse = () => {
    falseSet(false);
  };
  return (
    // 클릭시 open 값이 true면 팝업창 출력 false면 팝업창 닫음
    <div>
      <div>
        {open ? (
          <Section>
            <div className='close' onClick={setFalse}>
              <div>
                <span></span>
                <span></span>
              </div>
            </div>
            <div>
              <div>
                <img src='./img/Siren.png' alt='siren'></img>
                <h3>교통 돌발 정보</h3>
              </div>
              {DataArr.map((value: any) => {
                if (value.address.includes('대전')) {
                  return (
                    <p>
                      {value.title}
                      <br />
                      <span>{value.address}</span>
                    </p>
                  );
                }
              })}
            </div>
          </Section>
        ) : (
          ''
        )}
      </div>
    </div>
  );
};
export default Modal;
