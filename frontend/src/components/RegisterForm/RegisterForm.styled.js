import styled from "styled-components";
import { Formik, Form, Field, ErrorMessage } from "formik";
import bgFormMobile from "../../assets/bg-form-mobile.svg";
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
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 12px;
  position: relative;
`;

export const SVG = styled.svg`
  width: 18px;
  height: 18px;
  stroke-width: 1.5px;
  opacity: 0.8;
  position: absolute;
  left: 14px;
  stroke: #fafafa;
`;

export const PasswordToggle = styled.svg`
  width: 18px;
  height: 18px;
  position: absolute;
  right: 14px;
  cursor: pointer;
  fill: var(--opacity-white-color);
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
    & ~ ${SVG} {
      stroke: var(--opacity-brand-color);
    }

    &::placeholder {
      color: var(--opacity-brand-color);
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

  color: var(--font-white-color);
  font-size: 1rem;
  text-align: center;
  line-height: 1.12;
`;

export const Title = styled.h1`
  color: var(--font-white-color);
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 1.16;
  letter-spacing: 0.03rem;

  margin: 0 auto 18px;
`;

export const Container = styled.div`
  background-image: url(${bgFormMobile});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
  margin: -42px auto 0;
`;

export const SignIn = styled(Link)`
  color: var(--font-white-color);
  font-size: 0.87rem;
  text-decoration-line: underline;
`;

export const LinkContainer = styled.div`
  text-align: center;
  margin-top: 18px;
`;
