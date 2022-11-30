import React, { useEffect, useState } from "react";
import Card from "../components/recipe-components/recipe-card";
import { RecipePageHeadline } from "../components/recipe-components/styles";
import "../components/recipe-components/styles.css"

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
      <div id="container">
      {recipes.map((recipe) => {
        return <Card key={recipe.idMeal} recipe={recipe} />;
      })}
      </div>
    </>
  );
}

export default Recipes;