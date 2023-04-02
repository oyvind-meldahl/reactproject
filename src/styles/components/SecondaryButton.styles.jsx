import styled from "styled-components";
import { StyledPrimaryButton } from "./PrimaryButton.styles";

export const StyledSecondaryButton = styled(StyledPrimaryButton)`
  border: ${({ theme }) =>
    `${theme.border.thickness} ${theme.border.type} ${theme.color.highlight}`};
  background-color: ${({ theme }) => theme.color.neutral};
  color: ${({ theme }) => theme.color.highlight};

  &:hover {
    opacity: 0.9;
    border: none;
    background-color: ${({ theme }) => theme.color.highlight};
    color: ${({ theme }) => theme.color.neutral};
  }
`;
