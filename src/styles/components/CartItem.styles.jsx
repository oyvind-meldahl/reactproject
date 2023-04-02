import styled from "styled-components";

export const StyledCartItem = styled.div`
  display: flex;
  justify-content: space-between;
  border: ${({ theme }) =>
    `${theme.border.thickness} ${theme.border.type} ${theme.color.support}`};
  padding: 1rem;
  margin: 2rem 0;

  .product-info {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
  }

  img {
    width: 8rem;
  }

  h2 {
    margin: 0;
  }

  .price {
    margin: 0.5rem 0 1rem;
  }

  .quantity {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin: 2rem 0;
  }

  button {
    display: flex;
    border: none;
    background-color: ${({ theme }) => theme.color.support};
    color: ${({ theme }) => theme.color.highlight};
    border-radius: 4px;
    cursor: pointer;

    &:hover {
      opacity: 0.9;
      background-color: ${({ theme }) => theme.color.highlight};
      color: ${({ theme }) => theme.color.neutral};
    }
  }
`;
