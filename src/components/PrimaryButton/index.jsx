import { StyledPrimaryButton } from "../../styles/components/PrimaryButton.styles";

export default function PrimaryButton({ text, onClick }) {
  return <StyledPrimaryButton onClick={onClick}>{text}</StyledPrimaryButton>;
}
