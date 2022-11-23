import React from "react";

import {
  PopupBackground,
  PopupRecipeCard,
  PopupRecipeTitle,
  PopupRecipeImg,
  CloseButton,
  PopupRecipeInstructions,
} from "./styles";

export default function PopupCard({ recipe, togglePopup, popup }) {
  if (!popup) return <></>;
  return (
    <PopupBackground>
      <PopupRecipeCard>
        <CloseButton onClick={togglePopup}>x</CloseButton>
        <PopupRecipeTitle>{recipe.strMeal}</PopupRecipeTitle>
        <PopupRecipeImg src={recipe.strMealThumb} />
        <PopupRecipeInstructions>{recipe.strInstructions}</PopupRecipeInstructions>
      </PopupRecipeCard>
    </PopupBackground>
  );
}