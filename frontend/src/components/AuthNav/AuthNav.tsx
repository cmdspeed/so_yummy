import { List, StyledRegister, StyledSignin } from "./AuthNav.styled";

const AuthNav = () => {
  return (
    <List>
      <StyledRegister to="/register">Register</StyledRegister>

      <StyledSignin to="/signin">Signin</StyledSignin>
    </List>
  );
};

export default AuthNav;
