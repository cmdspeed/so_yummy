import { selectUser } from "../../redux/auth/authSelectors";
import { useSelector } from "react-redux";
import { Logo } from "../Logo/Logo";
import { ThemeToggler } from "../ThemeToggler/ThemeToggler";
import { Navigation } from "./Navigation/Navigation";
import { UserLogo } from "./UserLogo/UserLogo";
import { TopBar, UserContainer, UserName, Wraper } from "./Header.styled";
import icons from "../../assets/icons.svg";

interface HeaderProps {
  screenSize: number;
}

export const Header = ({ screenSize }: HeaderProps) => {
  let widthLogo = "40";
  let heightLogo = "40";

  if (screenSize >= 768) {
    widthLogo = "44";
    heightLogo = "44";
  }

  const user = useSelector(selectUser);

  return (
    <TopBar>
      <div>
        <Logo width={widthLogo} height={heightLogo} />
        {screenSize >= 1440 ? <Navigation /> : ""}
      </div>
      <Wraper>
        <UserContainer>
          <UserLogo />
          <UserName>{user ? user.name : ""}</UserName>
        </UserContainer>
        {screenSize >= 1440 ? (
          <ThemeToggler />
        ) : (
          <svg width="28" height="28">
            <use href={`${icons}#burger`}></use>
          </svg>
        )}
      </Wraper>
    </TopBar>
  );
};
