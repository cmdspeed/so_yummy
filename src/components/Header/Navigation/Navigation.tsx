import { NavLink } from "react-router-dom";
import icons from "../../../assets/icons.svg";

export const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/categories/beef">Categories</NavLink>
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
        <li>
          <NavLink to="/search">
            <svg width="24" height="24">
              <use href={`${icons}#search`} />
            </svg>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
