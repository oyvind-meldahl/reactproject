import { StyledProductCard } from "../../styles/components/ProductCard.styles";
import PrimaryButton from "../PrimaryButton";
import ModalDialog from "../ModalDialog";
import { Link, useLocation, useParams } from "react-router-dom";
import { useProductsStore } from "../../utils/stateManagement/dataManagement";
import { useModalDialogStore } from "../../utils/stateManagement/modalDialog";
import { shallow } from "zustand/shallow";

export default function ProductCard({
  id,
  description,
  discountedPrice,
  imageUrl,
  price,
  title,
}) {
  //desctructure location and params to conditionally display items
  const { pathname } = useLocation();
  const { id: productId } = useParams();

  const { addOne } = useProductsStore(
    (state) => ({
      addOne: state.addOne,
    }),
    shallow
  );

  //modal dialog
  const { isVisible, show } = useModalDialogStore(
    (state) => ({
      isVisible: state.isVisible,
      show: state.show,
    }),
    shallow
  );

  function handleClick(productId) {
    addOne(productId);
    show();
  }

  return (
    <StyledProductCard location={pathname}>
      <ModalDialog
        text={"Item added to cart successfully!"}
        isVisible={isVisible}
      />
      <div className="product-picture">
        <img src={imageUrl} alt={description} />
        {price !== discountedPrice && (
          <p className="discount">
            {price !== discountedPrice &&
              Math.trunc(((price - discountedPrice) / discountedPrice) * 100)}
            {price !== discountedPrice && "% OFF"}
          </p>
        )}
      </div>
      <div className="product-data">
        <div>
          <h2>{title}</h2>
          {pathname === `/product/${productId}` && <p>{description}</p>}
          <div className="price-container">
            {price !== discountedPrice && (
              <p className="old-price">
                <span>{price}</span>
              </p>
            )}
            <p>{discountedPrice} NOK</p>
          </div>
        </div>
        {pathname === `/product/${productId}` ? (
          <PrimaryButton
            onClick={() => handleClick(productId)}
            text={"Add to cart"}
          ></PrimaryButton>
        ) : (
          <Link to={`/product/${id}`}>View item</Link>
        )}
      </div>
    </StyledProductCard>
  );
}
