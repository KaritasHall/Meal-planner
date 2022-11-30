import styled from "styled-components";
import { Link } from "react-router-dom";

export const EmptyCardContainer = styled.div`
  width: 300px;
  height: 170px;
  border: 1px solid #EAF5FF;
  border-radius: 10px;
  background-color: #EAF5FF;
  margin: auto;
  display: flex;
  box-shadow: 1px 1px 5px #CDCDCD;
  margin-bottom: 40px;
  @media only screen and (min-width: 1600px) {
    width: 450px;
    height: 320px;
    }
`;

export const EmptyCardButton = styled.button`
  width: 80px;
  height: 80px;
  border: 1px solid #02195A;
  border-radius: 50%;
  background-color: #02195A;
  @media only screen and (min-width: 1600px) {
    width: 130px;
    height: 130px;
    }
`;

export const EmptyCardButtonLabel = styled.h1`
  font-size: 75px;
  font-weight: 600;
  color: #EAF5FF;
  line-height: 0px;
  text-decoration: none;
  margin: 0px;
  @media only screen and (min-width: 1600px) {
    font-size: 100px;
    }
`;

export const EmptyCardButtonLink = styled(Link)`
  display: block;
  margin: auto;
  justify-content: center;
  text-decoration: none;
`;

export const WeekdayTitleContainer = styled.div`
  margin: auto;
  margin-bottom: 6px;
  width: 300px;
  text-align: left;
  @media only screen and (min-width: 1600px) {
    width: 450px;
    }
`;

export const WeekdayTitle = styled.h2`
  color: black;
  font-size: 16px;
  text-transform: uppercase;
  padding-left: 3px;
  @media only screen and (min-width: 1600px) {
    font-size: 24px;
    }
`;

export const WeeklyOverviewPageHeadline = styled.h1`
  color: white;
  font-size: 24px;
  text-align: center;
  text-transform: uppercase;
  line-height: 100px;
`;

export const WeeklyOverviewPageHeader = styled.div`
  background: var(--primary-orange);
  width: 100%;
  height: 100px;
  border-bottom: 7px solid var(--primary-lightblue);
  margin-bottom: 50px;
`;