import styled from "styled-components";

export const StyledSearchBar = styled.div`
  border-left: ${({ theme }) =>
    `${theme.border.thickness} ${theme.border.type} ${theme.color.support}`};
  border-right: ${({ theme }) =>
    `${theme.border.thickness} ${theme.border.type} ${theme.color.support}`};
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;

.searchfield {
  padding: 0.5rem
}

  .input-wrapper {
    margin: 0rem 1rem;
    display: flex;
    align-items: center;
    text-decoration: none;
    color: ${({ theme }) => theme.color.highlight};
  }

  ul {
    list-style-type: none;
    position: absolute;
    top: 100%;
    background-color: ${({ theme }) => theme.color.support};
    width: 100%;
    z-index: 50;
  }

  li {
    transition: 0.5s;

    a {
      padding: 0.5rem 1rem;
      display: block;
      text-decoration: none;
      color: ${({ theme }) => theme.color.highlight};

      &:hover {
        background-color: ${({ theme }) => theme.color.highlight};
        color: ${({ theme }) => theme.color.neutral};
        cursor: pointer;
      }
    }
  }

  .selected {
    background-color: ${({ theme }) => theme.color.highlight};

    a {
      color: ${({ theme }) => theme.color.neutral};
    }
  }

  @media (max-width: ${({ theme }) => theme.break.medium}) {
    grid-row-start: 2;
    grid-column-start: 3;
    grid-row-end: 3;
    grid-column-end: 6;
    border-right: none;
    border-top: ${({ theme }) =>
      `${theme.border.thickness} ${theme.border.type} ${theme.color.support}`};
  }
`;
