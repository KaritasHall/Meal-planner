import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
`;

export const RecipePageHeadline = styled.h1`
  color: black;
  font-size: 20px;
  text-align: center;
  text-transform: uppercase;
  margin: 45px 0 50px 0;
`;

export const RecipeCard = styled.div`
  width: 300px;
  height: 170px;
  margin-bottom: 35px;
  border-radius: 10px;
  box-shadow: 1px 1px 5px #CDCDCD;
`;

export const RecipeImg = styled.img`
  width: 300px;
  height: 170px;
  z-index: 0;
  position: relative;
  border-radius: 8px;
  object-fit: cover;
`;

export const TitleBackground = styled.div`
  z-index: 1;
  width: 300px;
  height: 40px;
  background: #FE6532;
  position: absolute;
  margin-top: 130px;
  border-radius: 0 0 8px 8px;
`;

export const RecipeTitle = styled.h2`
  z-index: 1;
  position: absolute;
  margin: 0;
  padding: 8px;
  color: white;
  font-size: 18px;
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
  width: 75%;
  min-height: 300px;
  max-height: 70%;
  background-color: #fff;
  border: 1px solid #999;
  border-radius: 4px;
  margin: 20px auto;
  padding: 0 20px 20px 20px;
  overflow-y: auto;
  box-shadow: inset 0 -40px 0 rgba(255, 255, 255, 0.9);
`;

export const PopupRecipeHeader = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  background: rgba(255, 255, 255, 0.9);
  width: 285px;
  height: 40px;
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
  width: 265px;
  height: 170px;
  object-fit: cover;
  border-left: 6px solid #FE6532;
  display: block;
  margin: auto;
  margin-top: 50px;
`;

export const PopupRecipeTextContent = styled.p`
  width: 260px;
  margin: auto;
`;

export const PopupRecipeTitle = styled.h2`
  font-size: 18px;
  color: var(--primary-darkblue);
  margin: 20px 0 25px 0;
`;

export const PopupRecipeSubTitle = styled.h3`
  font-size: 16px;
  color: var(--primary-orange);
  margin-top: 25px;
  margin-bottom: 0px;
`;

export const PopupRecipeIngredients = styled.p`
  color: black;
  font-size: 14px;
  margin-top: 10px;
  line-height: 25px;
`;

export const PopupRecipeInstructions = styled.p`
  color: black;
  font-size: 14px;
  margin-top: 10px;
  line-height: 20px;
`;

export const AddButton = styled.button`
  color: white;
  font-weight: bold;
  background-color: var(--primary-darkblue);
  padding: 10px 40px;
  border: none;
  border-radius: 4px;
  display: block;
  margin: auto;
  margin-top: 40px;
`;

