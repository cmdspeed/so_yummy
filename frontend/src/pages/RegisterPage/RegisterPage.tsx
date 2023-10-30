import { OrderImg } from "../../components/OrderImg/OrderImg";
import RegisterForm from "../../components/RegisterForm/RegisterForm";
import { Wrapper, ImgContainer } from "./RegisterPage.styled";

const RegisterPage = () => {
  return (
    <Wrapper>
      <ImgContainer>
        <OrderImg />
      </ImgContainer>
      <RegisterForm />
    </Wrapper>
  );
};

export default RegisterPage;
