import React, { useEffect, useState } from "react";
import Card from "../components/recipe-components/recipe-card";
import "../components/recipe-components/styles.css";
import { Header } from "../components/header";

function Recipes() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v2/9973533/randomselection.php")
      .then((res) => res.json())
      .then((data) => {
        setRecipes(data.meals);
      });
  }, []);

  return (
    <>
      <Header title="Recipes" />

      <div id="container">
        {recipes.map((recipe) => {
          return <Card key={recipe.idMeal} recipe={recipe} />;
        })}
      </div>
    </>
  );
}

// https://www.themealdb.com/api/json/v1/1/search.php?f=c
export default Recipes;
