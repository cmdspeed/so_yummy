import { Logo } from "../Logo/Logo";
import { ThemeToggler } from "../ThemeToggler/ThemeToggler";
import { Navigation } from "./Navigation/Navigation";
import { UserLogo } from "./UserLogo/UserLogo";

export const Header = () => {
  return (
    <>
      <Logo width="44" height="44" />
      <Navigation />
      <div>
        <UserLogo />
        <span>UserName</span>
      </div>
      <ThemeToggler />
    </>
  );
};
