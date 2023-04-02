import { useEffect } from "react";
import { StyledContactPage } from "../../styles/pages/contact.styles";
import ContactForm from "../../components/ContactForm";

export default function Contact() {
  useEffect(() => {
    document.title = "Another Heaven Boutique | Get in touch";
  }, []);

  return (
    <StyledContactPage>
      <h1>Get in touch</h1>
      <ContactForm />
    </StyledContactPage>
  );
}
