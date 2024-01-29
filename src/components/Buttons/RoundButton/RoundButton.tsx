import styled, { css } from "styled-components";

interface StyledButtonProps {
  bgColor?: string;
  borderColor?: string;
  fontColor?: string;
}

export const StyledButton = styled.button<StyledButtonProps>`
  background-color: var(--second-color);
  border: none;
  border-radius: 22px 44px;
  color: var(--font-white-color);
  width: 100%;
  height: 100%;
  cursor: pointer;

  ${(props) =>
    props.bgColor &&
    css`
      background-color: ${props.bgColor};
    `}

  ${(props) =>
    props.borderColor &&
    css`
      border: 2px solid ${props.borderColor};
    `}

    ${(props) =>
    props.fontColor &&
    css`
      color: ${props.fontColor};
    `}
`;

interface Props extends StyledButtonProps {
  children: string;
  onClick: () => void;
}

export const RoundButton: React.FC<Props> = ({
  children,
  onClick,
  bgColor,
  borderColor,
  fontColor,
}) => {
  return (
    <StyledButton
      bgColor={bgColor}
      borderColor={borderColor}
      fontColor={fontColor}
      onClick={onClick}
    >
      {children}
    </StyledButton>
  );
};
