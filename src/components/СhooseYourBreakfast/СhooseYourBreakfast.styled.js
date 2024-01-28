import styled from "styled-components";

import bgchooseYourBreakfast from "./img/bg_chooseYourBreakfast.webp";
import bgchooseYourBreakfast2 from "./img/bg_chooseYourBreakfast@x2.webp";
export const BgPhoto = styled.div`
  background: image-set(
    url(${bgchooseYourBreakfast}) 1x,
    url(${bgchooseYourBreakfast2}) 2x
  );
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  padding-top: 7.06rem;

  min-width: 20rem;
  min-height: 18.5rem;
  /* @media screen and (min-device-pixel-ratio: 2),
    (-webkit-min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx),
    (max-width: 375px) {
  } */
`;

export const Container = styled.div`
  max-width: 14.063rem;

  font-size: 0.75rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5;
  letter-spacing: -0.015rem;

  background-color: var(--font-white-color);
  border-radius: 8px;

  padding: 8px 8px 11px;
  margin-left: auto;
  margin-right: 1.125rem;
`;

export const Highlighted = styled.span`
  color: var(--brand-color);
`;

export const Description = styled.p`
  max-width: 209px;
  color: var(--font-choose-breakfast);
`;

export const SeeRecipesBtn = styled.button`
  margin-left: auto;
  background: none;
  border: none;
  display: flex;
  align-items: center;
  cursor: pointer;
  & svg {
    margin-left: 0.5rem;
  }
`;
