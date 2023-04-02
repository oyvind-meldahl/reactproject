import styled from "styled-components";

export const StyledModalDialog = styled.div`
  display: ${(props) => (props.isVisible ? "block" : "none")};
  width: 100%;
  height: 100vh;
  text-align: center;
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.7);
  z-index: 100;

  .modal-box {
    position: absolute;
    width: 500px;
    height: 10rem;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: ${({ theme }) =>
      `${theme.border.thickness} ${theme.border.type} ${theme.color.highlight}`};
    background-color: ${({ theme }) => theme.color.support};
    padding: 0.5rem 1rem;
    margin: 0;
  }

  .close-button-container {
    text-align: right;

    button {
      border: none;
      background-color: ${({ theme }) => theme.color.neutral};
      color: ${({ theme }) => theme.color.highlight};
      border-radius: 4px;
      cursor: pointer;

      &:hover {
        opacity: 0.9;
        background-color: ${({ theme }) => theme.color.highlight};
        color: ${({ theme }) => theme.color.neutral};
      }
    }
  }

  .buttons-container {
    display: flex;
    justify-content: space-between;

    button {
      padding: 0.5rem 10%;
    }
  }

  @media (max-width: ${({ theme }) => theme.break.small}) {
    .modal-box {
      width: 100%;
      height: 11rem;
    }
  }
`;
