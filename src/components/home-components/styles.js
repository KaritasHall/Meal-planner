import Lottie from "react-lottie-player";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const LandingSection = styled.section`
  background-color: var(--primary-orange);
  height: 50vh;
  padding-left: 24px;
  padding-right: 24px;
`;

export const StartButton = styled(Link)`
  display: grid;
  align-items: center;
  color: white;
  background-color: ${(props) =>
    props.backgroundColor === "orange"
      ? "var(--primary-orange)"
      : "var(--primary-darkblue)"};
  width: 203px;
  text-align: center;
  height: 64px;
  font-size: 18px;
  font-weight: bold;
  border-radius: 5px;
  margin-top: 26px;
  text-decoration: none;
`;

export const LandingTitle = styled.h1`
  font-size: 55px;
  font-family: "Lobster", cursive;
  color: white;
  line-height: 90%;
  padding-top: 76px;
`;
export const LandingSubtitle = styled.h2`
  font-size: 40px;
  font-family: "Barlow";
  color: white;
  font-style: italic;
  font-weight: 600;
  margin-top: -8px;
`;

export const LandingParagraph = styled.p`
  color: white;
  font-size: 20px;
  inline-size: 200px;
  margin-top: 44px;
`;

export const FoodAnimation = styled(Lottie)`
  transition: 300ms;
  height: 50vh;
  transform: scale(1.5);
  @media screen and (max-width: 358px) {
    transform: scale(1) translateY(40px);
  }
`;

export const LottieContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  display: grid;
  align-items: center;
  background-color: var(--primary-orange);
  overflow: hidden;
`;

export const AboutSection = styled.section`
  background-color: var(--primary-lightblue);
  height: 100vh;
`;

export const AboutTitle = styled.h2`
  font-size: 40px;
  font-family: "Barlow";
  color: var(--primary-darkblue);
  margin: 0;
  text-align: center;
  padding-top: 98px;
`;

export const AboutContainer = styled.div`
  padding-top: 50px;
`;

export const AboutDescription = styled.p`
  color: var(--primary-darkblue);
  font-size: 20px;
`;

export const AboutContent1 = styled.div`
  display: flex;
`;
export const AboutContent2 = styled.div`
  display: flex;
`;
export const AboutContent3 = styled.div`
  display: flex;
`;
