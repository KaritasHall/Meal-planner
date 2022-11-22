import styled from "styled-components";
import { Link } from "react-router-dom";

export const EmptyCardContainer = styled.div`
  width: 300px;
  height: 170px;
  border: 2px solid black;
  border-radius: 10px;
  background-color: #f2f2f2;
  margin: auto;
  display: flex;
`;

export const EmptyCardButton = styled.button`
  width: 80px;
  height: 80px;
  border: 2px solid black;
  border-radius: 50%;
  background-color: #ffffff;
`;

export const EmptyCardButtonLabel = styled.h1`
  font-size: 50px;
  font-weight: bold;
  color: black;
  line-height: 0px;
  text-decoration: none;
`;

export const EmptyCardButtonLink = styled(Link)`
  display: block;
  margin: auto;
  justify-content: center;
  text-decoration: none;
`;

export const WeekdayTitle = styled.h2`
  color: red;
`;
