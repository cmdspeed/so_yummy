import icons from "../../assets/icons.svg";
import { Link } from "react-router-dom";

interface LogoProps {
  width: string;
  height: string;
  color?: string;
  stroke?: string;
}

export const Logo: React.FC<LogoProps> = ({
  width,
  height,
  color = "var(--brand-color)",
  stroke = "var(--font-white-color)",
}) => {
  return (
    <Link
      to="/"
      style={{ width: `${width}px`, height: `${height}px`, display: "block" }}
    >
      <svg width={width} height={height} fill={color} stroke={stroke}>
        <use href={`${icons}#logo`}></use>
      </svg>
    </Link>
  );
};
