import { useEffect } from "react";
import { StyledPage } from "../../styles/pages/generalPageStyles";
import Feedback from "../../components/Feedback";

export default function NotFound() {
  useEffect(() => {
    document.title = "Another Heaven Boutique | 404 Not Found";
  }, []);

  return (
    <StyledPage>
      <Feedback title={"oops... we couldn't find the page"} />
    </StyledPage>
  );
}
