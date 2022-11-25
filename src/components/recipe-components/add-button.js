import React from "react";
import { PopupRecipeBtn } from "./styles";
import { Link } from "react-router-dom";

export default function AddButton() {
  return (
    <Link to="/weekly-overview">
      <PopupRecipeBtn>Add</PopupRecipeBtn>
    </Link>
  );
}
