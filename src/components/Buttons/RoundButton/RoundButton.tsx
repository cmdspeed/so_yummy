import { StyledButton } from "./Round.styled";

interface Props {
  children: string;
  onClick: () => void;
}

export const RoundButton: React.FC<Props> = ({ children, onClick }) => {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
};
