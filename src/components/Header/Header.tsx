import { selectUser } from "../../redux/auth/authSelectors";
import { useSelector } from "react-redux";
import { Logo } from "../Logo/Logo";
import { ThemeToggler } from "../ThemeToggler/ThemeToggler";
import { Navigation } from "./Navigation/Navigation";
import { UserLogo } from "./UserLogo/UserLogo";
import { TopBar, UserContainer, UserName, Wraper } from "./Header.styled";
import icons from "../../assets/icons.svg";
import { Link } from "react-router-dom";

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
  let isUser = false;
  if (user.name === null) {
    isUser = false;
  } else {
    isUser = true;
  }

  return (
    <TopBar>
      <div>
        <Logo width={widthLogo} height={heightLogo} />
        {screenSize >= 1440 ? <Navigation /> : ""}
      </div>
      {isUser ? (
        <Wraper>
          <UserContainer>
            <UserLogo />
            <UserName>{isUser ? user.name : ""}</UserName>
          </UserContainer>
          {screenSize >= 1440 ? (
            <ThemeToggler />
          ) : (
            <svg width="28" height="28">
              <use href={`${icons}#burger`}></use>
            </svg>
          )}
        </Wraper>
      ) : (
        ""
      )}
    </TopBar>
  );
};
