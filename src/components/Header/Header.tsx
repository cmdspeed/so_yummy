import { Logo } from "../Logo/Logo";
import { Navigation } from "./Navigation/Navigation";
import { UserLogo } from "./UserLogo/UserLogo";
import { useSelector } from "react-redux";

export const Header = () => {
  const currentState = useSelector((state) => state);
  console.log("Bieżący stan Redux Store:", currentState);
  return (
    <>
      <Logo width="44" height="44" />
      <Navigation />
      <div>
        <UserLogo />
        <span>UserName</span>
      </div>
    </>
  );
};
