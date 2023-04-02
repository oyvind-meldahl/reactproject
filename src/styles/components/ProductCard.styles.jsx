import styled from "styled-components";

export const StyledProductCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: ${({ theme }) =>
    `${theme.border.thickness} ${theme.border.type} ${theme.color.highlight}`};
  width: 17rem;
  padding: 1rem;

  .product-picture {
    text-align: right;
    position: relative;
    max-height: 18rem;
    text-align: center;
  }

  img {
    max-width: 100%;
    height: 18rem;
    object-fit: cover;
  }

  .product-data {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
  }

  .price-container {
    display: flex;
    gap: 1rem;
  }

  .old-price {
    text-decoration: line-through;
    color: red;

    span {
      color: ${({ theme }) => theme.color.highlight};
    }
  }

  .discount {
    background-color: green;
    color: ${({ theme }) => theme.color.neutral};
    padding: 1rem;
    position: absolute;
    top: -3rem;
    right: -2rem;
  }

  a {
    text-decoration: none;
    text-transform: uppercase;
    color: ${({ theme }) => theme.color.neutral};
    background-color: ${({ theme }) => theme.color.highlight};
    padding: 0.5rem 0;
    text-align: center;

    &:hover {
      opacity: 0.9;
    }
  }

  //set flex-direction to row-reverse when card is displayed on product page
  ${({ location }) =>
    location.includes("/product") &&
    `
    flex-direction: row-reverse;
    width: 80%;
    gap: 1rem;

     img,
     .product-data {
     max-width: 50%;
     }
  `}

  //reset flex-direction and img size on small screens
  @media (max-width: ${({ theme }) => theme.break.small}) {
    flex-direction: column;

    img,
    .product-data {
      max-width: 100%;
    }
  }
`;
