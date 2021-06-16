import { DeleteButtonStyled } from "../../styles";

const DeleteButton = (props) => {
  const handleDelete = () => {
    props.productDelete(props.productId);
    props.setProduct(null);
  };
  return <DeleteButtonStyled onClick={handleDelete}>Delete</DeleteButtonStyled>;
};

export default DeleteButton;
