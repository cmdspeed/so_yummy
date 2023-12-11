import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Nieprawidłowy adres e-mail")
    .required("To pole jest wymagane"),
});

const sendEmail = async (values: { email: string }) => {
  console.log(`Wysyłanie e-maila na adres: ${values.email}`);
};

export const SubscribeForm: React.FC = () => {
  return (
    <Formik
      initialValues={{ email: "" }}
      validationSchema={validationSchema}
      onSubmit={async (values, { setSubmitting }) => {
        try {
          await sendEmail(values);
          alert(
            "Wiadomość e-mail została wysłana! Użytkownik zapisany do newslettera."
          );
        } catch (error) {
          alert("Wystąpił błąd podczas wysyłania e-maila.");
        } finally {
          setSubmitting(false);
        }
      }}
    >
      {({ isSubmitting, isValid }) => (
        <Form>
          <div>
            <label htmlFor="email">Adres e-mail:</label>
            <Field type="email" id="email" name="email" />
            <ErrorMessage name="email" component="div" />
          </div>
          <div>
            <button type="submit" disabled={isSubmitting || !isValid}>
              Wyślij
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};
