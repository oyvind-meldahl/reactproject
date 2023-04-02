import styled from "styled-components";

export const StyledPrimaryButton = styled.button`
  color: ${({ theme }) => theme.color.neutral};
  background-color: ${({ theme }) => theme.color.highlight};
  border: none;
  cursor: pointer;
  padding: 0.5rem 0;
  text-align: center;
  font-size: 1.025rem;
  margin: 1rem 0;

  &:hover {
    opacity: 0.9;
  }
`;
