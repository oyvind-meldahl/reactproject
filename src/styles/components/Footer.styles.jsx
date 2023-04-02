import styled from "styled-components";

export const StyledFooter = styled.footer`
  border-top: ${({ theme }) =>
    `${theme.border.thickness} ${theme.border.type} ${theme.color.support}`};
  text-align: center;
  padding-bottom: 1rem;

  ul {
    display: flex;
    list-style: none;
    justify-content: center;
    gap: 1rem;
  }

  a {
    color: ${({ theme }) => theme.color.highlight};
  }
`;
