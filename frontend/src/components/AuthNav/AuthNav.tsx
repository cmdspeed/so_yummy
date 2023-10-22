import { Link } from "react-router-dom";

const AuthNav = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/register">Register</Link>
        </li>
        <li>
          <Link to="/signin">Signin</Link>
        </li>
      </ul>
    </nav>
  );
};

export default AuthNav;
