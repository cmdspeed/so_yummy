import styled from "styled-components";
import { Form, Field, ErrorMessage } from "formik";
import bgFormMobile from "../../assets/bg-form-mobile.svg";
import bgFormTablet from "../../assets/bg-form-tablet.svg";
import { Link } from "react-router-dom";

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
`;

export const Wrapper = styled.section`
  background-color: var(--form-background);
  border-radius: 30px;
  box-shadow: 0px 4px 48px 0px rgba(0, 0, 0, 0.1);
  margin: 0 20px;
  padding: 32px 28px 40px;
  position: relative;
  @media (min-width: 768px) {
    margin: 0 134px;
    padding: 32px 50px 44px;
  }
  @media (min-width: 1440px) {
    margin: 0;
    padding: 44px 50px 50px;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 12px;
  position: relative;
  @media (min-width: 768px) {
    margin-bottom: 24px;
  }
`;

export const Svg = styled.svg`
  width: 18px;
  height: 18px;
  stroke-width: 1.5px;
  opacity: 0.8;
  position: absolute;
  left: 14px;
  stroke: #fafafa;
  @media (min-width: 768px) {
    width: 24px;
    height: 24px;
  }
`;

export const PasswordToggle = styled.svg`
  width: 18px;
  height: 18px;
  position: absolute;
  right: 14px;
  cursor: pointer;
  fill: var(--opacity-white-color);
  @media (min-width: 768px) {
    width: 24px;
    height: 24px;
  }
`;

export const Input = styled(Field)`
  width: 100%;
  height: 45px;
  padding: 0 0 0 40px;
  border: 1px solid var(--opacity-white-color);
  border-radius: 5px;
  background-color: var(--form-background);
  outline: none;
  color: var(--font-white-color);

  &::placeholder {
    color: var(--font-white-color);
    opacity: 0.8;
    font-size: 0.875rem;
    letter-spacing: -0.01rem;
  }

  &:focus,
  &:hover,
  &:active,
  &:focus-visible {
    & ~ ${PasswordToggle} {
      fill: var(--opacity-brand-color);
    }

    border: 1px solid var(--opacity-brand-color);
    color: var(--opacity-brand-color);
    & ~ ${Svg} {
      stroke: var(--opacity-brand-color);
    }

    &::placeholder {
      color: var(--opacity-brand-color);
    }
  }
  &:-webkit-autofill {
    background-color: transparent;
    box-shadow: 0 0 0 100px var(--form-background) inset;
    color: var(--font-white-color);
    -webkit-text-fill-color: var(--font-white-color);
  }
  &:-webkit-autofill:focus {
    color: var(--font-white-color);
    -webkit-text-fill-color: var(--opacity-brand-color);
  }
  @media (min-width: 768px) {
    height: 59px;
    padding: 0 0 0 50px;
    &::placeholder {
      font-size: 1.125rem;
      letter-spacing: -0.02rem;
    }
  }
`;

export const Button = styled.button`
  cursor: pointer;
  align-self: center;
  background-color: var(--brand-color);
  border: none;
  border-radius: 6px;
  width: 100%;
  padding: 14px 0;

  margin: 16px auto;

  color: var(--font-white-color);
  font-size: 1rem;
  text-align: center;
  line-height: 1.12;
  @media (min-width: 768px) {
    margin: 26px auto 0;
    padding: 16.05px 0;
  }
`;

export const Title = styled.h1`
  color: var(--font-white-color);
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 1.16;
  letter-spacing: 0.03rem;

  margin: 0 auto 18px;

  @media (min-width: 768px) {
    font-size: 1.75rem;
    line-height: 1.07;
    margin: 0 auto 32px;
  }
`;

export const Container = styled.div`
  background-image: url(${bgFormMobile});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
  margin: -42px auto 0;
  @media (min-width: 768px) {
    background-image: url(${bgFormTablet});

    margin: -16px auto 0;
  }
  @media (min-width: 1440px) {
    height: auto;

    margin: 0;
    width: 100%;
    max-width: 500px;
    background-image: none;
  }
`;

export const SignIn = styled(Link)`
  color: var(--font-white-color);
  font-size: 0.87rem;
  text-decoration-line: underline;
  @media (min-width: 768px) {
    font-size: 1rem;
  }
`;

export const LinkContainer = styled.div`
  text-align: center;
  margin-top: 18px;
`;

export const ErrorMsg = styled(ErrorMessage)`
  color: var(--error);
  font-size: 0.87rem;
  font-weight: 400;
  @media (min-width: 768px) {
    font-size: 1rem;
  }
`;

export const ErrorPassword = styled.div`
  font-size: 0.87rem;
  font-weight: 400;
  @media (min-width: 768px) {
    font-size: 1rem;
  }
`;
