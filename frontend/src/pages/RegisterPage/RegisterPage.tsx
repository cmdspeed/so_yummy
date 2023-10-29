import { OrderImg } from "../../components/OrderImg/OrderImg";
import RegisterForm from "../../components/RegisterForm/RegisterForm";
import { Wrapper } from "./RegisterPage.styled";

const RegisterPage = () => {
  return (
    <Wrapper>
      <OrderImg />
      <RegisterForm />
    </Wrapper>
  );
};

export default RegisterPage;
