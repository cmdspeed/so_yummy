import styled from "styled-components";

export const FooterContainer = styled.div`
  background-color: var(--second-color);
  text-align: center;
`;

export const LogoContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  gap: 0.5rem;

  max-width: 8.93rem;

  align-items: center;

  margin: 0 auto;
  padding-top: 2.18rem;
`;

export const Title = styled.h2`
  color: var(--font-white-color);
  font-size: 1.12rem;
  font-weight: 700;
  line-height: 1;
  letter-spacing: 0.02;
`;

export const StyledList = styled.ul`
  display: flex;
  justify-content: center;
  padding: 1.75rem 0;
  gap: 0.87rem;
  color: var(--second-color);
  font-size: 0.62rem;
  font-weight: 500;
  opacity: 0.5;
`;
