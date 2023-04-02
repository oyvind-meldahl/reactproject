import { StyledModalDialog } from "../../styles/components/ModalDialog.styles";
import PrimaryButton from "../PrimaryButton";
import SecondaryButton from "../SecondaryButton";
import { useLocation } from "react-router-dom";
import { useModalDialogStore } from "../../utils/stateManagement/modalDialog";
import { useProductsStore } from "../../utils/stateManagement/dataManagement";
import { shallow } from "zustand/shallow";

export default function ModalDialog({ text }) {
  const { pathname } = useLocation();

  const { isVisible, productId, hide } = useModalDialogStore(
    (state) => ({
      isVisible: state.isVisible,
      productId: state.productId,
      hide: state.hide,
    }),
    shallow
  );

  const { clearCount } = useProductsStore((state) => ({
    clearCount: state.clearCount,
  }));

  function removeCartItem(productId) {
    clearCount(productId);
    hide();
  }

  return (
    <StyledModalDialog isVisible={isVisible}>
      <dialog className="modal-box" open={isVisible} aria-modal="true">
        <div className="close-button-container">
          <button onClick={() => hide()}>
            <span className="material-symbols-rounded">close</span>
          </button>
        </div>
        <h3>{text}</h3>
        {pathname === "/cart" && (
          <div className="buttons-container" role="document">
            <SecondaryButton
              text={"Yes"}
              onClick={() => removeCartItem(productId)}
            />
            <PrimaryButton text={"No"} onClick={() => hide()} />
          </div>
        )}
      </dialog>
    </StyledModalDialog>
  );
}
