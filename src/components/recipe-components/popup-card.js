import React, { useRef } from "react";
import useOnClickOutside from "use-onclickoutside";
import AddButton from "./add-button";
import { Link } from "react-router-dom";

import {
  PopupBackground,
  PopupRecipeCard,
  PopupRecipeTitle,
  PopupRecipeImg,
  CloseButton,
  PopupRecipeInstructions,
  PopupRecipeIngredients,
  PopupRecipeSubTitle,
} from "./styles";

export default function PopupCard({ recipe, togglePopup, popup }) {
  /* Found a library (useOnClickOutside) that allows you to click outside modal to close it */
  const popupRecipeCardRef = useRef(null);
  useOnClickOutside(popupRecipeCardRef, togglePopup);

  if (!popup) return null;

  let IngredientsList = [];

  for (let i = 1; i < 20; i++) {
    if (recipe["strIngredient" + i]) {
      IngredientsList.push(
        <div>
          {`${recipe["strIngredient" + i]}, ${recipe["strMeasure" + i]}`}
        </div>
      );
    }
  }

  function handleClick() {
    localStorage.setItem("recipeId", recipe.idMeal);
  }

  /* Get the day from props, add onClick to Addbutton, work with an object like this: 
  {
    monday: recipe
  }
  */

  return (
    <PopupBackground>
      <PopupRecipeCard ref={popupRecipeCardRef}>
        <CloseButton onClick={togglePopup}>x</CloseButton>
        <PopupRecipeTitle>{recipe.strMeal}</PopupRecipeTitle>
        <PopupRecipeImg src={recipe.strMealThumb} />
        <PopupRecipeSubTitle>Ingredients</PopupRecipeSubTitle>
        <PopupRecipeIngredients>{IngredientsList}</PopupRecipeIngredients>
        <PopupRecipeSubTitle>Instructions</PopupRecipeSubTitle>
        <PopupRecipeInstructions>
          {recipe.strInstructions}
        </PopupRecipeInstructions>
        <Link to="/weekly-overview">
          <AddButton onClick={handleClick} />
        </Link>
      </PopupRecipeCard>
    </PopupBackground>
  );
}
