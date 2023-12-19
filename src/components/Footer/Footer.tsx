import { FollowUs } from "./FollowUs/FollowUs";
import { Nav } from "./Nav/Nav";
import { SubscribeForm } from "./SubscribeForm/SubscribeForm";
import {
  FooterContainer,
  LogoContainer,
  StyledList,
  Title,
} from "./Footer.styled";
import { Logo } from "../Logo/Logo";

export const Footer = () => {
  return (
    <footer>
      <FooterContainer>
        <LogoContainer>
          <Logo
            width="32"
            height="32"
            color="var(--logo-footer-color)"
            stroke="var(--brand-color)"
          />
          <Title>So Yummy</Title>
        </LogoContainer>
        <Nav />

        <SubscribeForm />
        <FollowUs />
      </FooterContainer>
      <div>
        <StyledList>
          <li>
            <p>© 2023 All Rights Reserved.</p>
          </li>
          <li>
            <p>Terms of Service</p>
          </li>
        </StyledList>
      </div>
    </footer>
  );
};
