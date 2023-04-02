import { useEffect } from "react";
import { StyledPage } from "../../styles/pages/generalPageStyles";
import Feedback from "../../components/Feedback";

export default function ContactSuccess() {
  useEffect(() => {
    document.title = "Another Heaven Boutique | Thank you for your message";
  }, []);

  return (
    <StyledPage>
      <Feedback
        title={"Thank you for your message"}
        message={"We will reply as soon as we can"}
      />
    </StyledPage>
  );
}
