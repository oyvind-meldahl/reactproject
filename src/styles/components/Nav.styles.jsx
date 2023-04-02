import styled from "styled-components";

export const StyledNavBar = styled.nav`
  border-top: ${({ theme }) =>
    `${theme.border.thickness} ${theme.border.type} ${theme.color.support}`};
  grid-column: -1/1;
  font-size: 1.1rem;
  padding-top: 1rem;

  ul {
    display: flex;
  }

  li {
    list-style-type: none;
    &:hover {
      text-decoration: underline;
      background-color: ${({ theme }) => theme.color.splash};
      cursor: pointer;
      a {
        color: ${({ theme }) => theme.color.neutral};
      }
    }

    a {
      display: block;
      padding: 0.5rem 1.5rem;
      text-decoration: none;
      color: ${({ theme }) => theme.color.highlight};
    }
  }

  .active {
    background-color: ${({ theme }) => theme.color.highlight};
    color: ${({ theme }) => theme.color.neutral};
  }

  @media (max-width: ${({ theme }) => theme.break.medium}) {
    display: ${(props) => (props.isVisible ? "block" : "none")};
    ul {
      flex-direction: column;
    }
  }
`;
