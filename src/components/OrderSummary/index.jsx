import { StyledOrderSummary } from "../../styles/components/OrderSummary.styles";
import { Link } from "react-router-dom";
import SecondaryButton from "../SecondaryButton";

export default function OrderSummary({
  calcSubtotal,
  calcVAT,
  calcTotal,
  clearCart,
}) {
  return (
    <StyledOrderSummary>
      <h3>Summary</h3>
      <div className="price-summary">
        <p>Subtotal</p>
        <p>{calcSubtotal()} NOK</p>
      </div>
      <div className="price-summary">
        <p>Shipping</p>
        <p>Free</p>
      </div>
      <div className="price-summary">
        <p>VAT 25%</p>
        <p>{calcVAT()} NOK</p>
      </div>
      <div className="price-summary">
        <p className="total">Total</p>
        <p className="total">{calcTotal()} NOK</p>
      </div>
      <Link to={"/checkout"}>Checkout</Link>
      <SecondaryButton onClick={() => clearCart()} text={"Clear cart"} />
    </StyledOrderSummary>
  );
}
