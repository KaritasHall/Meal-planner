import React from "react";

function Card({ recipe }) {
  return (
    <div>
      <p>{recipe.strMeal}</p>
      <img src={recipe.strMealThumb} />
    </div>
  );
}

export default Card;
