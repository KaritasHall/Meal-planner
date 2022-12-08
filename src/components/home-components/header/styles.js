import styled from "styled-components";

export const HeaderContainer = styled.img`
  padding-top: 20px;
  height: 28px;
  @media only screen and (min-width: 690px) {
    height: 34px;
    padding-left: 89px;
    margin-top: 10px;
  }

  @media screen and (min-width: 1024px) {
    padding-left: 112px;
    height: 38px;
  }

  @media screen and (min-width: 1600px) {
    padding-left: 170px;
    padding-right: 80px;
    height: 50px;
  }

  @media only screen and (min-width: 2000px) {
    height: 50px;
    margin-top: 20px;
    margin-left: 170px;
  }
`;
