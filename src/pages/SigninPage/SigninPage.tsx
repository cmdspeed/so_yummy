import { OrderImg } from "../../components/OrderImg/OrderImg";
import AuthForm from "../../components/AuthForm/AuthForm";
import { Wrapper, ImgContainer } from "./SigninPage.styled";

import React, { useState } from "react";
import { useDispatch } from "react-redux";

const SigninPage = () => {
  return (
    <Wrapper>
      <ImgContainer>
        <OrderImg />
      </ImgContainer>
      <AuthForm isLoginForm />
    </Wrapper>
  );
};

export default SigninPage;
