import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import {
  InputWrapper,
  Input,
  PasswordToggle,
  Button,
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
    <Formik
      initialValues={{ name: "", email: "", password: "" }}
      validationSchema={RegistrationSchema}
      onSubmit={(values, actions) => {
        // Tu umieść logikę rejestracji, na przykład wywołując API
        console.log("Form Data:", values);
      }}
    >
      <Form>
        <InputWrapper>
          {/* <Svg src="nazwa_svg1.svg" alt="SVG1" /> */}
          <Input type="text" name="name" placeholder="Name" />
        </InputWrapper>
        <ErrorMessage name="name" component="div" />
        <InputWrapper>
          {/* <Svg src="nazwa_svg2.svg" alt="SVG2" /> */}
          <Input type="email" name="email" placeholder="Email" />
        </InputWrapper>
        <ErrorMessage name="email" component="div" />
        <InputWrapper>
          {/* <Svg src="nazwa_svg3.svg" alt="SVG3" /> */}
          <Field type="password" name="password" placeholder="Password" />
          <PasswordToggle
            // src="svg_oczko1.svg" // Tutaj wstaw odpowiednie ścieżki do SVG
            alt="Password Toggle"
          />
        </InputWrapper>
        <ErrorMessage name="password" component="div" />
        <Button type="submit">Sign up</Button>
      </Form>
    </Formik>
  );
};

export default RegisterForm;
