import styled from "styled-components";

export const StyledContactForm = styled.form`
  width: 600px;
  margin-left: 1rem;

  legend {
    margin-bottom: 2rem;
    text-transform: uppercase;
    font-weight: 700;
  }

  input,
  textarea {
    display: block;
    width: 100%;
    margin-top: 0.5rem;
    border: ${({ theme }) =>
      `${theme.border.thickness} ${theme.border.type} ${theme.color.support}`};
  }

  input {
    height: 2rem;
  }

  textarea {
    height: 6rem;
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
