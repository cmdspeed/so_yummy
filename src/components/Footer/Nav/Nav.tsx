import { NavLink } from "react-router-dom";
import { NavStyled, StyledLink } from "./Nav.styled";

export const Nav = () => {
  return (
    <NavStyled>
      <ul>
        <StyledLink>
          <NavLink to="/search">Ingredients</NavLink>
        </StyledLink>

        <StyledLink>
          <NavLink to="/add">Add recipes</NavLink>
        </StyledLink>
        <StyledLink>
          <NavLink to="/my">My recipes</NavLink>
        </StyledLink>
        <StyledLink>
          <NavLink to="/favorite">Favorites</NavLink>
        </StyledLink>
        <StyledLink>
          <NavLink to="/shopping-list">Shopping list</NavLink>
        </StyledLink>
      </ul>
    </NavStyled>
  );
};
