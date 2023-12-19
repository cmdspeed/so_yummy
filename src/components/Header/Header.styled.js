import styled from "styled-components";

export const TopBar = styled.div`
  margin-top: 1.12rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const UserContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  gap: 0.87rem;
`;

export const Wraper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  gap: 1.5rem;
  align-items: center;
`;

export const UserName = styled.span`
  color: var(--username-color);
  font-size: 0.75rem;
  font-weight: 600;
  line-height: 1.7;
  text-transform: capitalize;
`;
