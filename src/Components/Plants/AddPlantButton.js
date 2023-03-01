import React, { useState } from "react";

const AddPlantButton = (props) => {
  return <button onClick={props.onClick}>+ {props.text}</button>;
};

export default AddPlantButton;
