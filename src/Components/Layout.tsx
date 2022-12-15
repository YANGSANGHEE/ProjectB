import AxiosExample from "./AxiosExample";
import styled from "styled-components";

const Media = styled.div`
  width: 100px;
  height: 100px;
  ${({ theme }) => theme.device.mobile} {
    background-color: salmon;
  }
  background-color: red;
`;

const LayOut = () => {
  return (
    <>
      {/* <Media />
      <AxiosExample /> */}
    </>
  );
};

export default LayOut;
