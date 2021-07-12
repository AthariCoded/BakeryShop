import Modal from "react-modal";

//state
import { useState } from "react";

//styles
import { CreateButtonStyled } from "../../styles";
import bakeryStore from "../../stores/bakeryStore";

const BakeryModal = (props) => {
  const [bakery, setBakery] = useState({
    name: "",
    image: "",
  });

  const handleChange = (event) => {
    setBakery({ ...bakery, [event.target.name]: event.target.value });
  };

  const handleImage = (event) => {
    setBakery({ ...bakery, image: event.target.files[0] });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    bakeryStore.bakeryCreate(bakery);
    props.closeModal();
  };

  return (
    <div>
      <Modal
        isOpen={props.isOpen}
        onRequestClose={props.closeModal}
        contentLabel="Bakery Modal"
      >
        <form onSubmit={handleSubmit}>
          <div className="form-group row">
            <div className="col-6">
              <label>Name</label>
              <input
                className="form-control"
                type="text"
                onChange={handleChange}
                name="name"
                value={bakery.name}
              />
            </div>
          </div>
          <div className="form-group">
            <label>Image</label>
            <input
              className="form-control"
              type="file"
              onChange={handleImage}
              name="image"
            />
          </div>
          <CreateButtonStyled>Add</CreateButtonStyled>
        </form>
      </Modal>
    </div>
  );
};

export default BakeryModal;
