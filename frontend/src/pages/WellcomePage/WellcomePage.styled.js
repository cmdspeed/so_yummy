import styled from "styled-components";

import bgPc from "./img/bg-pc.jpg";
import bgPcx2 from "./img/bg-pc@x2.jpg";
import bgTablet from "./img/bg-tablet.jpg";
import bgTabletx2 from "./img/bg-tablet@x2.jpg";
import bgMobile from "./img/bg-mobile.jpg";
import bgMobilex2 from "./img/bg-mobile@x2.jpg";

export const Container = styled.section`
  background: image-set(url(${bgMobile}) 1x, url(${bgMobilex2}) 2x);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (min-width: 768px) {
    background: image-set(url(${bgTablet}) 1x, url(${bgTabletx2}) 2x);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }

  @media (min-width: 1440px) {
    background: image-set(url(${bgPc}) 1x, url(${bgPcx2}) 2x);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
`;

export const Heading1 = styled.h1`
  font-weight: 600;
  font-size: 1.5rem; //24px
  color: var(--font-white-color);
  line-height: 1;
  letter-spacing: -0.03rem;
  margin: 28px auto 14px;

  @media (min-width: 768px) {
    margin-top: 44px;
    font-size: 1.75rem;
    letter-spacing: -0.035rem;
  }
`;

export const Paragraph = styled.p`
  font-weight: 400;
  font-size: 0.87rem;
  color: var(--font-white-color);
  line-height: 1.28;
  letter-spacing: -0.0175rem;
  text-align: center;

  margin-top: 0;
  margin-bottom: 44px;

  max-width: 305px;

  @media (min-width: 768px) {
    font-size: 1.125rem;
    line-height: 1.33;
    letter-spacing: -0.0225rem;
    max-width: 505px;
    margin-bottom: 40px;
  }
`;
