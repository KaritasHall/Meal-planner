import {
  RecipeCard,
  CardContainer,
  RecipeImg,
  RecipeTitle,
  TitleBackground,
} from "./styles";
import React, { useCallback, useEffect, useState } from "react";
import PopupCard from "./popup-card";
import { useParams } from "react-router-dom";
import "./styles.css";

/* hasRemove has the default value of false, which allows us to use it optionally.
This will be used later to make Popup card reusable, and flip between Add/Remove*/
function Card({ recipe, hasRemove = false }) {
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

  return (
    <CardContainer>
      <RecipeCard onClick={togglePopup}>
        <TitleBackground>
          <RecipeTitle>
            {recipe.strMeal.slice(0, 34) +
              (recipe.strMeal.length > 34 ? "..." : "")}
          </RecipeTitle>
        </TitleBackground>
        <RecipeImg src={recipe.strMealThumb} alt="Recipe image" />
      </RecipeCard>
      <PopupCard
        togglePopup={togglePopup}
        recipe={recipe}
        popup={popup}
        day={day}
        hasRemove={hasRemove}
      />
    </CardContainer>
  );
}

export default Card;
