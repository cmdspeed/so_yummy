import styled from "styled-components";
import { Formik, Form, Field, ErrorMessage } from "formik";
import bgFormMobile from "../../assets/bg-form-mobile.svg";

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

export const Input = styled(Field)`
  width: 100%;
  height: 45px;
  padding: 0 0 0 40px;
`;

export const PasswordToggle = styled.svg`
  width: 18px;
  height: 18px;
  position: absolute;
  right: 14px;
  cursor: pointer;
`;

export const Button = styled.button`
  cursor: pointer;
  align-self: center;
`;

export const Title = styled.h1`
  color: var(--font-white-color);
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 1.16;
  letter-spacing: 0.03rem;

  margin: 0 auto 18px;
`;

export const SVG = styled.svg`
  width: 18px;
  height: 18px;
  position: absolute;
  left: 14px;
`;

export const Container = styled.div`
  background-image: url(${bgFormMobile});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
  margin: -42px auto 0;
`;
