import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export const EmptyCardContainer = styled(motion.div)`
  width: 300px;
  height: 170px;
  border: 1px solid #eaf5ff;
  border-radius: 10px;
  background-color: #eaf5ff;
  margin: auto;
  display: flex;

  box-shadow: 1px 1px 5px #cdcdcd;
  margin-bottom: 40px;
  @media only screen and (min-width: 1600px) {
    width: 450px;
    height: 320px;
  }
`;

export const EmptyCardButton = styled.button`
  cursor: pointer;
  width: 80px;
  height: 80px;
  border: 1px solid #02195a;
  border-radius: 50%;
  :active {
    background-color: var(--primary-orange);
    border: 1px solid var(--primary-orange);
  }

  background-color: #02195a;
  @media only screen and (min-width: 1600px) {
    width: 130px;
    height: 130px;
  }
`;

export const EmptyCardButtonLabel = styled.h1`
  font-size: 75px;
  font-weight: 600;
  color: #eaf5ff;
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
  padding-bottom: 3px;
  @media only screen and (min-width: 1600px) {
    font-size: 24px;
    padding-bottom: 8px;
  }
`;

export const Logo = styled.img`
  margin-top: 10px;
  margin-left: 10px;
  height: 22px;
`;

export const HeadlineContainer = styled.div`
  margin-top: 14px;
  align-self: center;
`;

export const PageHeadline = styled.h1`
  font-family: "Lobster", cursive;
  color: white;
  font-size: 22px;
  text-align: center;
  text-transform: uppercase;
  @media only screen and (min-width: 1600px) {
    font-size: 40px;
    line-height: 200px;
  }
`;

export const FakeDiv = styled.div`
  width: 150px;
`;

export const PageHeader = styled.div`
  background: var(--primary-orange);
  width: 100%;
  height: 123px;
  border-bottom: 7px solid var(--primary-lightblue);
  margin-bottom: 50px;
  @media only screen and (min-width: 1600px) {
    height: 200px;
    margin-bottom: 120px;
  }
  @media only screen and (min-width: 2000px) {
    margin-bottom: -95px;
  }
`;
