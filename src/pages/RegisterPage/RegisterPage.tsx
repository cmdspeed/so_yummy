import { OrderImg } from "../../components/OrderImg/OrderImg";
import AuthForm from "../../components/AuthForm/AuthForm";
import { Wrapper, ImgContainer } from "./RegisterPage.styled";

const RegisterPage = () => {
  return (
    <Wrapper>
      <ImgContainer>
        <OrderImg />
      </ImgContainer>
      <AuthForm />
    </Wrapper>
  );
};

export default RegisterPage;
