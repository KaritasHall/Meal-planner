import React, { useEffect, useState } from "react";
import Card from "../components/recipe-components/recipe-card";
import { RecipePageHeadline } from "../components/recipe-components/styles";

function Recipes() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=c")
      .then((res) => res.json())
      .then((data) => {
        setRecipes(data.meals);
      });
  }, []);

  return (
    <>
      <RecipePageHeadline>Recipes</RecipePageHeadline>
      {recipes.map((recipe) => {
        return <Card key={recipe.idMeal} recipe={recipe} />;
      })}
    </>
  );
}

export default Recipes;
