import React, { useEffect, useState } from "react";
import Card from "../components/recipe-components/recipe-card";

function Recipes() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("https://themealdb.com/api/json/v1/1/search.php?s=")
      .then((res) => res.json())
      .then((data) => {
        setRecipes(data.meals);
      });
  }, []);

  return (
    <>
      <h1>Explore delicious recipes!</h1>
      {recipes.map((recipe) => {
        return <Card key={recipes.idMeal} recipe={recipe} />;
      })}
    </>
  );
}

export default Recipes;
