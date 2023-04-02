import { Link } from "react-router-dom";
import { useProductsStore } from "../../../utils/stateManagement/dataManagement";
import { shallow } from "zustand/shallow";

export default function Cart() {
  const { availableProducts } = useProductsStore(
    (state) => ({
      availableProducts: state.availableProducts,
    }),
    shallow
  );

  const totalProducts = [];

  availableProducts.forEach((element) => {
    totalProducts.push(element.count);
  });

  function printTotal() {
    return totalProducts.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );
  }

  return (
    <div className="cart-container">
      <Link to="/cart" className="cart-wrapper">
        <span className="material-symbols-rounded">shopping_bag</span>
        <span>{printTotal()}</span>
      </Link>
    </div>
  );
}
