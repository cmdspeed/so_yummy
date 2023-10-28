import styled from "styled-components";
import { Link } from "react-router-dom";

export const List = styled.div`
  display: flex;
  gap: 12px;
  @media (min-width: 768px) {
    gap: 18px;
  }
`;

const buttonStyles = `
text-decoration: none;
color: var(--font-white-color);
border-radius: 22px 44px;
transition: background-color 0.5s;
font-size:0.87rem;

@media (min-width: 768px) {
    font-size: 1rem;
  }


  &:hover {
    background-color: transparent;
    border: 2px solid var(--brand-color);
    color: var(--brand-color)
  }


`;

export const StyledRegister = styled(Link)`
  ${buttonStyles}
  border: 2px solid var(--brand-color);
  background-color: var(--brand-color);
  padding: 10.5px 36px;

  @media (min-width: 768px) {
    padding: 19px 57.78px;
  }
`;

export const StyledSignin = styled(Link)`
  ${buttonStyles}
  border: 2px solid var(--font-white-color);
  padding: 10.5px 24.4px;

  @media (min-width: 768px) {
    padding: 19px 44.23px;
  }
`;
