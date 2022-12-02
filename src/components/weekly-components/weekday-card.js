import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "../recipe-components/recipe-card";
import {
  EmptyCardContainer,
  EmptyCardButton,
  EmptyCardButtonLabel,
  EmptyCardButtonLink,
} from "./styles";

// I changed EmptyCard to WeekdayCard for clarity
export default function WeekdayCard({ weekday }) {
  const Meal = localStorage.getItem(weekday);

  /* If there is no recipe saved for the day, [meal] will stay as null. We used to 
  have the initial state (useState) as an empty array but that signals that we are working with more
  than one recipe, which we are not. See how setMeal is being used -  we are only fetching 
  one object from the data.meals array */
  const [meal, setMeal] = useState(null);
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

  /* Because the inital state of meals is null, it is falsy in the beginning. When we fetch a recipe, meal 
  becomes truthy. See usage of setMeal, once meal has a value (the recipe that is fetched) it becomes truthy.
  If you look at recipe-card.js, you can see that it takes recipe as a prop, that is why we have recipe={meal}*/
  if (meal) {
    return (
      <Link className="weekday-link" to={`/weekly-overview/${weekday}`}>
        <Card recipe={meal} hasRemove={true} />
      </Link>
    );
  }

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
