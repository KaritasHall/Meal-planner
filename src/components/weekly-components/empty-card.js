import React from "react";
import {EmptyCardContainer, EmptyCardButton, EmptyCardButtonLabel, EmptyCardButtonLink} from "./styles";

export default function EmptyCard() {
    return(
        <>
            <EmptyCardContainer>
                <EmptyCardButtonLink to="/recipes">
                <EmptyCardButton><EmptyCardButtonLabel>+</EmptyCardButtonLabel></EmptyCardButton>
                </EmptyCardButtonLink>
            </EmptyCardContainer>
        </>
    )
}