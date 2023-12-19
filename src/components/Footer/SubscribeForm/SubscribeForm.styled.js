import styled from "styled-components";
import { Form, Field, ErrorMessage } from "formik";

export const IconMessage = styled.svg`
  position: absolute;
  top: 50%;
  margin-left: 14px;
  transform: translateY(-50%);
`;

export const StyledFiled = styled(Field)`
  background-color: var(--second-color);
  border: 1px solid rgba(250, 250, 250, 0.157);
  border-radius: 5px;
  padding: 11.5px 42px;
  color: var(--font-white-color);
  &::placeholder {
    color: var(--font-white-color);
    opacity: 1;
    font-size: 0.62rem;
  }
`;

export const InputWrapper = styled.div`
  position: relative;
`;

export const StyledError = styled(ErrorMessage)`
  color: var(--error);
  font-size: 1rem;
`;

export const StyledForm = styled(Form)`
  margin-top: 2rem;
`;

export const StyledButton = styled.button`
  background-color: var(--brand-color);
  color: var(--font-white-color);
  padding: 0.68rem 4.18rem;
  margin-top: 0.5rem;
  border: none;
  border-radius: 6px;
`;
