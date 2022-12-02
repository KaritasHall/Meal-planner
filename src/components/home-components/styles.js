import Lottie from "react-lottie-player";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const LandingContainer = styled.div`
  background-color: var(--primary-orange);
  height: 100vh;
  overflow-y: hidden;

  @media screen and (min-width: 1024px) {
    height: 75vh;
  }
`;

export const LandingSection = styled.section`
  background-color: var(--primary-orange);
  padding-top: 30px;

  @media screen and (min-width: 1024px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 10px;
    margin-right: 20px;
  }

  @media screen and (min-width: 1600px) {
    padding-left: 240px;
    padding-right: 240px;
    padding-top: 30px;
    margin-right: 20px;
  }
`;

export const LandingContent = styled.div`
  position: relative;
  overflow: visible;
  height: 50%;
  z-index: 1;

  @media screen and (min-width: 768px) {
    padding-left: 90px;
  }

  @media screen and (min-width: 1024px) {
    margin-top: 20px;
  }
  @media screen and (min-width: 1600px) {
    margin-top: 120px;
  }
`;

export const StartButton = styled(Link)`
  position: relative;
  display: grid;
  align-items: center;
  color: white;
  background-color: ${(props) =>
    props.backgroundColor === "orange"
      ? "var(--primary-orange)"
      : "var(--primary-darkblue)"};
  text-align: center;
  width: 160px;
  height: 48px;
  font-size: 16px;
  font-weight: bold;
  border-radius: 5px;
  margin-top: 16px;
  text-decoration: none;

  @media screen and (min-width: 375px) {
    margin-top: 26px;
    width: 203px;
    height: 60px;
    font-size: 18px;
  }

  @media screen and (min-width: 1600px) {
    margin-top: 36px;
    width: 303px;
    height: 70px;
    font-size: 22px;
  }
`;

export const LandingTitle = styled.h1`
  font-size: 36px;
  font-family: "Lobster", cursive;
  color: white;
  font-weight: normal;
  padding-top: 36px;

  @media screen and (min-width: 375px) {
    font-size: 55px;
  }

  @media screen and (min-width: 768px) {
    font-size: 75px;
  }

  @media screen and (min-width: 1024px) {
    font-size: 85px;
  }

  @media screen and (min-width: 1600px) {
    font-size: 120px;
  }
`;

export const LandingSubtitle = styled.h2`
  margin-top: 0px;
  font-size: 24px;
  font-family: "Barlow";
  color: white;
  font-style: italic;
  font-weight: 600;

  @media screen and (min-width: 358px) {
    font-size: 40px;
    margin-top: -8px;
  }

  @media screen and (min-width: 768px) {
    font-size: 50px;
  }

  @media screen and (min-width: 1600px) {
    font-size: 84px;
  }
`;

export const LandingParagraph = styled.p`
  color: white;
  font-size: 16px;
  inline-size: 200px;
  margin-top: 24px;
  line-height: 25px;

  @media screen and (min-width: 375px) {
    margin-top: 44px;
    font-size: 20px;
  }

  @media screen and (min-width: 1024px) {
    margin-top: 64px;
    font-size: 22px;
    inline-size: 230px;
    line-height: 30px;
  }
  @media screen and (min-width: 1024px) {
    margin-top: 100px;
    font-size: 25px;
    inline-size: 500px;
    line-height: 30px;
  }
`;

export const FoodAnimation = styled(Lottie)`
  position: relative;
  max-height: 100%;
  transform: scale(1.2);
  @media screen and (min-width: 768px) {
    transform: scale(1);
    margin-top: -250px;
  }
  @media screen and (min-width: 1024px) {
    transform: scale(2);
    margin-top: 10px;
  }
  @media screen and (min-width: 1440px) {
    transform: translateY(-100px);
  }
`;

export const LottieContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* position: relative; */
  background-color: var(--primary-orange);
  z-index: 1;
  overflow: hidden;
  height: 40vh;
  @media screen and (min-width: 768px) {
    height: 60vh;
    margin-bottom: 50px;
  }
  @media screen and (min-width: 1024px) {
    transform: scale(1.1);
  }
`;

export const LandingFooter = styled.a`
  position: absolute;
  bottom: 36px;
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const LandingArrow = styled.img`
  height: 15px;
  @media screen and (min-width: 1024px) {
    display: none;
  }
`;

export const AboutSection = styled.section`
  background-color: var(--primary-lightblue);
  justify-content: center;
  height: 100vh;
  @media screen and (min-width: 1024px) {
    height: 25vh;
    padding-bottom: 10px;
    padding-bottom: 5px;
  }
`;

export const AboutTitle = styled.h2`
  font-size: 40px;
  font-family: "Barlow";
  color: var(--primary-darkblue);
  margin: 0;
  text-align: center;
  padding-top: 60px;
  @media screen and (min-width: 768px) {
    padding-top: 80px;
  }
  @media screen and (min-width: 1024px) {
    display: none;
  }
`;

export const AboutContainer = styled.div`
  padding-top: 10px;
  margin-left: 40px;
  margin-right: 40px;
  @media screen and (min-width: 768px) {
    margin-top: 80px;
    margin-left: 20px;
    margin-right: 20px;
  }
  @media screen and (min-width: 1024px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    padding-top: 20px;
    margin-top: 0;
  }
  @media screen and (min-width: 1600px) {
    margin-left: 200px;
    margin-right: 200px;
  }
`;

export const AboutDescription = styled.p`
  color: var(--primary-darkblue);
  font-size: 18px;
  inline-size: 200px;
  line-height: 25px;
  @media screen and (min-width: 678px) {
    font-size: 20px;
  }
  @media screen and (min-width: 1600px) {
    font-size: 22px;
    inline-size: 350px;
  }
`;

export const AboutContent = styled.div`
  display: flex;
  margin-top: 30px;
  padding-bottom: 50px;
  padding-top: 20px;
  padding-left: 12px;
  padding-right: 12px;
  justify-content: center;
  gap: 30px;

  @media screen and (min-width: 1024px) {
    padding-bottom: 10px;
    margin-top: 15px;
    &:nth-of-type(1) {
      flex-direction: row-reverse;
      border-right: solid 2px var(--primary-darkblue);
      @media screen and (min-width: 1600px) {
        border-right: none;
      }
    }
    &:nth-of-type(3) {
      border-left: solid 2px var(--primary-darkblue);
      flex-direction: row-reverse;
      @media screen and (min-width: 1600px) {
        border-left: none;
      }
    }
    @media screen and (min-width: 1600px) {
      margin-top: 75px;
    }
  }
`;

export const Line = styled.hr`
  border: 1px solid var(--primary-darkblue);
  width: 300px;
  margin: auto;
  @media screen and (min-width: 768px) {
    width: 450px;
  }
  @media screen and (min-width: 1024px) {
    display: none;
  }
`;

export const AboutIcon = styled.img`
  width: 86px;
  object-fit: contain;
  object-position: top;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 25px;
  @media screen and (min-width: 768px) {
    margin-top: 70px;
  }
  @media screen and (min-width: 1024px) {
    display: none;
  }
`;
