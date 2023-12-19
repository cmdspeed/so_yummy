import React from "react";
import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import icons from "../../../assets/icons.svg";
import {
  IconMessage,
  InputWrapper,
  StyledButton,
  StyledError,
  StyledFiled,
  StyledForm,
} from "./SubscribeForm.styled";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Incorrect e-mail address")
    .required("This field is required"),
});

const sendEmail = async (values: { email: string }) => {
  console.log(`Sending an e-mail to: ${values.email}`);
};

export const SubscribeForm: React.FC = () => {
  return (
    <Formik
      initialValues={{ email: "" }}
      validationSchema={validationSchema}
      onSubmit={async (values, { setSubmitting }) => {
        try {
          await sendEmail(values);
          alert("The email has been sent! User subscribed to the newsletter.");
        } catch (error) {
          alert("An error occurred while sending the email.");
        } finally {
          setSubmitting(false);
        }
      }}
    >
      {({ isSubmitting, isValid }) => (
        <StyledForm>
          <div>
            <InputWrapper>
              <IconMessage width="16" height="12">
                <use href={`${icons}#message`} />
              </IconMessage>
              <StyledFiled
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email address"
              />
            </InputWrapper>
            <StyledError name="email" component="div" />
          </div>
          <div>
            <StyledButton type="submit" disabled={isSubmitting || !isValid}>
              Subscribe
            </StyledButton>
          </div>
        </StyledForm>
      )}
    </Formik>
  );
};
