import styled from "styled-components";

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
