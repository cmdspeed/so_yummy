import styled from "styled-components";

export const SearchInput = styled.input`
  position: relative;
  width: 100%;
  height: 3.25rem;
  border-radius: 22px 44px;

  padding: 1.06rem 3rem 1.06rem 2rem;
  &::placeholder {
    color: rgba(240, 240, 240, 1);
  }
`;
export const ContainerButton = styled.div`
  margin-left: -3rem;
  z-index: 1;
  width: 11rem;
  height: 3.25rem;
`;

export const Wrapper = styled.div`
  margin: 0 auto;
  display: flex;
  width: 16.43rem;
`;
