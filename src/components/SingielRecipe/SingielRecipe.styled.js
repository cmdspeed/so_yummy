import styled from "styled-components";

export const Container = styled.div`
  max-width: 21.43rem;
  height: 20.18rem;
  position: relative;

  margin: 2rem auto 1.5rem;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 0.5rem;
  display: block;
  object-fit: cover;
`;

export const TitleWrapper = styled.div`
  border-radius: 0.5rem;
  background-color: var(--font-white-color);

  min-width: 19rem;

  position: absolute;
  bottom: 1.62rem;
  left: 50%;
  transform: translateX(-50%);
`;

export const Title = styled.h3`
  padding: 1rem;
  font-weight: 500;
  line-height: 1.25;
  font-style: normal;
  font-size: 1rem;
  letter-spacing: -0.01rem;
`;
