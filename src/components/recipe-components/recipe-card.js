import { RecipeCard, CardContainer, RecipeImg, RecipeTitle } from "./styles";
import React, { useState } from "react";
import PopupCard from "./popup-card";

function Card({ recipe }) {
  const [popup, setPopup] = useState(false);

  const togglePopup = () => {
    setPopup(!popup);
  };
  return (
    <CardContainer>
      <RecipeCard onClick={togglePopup}>
        <RecipeTitle>{recipe.strMeal}</RecipeTitle>
        <RecipeImg src={recipe.strMealThumb} />
        <PopupCard togglePopup={togglePopup} recipe={recipe} popup={popup} />
      </RecipeCard>
    </CardContainer>
  );
}

export default Card;
