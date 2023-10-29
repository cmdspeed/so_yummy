import styled from "styled-components";
import { Formik, Form, Field, ErrorMessage } from "formik";

// export const Form = styled(Form)`
//   // Dodaj swoje style tutaj
// `;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

export const Input = styled(Field)``;

export const PasswordToggle = styled.img`
  width: 20px;
  height: 20px;
  cursor: pointer;
`;

export const Button = styled.button`
  cursor: pointer;
`;
