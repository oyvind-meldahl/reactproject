import styled from "styled-components";

export const StyledProductReviews = styled.div`
  width: 80%;
  border: ${({ theme }) =>
    `${theme.border.thickness} ${theme.border.type} ${theme.color.support}`};

  h3 {
    margin: 1rem;
  }

  .rating-container {
    display: flex;
    align-items: baseline;
    border-bottom: ${({ theme }) =>
      `${theme.border.thickness} ${theme.border.type} ${theme.color.support}`};
  }

  .reviews-container {
    margin: 1rem;
    display: flex;
    align-items: baseline;
    flex-wrap: wrap;

    h4 {
      margin-right: 1rem;
      margin-bottom: 0.5rem;
    }

    p {
      margin-top: 0;
      flex: 100%;
    }
  }

  @media (max-width: ${({ theme }) => theme.break.small}) {
    h3,
    .reviews-container h4 {
      margin-right: 0;
    }

    .material-symbols-rounded {
      font-weight: lighter;
    }
  }
`;
