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
  z-index: 0;
  position: relative;
  border-radius: 8px;
  object-fit: cover;
`;

export const RecipeTitle = styled.h2`
  z-index: 1;
  position: absolute;
  margin-left: 3px;
  background-color: rgba(255, 122, 89, 0.8);
  padding: 8px;
`;

export const PopupBackground = styled.div`
  z-index: 2;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.5);
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PopupRecipeCard = styled.div`
  position: relative;
  width: 70%;
  min-height: 300px;
  max-height: 70%;
  background-color: #fff;
  border: 1px solid #999;
  border-radius: 4px;
  margin: 20px auto;
  padding: 20px;
  overflow-y: auto;
`;

export const CloseButton = styled.button`
  cursor: pointer;
  padding: 10px 20px;
  display: block;
  font-size: 18px;
  border: none;
  background: none;
  padding: 0;
  margin-left: auto;
`;

export const PopupRecipeImg = styled.img`
  border: 1px solid black;
  width: 250px;
  height: 150px;
  position: relative;
  border-radius: 8px;
  object-fit: cover;
`;

export const PopupRecipeTitle = styled.h2``;

export const PopupRecipeSubTitle = styled.h3``;


export const PopupRecipeIngredients = styled.p`
  color: black;
  font-size: 16x;
`;

export const PopupRecipeInstructions = styled.p`
  color: black;
  font-size: 16x;
`;

export const PopupRecipeBtn = styled.button`
  color: black;
  font-weight: bold;
  background-color: orange;
  padding: 10px 20px;
`;