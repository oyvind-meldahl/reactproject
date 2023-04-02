import styled from "styled-components";

export const StyledCartPage = styled.main`
  margin: 4rem 0;
  padding: 0 1rem;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;

  h1 {
    flex: 100%;
  }

  .purchase {
    flex: 0 0 65%;
  }

  @media (max-width: ${({ theme }) => theme.break.medium}) {
    .purchase {
      flex: 0 0 100%;
    }
  }
`;
