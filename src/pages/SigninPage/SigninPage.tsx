import { OrderImg } from "../../components/OrderImg/OrderImg";
import AuthForm from "../../components/AuthForm/AuthForm";
import { Wrapper, ImgContainer } from "./SigninPage.styled";

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
