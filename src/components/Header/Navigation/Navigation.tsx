import { NavLink } from "react-router-dom";

export const Navigation = () => {
  return (
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
        <NavLink to="/search">"ikonka szukajki"</NavLink>
      </li>
    </ul>
  );
};
