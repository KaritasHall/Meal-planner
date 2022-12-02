import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../components/weekly-components/brandLogo.png";

export function Header(props) {
  return (
    <>
      <PageHeader>
        <div>
          <Link to="/">
            <Logo src={logo} aria-label="Go back home" />
          </Link>
        </div>
        <HeadlineContainer>
          <PageHeadline>{props.title}</PageHeadline>
        </HeadlineContainer>
        <FakeDiv></FakeDiv>
      </PageHeader>
    </>
  );
}

const Logo = styled.img`
  margin-top: 10px;
  margin-left: 10px;
  height: 22px;
  @media only screen and (min-width: 690px) {
    margin-top: 14px;
    margin-left: 14px;
    height: 32px;
  }
  @media only screen and (min-width: 1600px) {
    margin-top: 20px;
    margin-left: 35px;
    height: 50px;
  }
`;

const HeadlineContainer = styled.div`
  margin-top: 14px;
  align-self: center;
  @media only screen and (min-width: 690px) {
    margin-top: -4px;
  }
`;

const PageHeadline = styled.h1`
  font-family: 'Lobster Two', cursive;
  color: white;
  font-size: 26px;
  text-align: center;
  margin-top: -7px;
  @media only screen and (min-width: 690px) {
    font-size: 32px;
    margin-top: -9px;
  }
  @media only screen and (min-width: 1024px) {
    font-size: 40px;
    margin-top: -16px;
  }
  @media only screen and (min-width: 1600px) {
    font-size: 50px;
    margin-top: -9px;
  }
`;

const FakeDiv = styled.div`
  width: 150px;
`;

const PageHeader = styled.div`
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
