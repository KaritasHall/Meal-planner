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
`;

export const EmptyCardButton = styled.button`
  width: 80px;
  height: 80px;
  border: 1px solid #02195A;
  border-radius: 50%;
  background-color: #02195A;
`;

export const EmptyCardButtonLabel = styled.h1`
  font-size: 75px;
  font-weight: 600;
  color: #EAF5FF;
  line-height: 0px;
  text-decoration: none;
  margin: 0px;
`;

export const EmptyCardButtonLink = styled(Link)`
  display: block;
  margin: auto;
  justify-content: center;
  text-decoration: none;
`;

export const WeekdayTitle = styled.h2`
  color: black;
  font-size: 16px;
  margin: 32px 0 6px 45px;
  text-transform: uppercase;
`;

export const WeeklyOverviewPageHeadline = styled.h1`
  color: black;
  font-size: 20px;
  text-align: center;
  text-transform: uppercase;
  margin: 45px 0 50px 0;
`;