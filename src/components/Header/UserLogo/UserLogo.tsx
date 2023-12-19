import icons from "../../../assets/icons.svg";
import { LogoContainer } from "./UserLogo.styled";

export const UserLogo = () => {
  return (
    <LogoContainer>
      <svg>
        <use href={`${icons}#avatar`}></use>
      </svg>
    </LogoContainer>
  );
};
