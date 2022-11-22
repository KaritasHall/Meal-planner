import React from "react";
import { RecipeCard, CardContainer, RecipeImg, RecipeTitle } from "./styles";

function Card({ recipe }) {
  return (
    <CardContainer>
      <RecipeCard>
        <RecipeTitle>{recipe.strMeal}</RecipeTitle>
        <RecipeImg src={recipe.strMealThumb} />
      </RecipeCard>
    </CardContainer>
  );
}

export default Card;
