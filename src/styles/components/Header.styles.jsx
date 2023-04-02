import styled from "styled-components";

export const StyledHeader = styled.header`
  display: grid;
  grid-template-columns: 2fr 1fr 4rem;
  padding: 1rem;
  border-bottom: ${({ theme }) =>
    `${theme.border.thickness} ${theme.border.type} ${theme.color.support}`};

  img {
    padding-bottom: 1rem;
  }

  .menu {
    display: none;

    .material-symbols-rounded {
      font-size: 2rem;
    }
  }

  .cart-container {
    justify-self: center;
    align-self: center;
  }

  .cart-wrapper {
    color: ${({ theme }) => theme.color.highlight};
    text-decoration: none;
    position: relative;

    .material-symbols-rounded {
      font-size: 2rem;
    }
  }

  

  .cart-wrapper :nth-child(2) {
    position: absolute;
    bottom: 100%;
    left: 70%;
    background-color: ${({ theme }) => theme.color.highlight};
    color: ${({ theme }) => theme.color.neutral};
    padding: 0.25rem 0.5rem;
    font-weight: 700;
    border-radius: 50%;
  }

  input {
    width: 100%;
    height: 100%;
    border: none;
    font-size: 1.1rem;

    &:focus {
      outline: none;
    }
  }

  @media (max-width: ${({ theme }) => theme.break.medium}) {
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1rem repeat(3, 1fr) 4rem 1rem;
    padding: 1rem 0;

    img {
      max-width: 175px;
      padding-left: 1rem;
    }

    .cart-container {
      grid-column: 2;
      grid-row-start: 1;
      grid-column-start: 5;
      grid-row-end: 2;
      grid-column-end: 6;
      border-left: ${({ theme }) =>
        `${theme.border.thickness} ${theme.border.type} ${theme.color.support}`};
    }

   

    .menu {
      display: block;
      grid-row-start: 2;
      grid-column-start: 2;
      grid-row-end: 3;
      grid-column-end: 3;
      width: 2.5rem;
      border: none;
      background-color: transparent;
      color: ${({ theme }) => theme.color.highlight};
      cursor: pointer;
      padding-left: 0;
    }
  }
`;
