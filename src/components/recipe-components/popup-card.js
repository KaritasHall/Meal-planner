import React, { useMemo, useRef } from "react";
import useOnClickOutside from "use-onclickoutside";
import { useNavigate } from "react-router-dom";

import {
  PopupBackground,
  PopupRecipeCard,
  PopupRecipeTitle,
  PopupRecipeImg,
  CloseButton,
  PopupRecipeTextContent,
  PopupRecipeTitleContainer,
  PopupRecipeIngredientsTitle,
  PopupRecipeInstructionsTitle,
  PopupRecipeConcent,
  PopupRecipeInstructions,
  PopupRecipeIngredients,
  AddButton,
  PopupRecipeHeader,
  PopupRecipeIngredientsContainer,
  PopupRecipeInstructionsContainer,
  ListItem,
} from "./styles";

export default function PopupCard({
  recipe,
  togglePopup,
  popup,
  day,
  hasRemove,
}) {
  /* Found a library (useOnClickOutside) that allows you to click outside modal to close it */
  const popupRecipeCardRef = useRef(null);
  useOnClickOutside(popupRecipeCardRef, togglePopup);

  /* useNavigate allows you to redirect to another path with javascript.
  https://reactrouter.com/en/main/hooks/use-navigate
  See usage in the handleClick function
  */
  const navigate = useNavigate();

  const IngredientsList = useMemo(() => {
    const list = [];

    for (let i = 1; i <= 20; i++) {
      const value = recipe["strIngredient" + i];

      if (value) {
        list.push(
          <ListItem key={value}>
            {`${value}, ${recipe["strMeasure" + i]}`}
          </ListItem>
        );
      }
    }

    return list;
  }, [recipe]);

  /* Expanded the handleClick to have two versions - Add and Remove
  I also had to take the Link off the AddButton and use useNavigate here to properly
  reuse the Popup card component. In the previous version it had a hardcorded single
  destination (weekly-overview) */
  function handleClick() {
    if (hasRemove) {
      // Because we are deleting, the value is irrelevant (idMeal)
      localStorage.removeItem(day);
      navigate(0); //refreshes page
    } else {
      localStorage.setItem(day, recipe.idMeal);
      navigate("/weekly-overview");
    }
  }

  if (!popup) return null;

  return (
    <PopupBackground>
      <PopupRecipeCard ref={popupRecipeCardRef}>
        <PopupRecipeHeader>
          <CloseButton onClick={togglePopup}>x</CloseButton>
        </PopupRecipeHeader>
        <PopupRecipeImg src={recipe.strMealThumb} />
        <PopupRecipeTextContent>
          <PopupRecipeTitleContainer>
            <PopupRecipeTitle>{recipe.strMeal}</PopupRecipeTitle>
          </PopupRecipeTitleContainer>
          <PopupRecipeConcent>
            <PopupRecipeIngredientsContainer>
              <PopupRecipeIngredientsTitle>
                Ingredients
              </PopupRecipeIngredientsTitle>
              <PopupRecipeIngredients>{IngredientsList}</PopupRecipeIngredients>
            </PopupRecipeIngredientsContainer>
            <PopupRecipeInstructionsContainer>
              <PopupRecipeInstructionsTitle>
                Instructions
              </PopupRecipeInstructionsTitle>
              <PopupRecipeInstructions>
                {recipe.strInstructions}
              </PopupRecipeInstructions>
            </PopupRecipeInstructionsContainer>
          </PopupRecipeConcent>
        </PopupRecipeTextContent>
        {/* Button has either Add or Remove depending on if hasRemove is true/false */}
        <AddButton onClick={handleClick}>
          {hasRemove ? "Remove" : "Add"}
        </AddButton>
      </PopupRecipeCard>
    </PopupBackground>
  );
}
