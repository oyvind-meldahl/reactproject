import styled from "styled-components";

export const StyledCheckoutForm = styled.form`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;

  legend {
    margin-bottom: 2rem;
    text-transform: uppercase;
    font-weight: 700;
  }

  input,
  select {
    display: block;
    width: 100%;
    margin-top: 0.5rem;
    border: ${({ theme }) =>
      `${theme.border.thickness} ${theme.border.type} ${theme.color.support}`};
  }

  input,
  select {
    height: 2rem;
  }

  .small-field {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 1rem;
  }

  .payment {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .cvv {
    max-width: 75px;
  }

  .error-message {
    font-size: 0.85rem;
    margin: 0 0 1.5rem;
    color: red;
  }

  .button-container {
    width: 100%;

    button {
      width: 100%;
    }
  }
`;
