import styled from "styled-components";

export const SearchInput = styled.input`
  position: relative;
  width: 11.31rem;
  height: 3.25rem;
  border-radius: 22px 44px;
  /* border: none; */
  padding: 1.06rem 2rem;
  &::placeholder {
    color: rgba(240, 240, 240, 1);
  }
`;
export const ContainerButton = styled.div`
  position: relative;
  right: 3rem;
  width: 7.06rem;
  height: 3.25rem;
`;

export const Wrapper = styled.div`
  display: flex;
  width: 18.43rem;
`;
