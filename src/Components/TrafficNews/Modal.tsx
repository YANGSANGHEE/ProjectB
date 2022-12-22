import axios from 'axios';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

interface Dataset {
  address: string | any;
  title: string | any;
}

const Modal = (props: any) => {
  // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
  const [modalClose, setModalclose] = useState(true);
  const [data, setData] = useState<[] | null>(null);

  const { open } = props;

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

  data?.map((value: any) => {
    DataArr.push({
      address: value.elements[3].elements[0].text,
      title: value.elements[13].elements[0].text,
    });
  });

  console.log(DataArr);

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
    <div>
      <div>
        {open ? (
          <Section>
            <div>
              <header>
                <button
                  className='close'
                  onClick={() => {
                    !open;
                  }}>
                  &times;
                </button>
              </header>
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
