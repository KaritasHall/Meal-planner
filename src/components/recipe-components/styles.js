import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const RecipeCard = styled.div`
  width: 300px;
  height: 170px;
  border: 2px solid black;
  margin-bottom: 18px;
  border-radius: 10px;
`;

export const RecipeImg = styled.img`
  width: 300px;
  height: 170px;
  /* width: 100%;
  height: 100%; */
  z-index: 0;
  position: relative;
  border-radius: 8px;
  object-fit: cover;
`;

export const RecipeTitle = styled.h2`
  z-index: 100;
  position: absolute;
  margin-left: 3px;
  background-color: rgba(255, 122, 89, 0.8);
  padding: 8px;
`;
