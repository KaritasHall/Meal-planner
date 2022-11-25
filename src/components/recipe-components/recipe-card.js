import { RecipeCard, CardContainer, RecipeImg, RecipeTitle } from "./styles";
import React, { useCallback, useEffect, useState } from "react";
import PopupCard from "./popup-card";
import { useParams } from "react-router-dom";

function Card({ recipe }) {
  const [popup, setPopup] = useState(false);

  const togglePopup = useCallback(() => {
    setPopup(!popup);
  }, [popup]);

  useEffect(() => {
    /* Used the solution from french guy. The "active-popup" class is used in index.css */
    if (popup) {
      document.body.classList.add("active-popup");
    } else {
      document.body.classList.remove("active-popup");
    }
  }, [popup]);

  let { day } = useParams();

  console.log(day);

  return (
    <CardContainer>
      <RecipeCard onClick={togglePopup}>
        <RecipeTitle>{recipe.strMeal}</RecipeTitle>
        <RecipeImg src={recipe.strMealThumb} />
      </RecipeCard>
      <PopupCard togglePopup={togglePopup} recipe={recipe} popup={popup} />
    </CardContainer>
  );
}

export default Card;
