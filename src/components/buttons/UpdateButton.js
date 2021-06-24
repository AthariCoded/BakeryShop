import { useState } from "react";
import { UpdateButtonStyled } from "../../styles";
import ProductModal from "../modals/ProductModal";

const UpdateButton = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  return (
    <div>
      <UpdateButtonStyled onClick={openModal}>Update</UpdateButtonStyled>
      <ProductModal
        isOpen={isOpen}
        closeModal={closeModal}
        oldProduct={props.product}
      />
    </div>
  );
};

export default UpdateButton;
