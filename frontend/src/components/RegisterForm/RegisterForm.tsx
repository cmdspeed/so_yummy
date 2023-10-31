import React from "react";
import icons from "../../assets/icons.svg";
import { Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import {
  InputWrapper,
  Input,
  PasswordToggle,
  Wrapper,
  StyledForm,
  Button,
  Title,
  SVG,
  Container,
  SignIn,
  LinkContainer,
} from "./RegisterForm.styled";

const RegistrationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "name must be at least 3 characters")
    .required("Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters"),
});

const RegisterForm = () => {
  return (
    <Container>
      <Formik
        initialValues={{ name: "", email: "", password: "" }}
        validationSchema={RegistrationSchema}
        onSubmit={(values, actions) => {
          // Tu umieść logikę rejestracji, na przykład wywołując API
          console.log("Form Data:", values);
        }}
      >
        <Wrapper>
          <Title>Registration</Title>
          <StyledForm>
            <InputWrapper>
              <Input type="text" name="name" placeholder="Name" />
              <SVG>
                <use href={`${icons}#name`}></use>
              </SVG>
            </InputWrapper>
            <ErrorMessage name="name" component="div" />
            <InputWrapper>
              <Input type="email" name="email" placeholder="Email" />
              <SVG>
                <use href={`${icons}#email`}></use>
              </SVG>
            </InputWrapper>
            <ErrorMessage name="email" component="div" />
            <InputWrapper>
              <Input type="password" name="password" placeholder="Password" />
              <SVG>
                <use href={`${icons}#password`}></use>
              </SVG>
              <PasswordToggle>
                <use href={`${icons}#eyeOpen`}></use>
              </PasswordToggle>
            </InputWrapper>
            <ErrorMessage name="password" component="div" />
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
