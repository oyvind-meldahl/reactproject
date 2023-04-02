import { StyledSecondaryButton } from "../../styles/components/SecondaryButton.styles";

export default function SecondaryButton({ text, onClick }) {
  return (
    <StyledSecondaryButton onClick={onClick}>{text}</StyledSecondaryButton>
  );
}
