import React, { useState } from "react";
import icons from "../../assets/icons.svg";
import { Formik } from "formik";
import * as Yup from "yup";

import { logIn, register } from "../../redux/auth/authOperations";

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
} from "./AuthForm.styled";

import { useDispatch } from "react-redux";

const commonValidation = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string().required("Password is required"),
});

const registrationValidation = commonValidation.shape({
  name: Yup.string()
    .min(3, "name must be at least 3 characters")
    .required("Name is required"),
});

const loginValidation = commonValidation.shape({
  name: Yup.string(),
});

interface AuthFormProps {
  isLoginForm?: boolean;
}

const AuthForm: React.FC<AuthFormProps> = ({ isLoginForm = false }) => {
  const dispatch = useDispatch();

  const validationSchema = isLoginForm
    ? loginValidation
    : registrationValidation;

  const [passwordMessage, setPasswordMessage] = useState("");
  const [showMessage, setShowMessage] = useState(false);
  const [status, setStatus] = useState("");

  const handlePasswordChange = async (
    e: React.ChangeEvent<HTMLInputElement>,
    handleChange: (e: React.ChangeEvent<any>) => void
  ) => {
    handleChange(e);
    const password = e.currentTarget.value;

    console.log("test", password);
    validationPassword(password);
  };

  const validationPassword = (password: string) => {
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
    return newStatus;
  };

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
        validationSchema={validationSchema}
        onSubmit={async (values, actions) => {
          const passwordValidationResult = validationPassword(values.password);

          if (
            (!isLoginForm && passwordValidationResult === "success") ||
            passwordValidationResult === "warning"
          ) {
            dispatch(register(values));
          }
          if (
            (isLoginForm && passwordValidationResult === "success") ||
            passwordValidationResult === "warning"
          ) {
            dispatch(logIn(values));
          } else {
            console.log("Password has error. Form not submitted.");
          }

          console.log(values.password);
          if (isLoginForm) {
            const { name, ...restValues } = values;
            console.log("Form Data:", restValues);
          } else if (status === "success") {
            console.log("Form Data:", values);
          }
        }}
      >
        {({ values, handleChange }) => (
          <Wrapper>
            <Title>{isLoginForm ? "Sign In" : "Registration"}</Title>
            <StyledForm>
              {isLoginForm ? (
                ""
              ) : (
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
              )}
              {isLoginForm ? "" : <ErrorMsg name="name" component="div" />}

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
                  value={values.password}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    handlePasswordChange(e, handleChange)
                  }
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
              <Button type="submit">
                {isLoginForm ? "Sign in" : "Sign up"}
              </Button>
            </StyledForm>
          </Wrapper>
        )}
      </Formik>
      <LinkContainer>
        {isLoginForm ? (
          <SignIn to="/register">Registration</SignIn>
        ) : (
          <SignIn to="/signin">Sign In</SignIn>
        )}
      </LinkContainer>
    </Container>
  );
};
export default AuthForm;
