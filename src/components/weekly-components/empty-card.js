import React from "react";
import {
  EmptyCardContainer,
  EmptyCardButton,
  EmptyCardButtonLabel,
  EmptyCardButtonLink,
} from "./styles";

export default function EmptyCard({ weekday }) {
  return (
    <>
      <EmptyCardContainer>
        <EmptyCardButtonLink to={`/recipes?day=${weekday}`}>
          <EmptyCardButton>
            <EmptyCardButtonLabel>+</EmptyCardButtonLabel>
          </EmptyCardButton>
        </EmptyCardButtonLink>
      </EmptyCardContainer>
    </>
  );
}
