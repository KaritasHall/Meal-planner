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

export const PopupBackground = styled.div`
  position: fixed;
  background-color: rgba(0, 0, 0, 0.5);
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
`;

export const PopupRecipeCard = styled.div`
  position: relative;
  width: 50%;
  min-height: 300px;
  background-color: #fff;
  border: 1px solid #999;
  border-radius: 4px;
  margin: 20px auto;
  padding: 20px;
  overflow: auto;
`;

export const CloseButton = styled.button`
  cursor: pointer;
  padding: 10px 20px;
  display: block;
  margin: 100px auto 0;
  font-size: 18px;
`;

export const PopupRecipeImg = styled.img``;

export const PopupRecipeTitle = styled.h2``;
