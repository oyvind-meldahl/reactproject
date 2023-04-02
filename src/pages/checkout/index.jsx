import { useEffect } from "react";
import { StyledCheckoutPage } from "../../styles/pages/checkout.styles";
import CheckoutForm from "../../components/CheckoutForm";

export default function Checkout() {
  useEffect(() => {
    document.title = "Another Heaven Boutique | Checkout";
  }, []);

  return (
    <StyledCheckoutPage>
      <h1>Check out</h1>
      <CheckoutForm />
    </StyledCheckoutPage>
  );
}
