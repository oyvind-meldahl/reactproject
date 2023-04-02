import styled from "styled-components";

export const StyledOrderSummary = styled.div`
  border: ${({ theme }) =>
    `${theme.border.thickness} ${theme.border.type} ${theme.color.support}`};
  display: flex;
  flex-direction: column;
  padding: 1rem;
  margin: 2rem 0;
  height: fit-content;
  flex: 0 0 30%;

  h3 {
    margin: 0 0 1rem;
  }

  .price-summary {
    display: flex;
    justify-content: space-between;

    p {
      margin: 0.5rem 0;
    }

    .total {
      font-weight: 700;
      margin: 1rem 0;
    }
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.color.neutral};
    background-color: ${({ theme }) => theme.color.highlight};
    padding: 0.5rem 0;
    text-align: center;

    &:hover {
      opacity: 0.9;
    }
  }

  @media (max-width: ${({ theme }) => theme.break.medium}) {
    flex: 0 0 100%;
  }
`;
