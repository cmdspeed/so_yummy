import styled from "styled-components";

export const BrandName = styled.h1`
  color: var(--second-color);
  text-align: center;
  font-size: 3.75rem;
  font-weight: 400;
  line-height: 1;
  letter-spacing: -0.018rem;

  margin: 4.25rem auto 0.875rem;
`;

export const Highlighted = styled.span`
  color: var(--brand-color);
`;

export const Description = styled.p`
  color: var(--font-description);
  text-align: center;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.28;
  letter-spacing: -0.0175rem;
  max-width: 15.5rem;

  margin: 0 auto 2.75rem;
`;

export const StyledImagePasta = styled.img`
  position: absolute;
  left: 0;
  top: 2rem;
`;

export const StyledImagePasta2 = styled.img`
  position: absolute;
  right: 0;
  top: 2rem;
  z-index: -1;
`;

export const StyledBackground = styled.img`
  position: absolute;
  right: -2rem;
  top: 8rem;
  z-index: -2;
`;
