import React, { useEffect, useState } from "react";
import {
  EmptyCardContainer,
  EmptyCardButton,
  EmptyCardButtonLabel,
  EmptyCardButtonLink,
} from "./styles";

export default function EmptyCard({ weekday }) {
  const Meal = localStorage.getItem(weekday);

  const [meal, setMeal] = useState([]);
  console.log(Meal, meal);

  useEffect(() => {
    if (!Meal) {
      return;
    }
    fetch("https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + Meal)
      .then((res) => res.json())
      .then((data) => {
        setMeal(data.meals[0]);
      });
  }, []);

  return (
    <>
      <EmptyCardContainer>
        <EmptyCardButtonLink to={`/recipes/${weekday}`}>
          <EmptyCardButton>
            <EmptyCardButtonLabel>+</EmptyCardButtonLabel>
          </EmptyCardButton>
        </EmptyCardButtonLink>
      </EmptyCardContainer>
    </>
  );
}
