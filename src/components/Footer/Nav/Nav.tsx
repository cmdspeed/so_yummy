import { NavLink } from "react-router-dom";

export const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/search">Ingredients</NavLink>
        </li>

        <li>
          <NavLink to="/add">Add recipes</NavLink>
        </li>
        <li>
          <NavLink to="/my">My recipes</NavLink>
        </li>
        <li>
          <NavLink to="/favorite">Favorites</NavLink>
        </li>
        <li>
          <NavLink to="/shopping-list">Shopping list</NavLink>
        </li>
      </ul>
    </nav>
  );
};
