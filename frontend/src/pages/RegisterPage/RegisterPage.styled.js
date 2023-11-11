import styled from "styled-components";
import bgFormPc from "../../assets/bg-form-pc.svg";

export const Wrapper = styled.section`
  margin: 0 auto;
  @media (min-width: 1440px) {
    display: flex;
    gap: 115px;
    justify-content: center;
    align-items: center;
    height: 100vh;

    background-image: url(${bgFormPc});
    background-position: center 410px;
    background-size: cover;
    background-repeat: no-repeat;
  }
`;

export const ImgContainer = styled.div`
  text-align: center;
  margin-top: 87px;
  @media (min-width: 1440px) {
    margin-top: 0;
    img {
      width: 532px;
      height: 468px;
    }
  }
`;
