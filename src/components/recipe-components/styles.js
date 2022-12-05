import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
`;

export const RecipeCard = styled.div`
  cursor: pointer;
  width: 300px;
  height: 170px;
  margin-bottom: 40px;
  border-radius: 10px;
  box-shadow: 1px 1px 5px #cdcdcd;
  @media only screen and (min-width: 1600px) {
    width: 450px;
    height: 320px;
    margin-bottom: 80px;
  }
`;

export const RecipeImg = styled.img`
  width: 300px;
  height: 170px;
  z-index: 0;
  position: relative;
  border-radius: 8px;
  object-fit: cover;
  @media only screen and (min-width: 1600px) {
    width: 450px;
    height: 320px;
  }
`;

export const TitleBackground = styled.div`
  z-index: 1;
  width: 300px;
  height: 40px;
  background: #fe6532;
  position: absolute;
  margin-top: 130px;
  border-radius: 0 0 8px 8px;
  @media only screen and (min-width: 1600px) {
    width: 450px;
    height: 50px;
    margin-top: 270px;
  }
`;

export const RecipeTitle = styled.h2`
  z-index: 1;
  position: absolute;
  margin: 0;
  padding: 8px;
  color: white;
  font-size: 18px;
  @media only screen and (min-width: 1600px) {
    font-size: 24px;
    padding: 9px 0 0px 12px;
  }
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
  max-width: 72%;
  background-color: #fff;
  border: 1px solid #999;
  border-radius: 4px;
  margin: 20px auto;
  padding: 0 20px 20px 20px;
  overflow-y: auto;
  box-shadow: inset 0 -40px 0 rgba(255, 255, 255, 0.9);
  @media only screen and (min-width: 1024px) {
    max-width: 796px;
  }
  @media only screen and (min-width: 1600px) {
    max-width: 796px;
  }
`;

export const PopupRecipeHeader = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  background: rgba(255, 255, 255, 0.9);
  width: 73vw;
  height: 40px;
  @media only screen and (min-width: 1024px) {
    max-width: 790px;
  }
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
  width: 90%;
  height: 170px;
  object-fit: cover;
  border-left: 6px solid #fe6532;
  display: block;
  margin: auto;
  margin-top: 50px;
  @media only screen and (min-width: 1024px) {
    height: 230px;
  }
`;

export const PopupRecipeTextContent = styled.div`
  width: 90%;
  margin: auto;
`;

export const PopupRecipeTitleContainer = styled.div`
  width: 90%;
`;

export const PopupRecipeTitle = styled.h2`
  font-size: 22px;
  color: var(--primary-darkblue);
  margin: 20px 0 25px 0;
  @media only screen and (min-width: 1024px) {
    font-size: 24px;
  }
`;

export const PopupRecipeConcent = styled.div`
  width: 90%;
  margin: 0;
  @media only screen and (min-width: 1024px) {
    display: flex;
    flex-direction: row;
  }
`;

export const PopupRecipeIngredientsContainer = styled.div`
  font-size: 16px;
  @media only screen and (min-width: 1024px) {
    width: 45%;
    margin-top: -25px;
  }
`;

export const PopupRecipeIngredientsTitle = styled.h3`
  font-size: 18px;
  color: var(--primary-orange);
  margin-top: 25px;
  margin-bottom: 0px;
  @media only screen and (min-width: 1024px) {
    font-size: 20px;
  }
`;

export const ListItem = styled.li`
  list-style-type: disc;
`;

export const PopupRecipeIngredients = styled.ul`
  color: black;
  font-size: 16px;
  margin-top: 10px;
  line-height: 25px;
  padding-left: 16px;
  @media only screen and (min-width: 1024px) {
    margin-right: 0px;
  }
`;

export const PopupRecipeInstructionsContainer = styled.div`
  font-size: 16px;
  @media only screen and (min-width: 1024px) {
    width: 55%;
    margin-top: -25px;
    margin-left: 30px;
  }
`;

export const PopupRecipeInstructionsTitle = styled.h3`
  font-size: 18px;
  color: var(--primary-orange);
  margin-top: 25px;
  margin-bottom: 0px;
  @media only screen and (min-width: 1024px) {
    font-size: 20px;
  }
`;

export const PopupRecipeInstructions = styled.p`
  color: black;
  font-size: 16px;
  margin-top: 10px;
  line-height: 21px;
  margin-right: -20px;
  @media only screen and (min-width: 1024px) {
    margin-right: -45px;
  }
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
  cursor: pointer;
`;
