import styled from "styled-components";

export const HeaderContainer = styled.img`
  padding-top: 20px;
  height: 22px;
  @media only screen and (min-width: 690px) {
    height: 32px;
  }
  @media screen and (min-width: 1600px) {
    padding-left: 170px;
    padding-right: 80px;
    height: 50px;
  }

  @media only screen and (min-width: 2000px) {
    height: 50px;
    margin-top: 20px;
    margin-left: 200px;
  }
`;
