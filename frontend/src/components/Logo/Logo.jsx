import icons from "../../assets/icons.svg";
import { Link } from "react-router-dom";

export const Logo = ({ width, height }) => {
  return (
    <Link to="/">
      <svg width={width} height={height}>
        <use href={`${icons}#logo`}></use>
      </svg>
    </Link>
  );
};
