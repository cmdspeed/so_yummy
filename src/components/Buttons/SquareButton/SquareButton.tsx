import { StyledButton } from "./SquareButton.styled";

interface Props {
  children: string;
}

export const SquareButton: React.FC<Props> = ({ children }) => {
  return <StyledButton>{children}</StyledButton>;
};
