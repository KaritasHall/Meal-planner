import React, { useRef } from "react";
import useOnClickOutside from "use-onclickoutside";

import {
  PopupBackground,
  PopupRecipeCard,
  PopupRecipeTitle,
  PopupRecipeImg,
  CloseButton,
  PopupRecipeInstructions,
} from "./styles";

export default function PopupCard({ recipe, togglePopup, popup }) {
  /* Found a library (useOnClickOutside) that allows you to click outside modal to close it */
  const popupRecipeCardRef = useRef(null);
  useOnClickOutside(popupRecipeCardRef, togglePopup);

  if (!popup) return null;

  return (
    <PopupBackground>
      <PopupRecipeCard ref={popupRecipeCardRef}>
        <CloseButton onClick={togglePopup}>x</CloseButton>
        <PopupRecipeTitle>{recipe.strMeal}</PopupRecipeTitle>
        <PopupRecipeImg src={recipe.strMealThumb} />
        <PopupRecipeInstructions>
          {recipe.strInstructions}
        </PopupRecipeInstructions>
      </PopupRecipeCard>
    </PopupBackground>
  );
}
