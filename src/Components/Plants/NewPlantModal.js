import React from "react";

const NewPlantModal = (props) => {
  const submitHandler = (event) => {
    event.preventDefault();
    props.onSubmit();
  };
  return (
    <form onSubmit={submitHandler}>
      <label>DUUUPA</label>
      <input type="text" placeholder="Name of a plant" />
      <button>Add plant</button>
    </form>
  );
};

export default NewPlantModal;
