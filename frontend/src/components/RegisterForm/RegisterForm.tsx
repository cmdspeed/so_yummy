import React, { useState } from "react";
import icons from "../../assets/icons.svg";
import { Formik } from "formik";
import * as Yup from "yup";

import {
  InputWrapper,
  Input,
  PasswordToggle,
  Wrapper,
  StyledForm,
  Button,
  Title,
  Svg,
  Container,
  SignIn,
  LinkContainer,
  ErrorMsg,
  ErrorPassword,
} from "./RegisterForm.styled";

const RegistrationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "name must be at least 3 characters")
    .required("Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string().required("Password is required"),
});

const RegisterForm = ({ isLogin }) => {
  const [passwordMessage, setPasswordMessage] = useState("");
  const [showMessage, setShowMessage] = useState(false);
  const [status, setStatus] = useState("");

  let fontColor = "--font-white-color";

  if (status === "error") {
    fontColor = "--error";
  } else if (status === "warning") {
    fontColor = "--warning";
  } else if (status === "success") {
    fontColor = "--success";
  }

  return (
    <Container>
      <Formik
        initialValues={{ name: "", email: "", password: "" }}
        validationSchema={RegistrationSchema}
        onSubmit={(values, actions) => {
          const password = values.password;
          const minLength = 8;
          const hasUpperCase = /[A-Z]/.test(password);
          const hasLowerCase = /[a-z]/.test(password);
          const hasNumber = /\d/.test(password);
          const hasSpecialChar = /[!@#$%^&*]/.test(password);

          let newStrength = "Your password is to short";
          let newStatus = "";

          if (
            password.length >= minLength &&
            hasUpperCase &&
            hasLowerCase &&
            hasNumber &&
            hasSpecialChar
          ) {
            newStatus = "success";
            newStrength = "Password is secure";
          } else if (
            password.length >= minLength &&
            (hasUpperCase || hasLowerCase || hasNumber || hasSpecialChar)
          ) {
            newStatus = "warning";
            newStrength = "Your password is little secure";
          } else if (password.length <= minLength) {
            newStatus = "error";
            newStrength = "Your password is to short (min 8 charakters)";
          }
          setStatus(newStatus);
          setShowMessage(true);
          setPasswordMessage(newStrength);

          console.log(password);
          if (newStatus === "warning" || newStatus === "success") {
            console.log("Form Data:", values);
          }
        }}
      >
        <Wrapper>
          <Title>Registration</Title>
          <StyledForm>
            <InputWrapper>
              <Input
                type="text"
                name="name"
                placeholder="Name"
                autoComplete="off"
              />
              <Svg>
                <use href={`${icons}#name`}></use>
              </Svg>
            </InputWrapper>
            <ErrorMsg name="name" component="div" />
            <InputWrapper>
              <Input
                type="email"
                name="email"
                placeholder="Email"
                autoComplete="off"
              />
              <Svg>
                <use href={`${icons}#email`}></use>
              </Svg>
            </InputWrapper>
            <ErrorMsg name="email" component="div" />
            <InputWrapper>
              <Input
                type="password"
                name="password"
                placeholder="Password"
                autoComplete="off"
              />
              <Svg>
                <use href={`${icons}#password`}></use>
              </Svg>
              <PasswordToggle>
                <use href={`${icons}#eyeOpen`}></use>
              </PasswordToggle>
            </InputWrapper>
            <div style={{ color: `var(${fontColor})` }}>
              {showMessage ? (
                <ErrorPassword>{passwordMessage}</ErrorPassword>
              ) : (
                <ErrorMsg name="password" component="div" />
              )}
            </div>
            <Button type="submit">Sign up</Button>
          </StyledForm>
        </Wrapper>
      </Formik>
      <LinkContainer>
        <SignIn to="/signin">Sign In</SignIn>
      </LinkContainer>
    </Container>
  );
};
export default RegisterForm;
