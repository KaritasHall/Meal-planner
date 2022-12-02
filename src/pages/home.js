import React from "react";
import Header from "../components/home-components/header/header";
import chefhat from "../components/home-components/icons/chefhat.svg";
import calendar from "../components/home-components/icons/calendar.svg";
import shopping from "../components/home-components/icons/shopping.svg";
import scrollArrow from "../components/home-components/icons/scroll.svg";
import lottieJson from "../components/home-components/icons/lottie-anim.json";

import {
  FoodAnimation,
  LandingContainer,
  LandingContent,
  LandingTitle,
  LandingSubtitle,
  LandingParagraph,
  LandingSection,
  LandingFooter,
  LandingArrow,
  AboutSection,
  AboutTitle,
  AboutContainer,
  AboutContent,
  AboutDescription,
  LottieContainer,
  StartButton,
  AboutIcon,
  ButtonContainer,
  Line,
} from "../components/home-components/styles";

function Home() {
  return (
    <>
      <LandingContainer>
        <Header />
        <LandingSection>
          <LandingContent className="with-gutter">
            <LandingTitle>Meal planning</LandingTitle>
            <LandingSubtitle>made easy</LandingSubtitle>
            <LandingParagraph>
              Plan your whole week with just a few clicks!
            </LandingParagraph>
            <StartButton to="/weekly-overview">Start Planning</StartButton>
          </LandingContent>

          <LottieContainer>
            <FoodAnimation
              loop
              animationData={lottieJson}
              play
              alt="animation of woman cooking"
            />
          </LottieContainer>

          <LandingFooter href="#about" aria-label="Go to about section">
            <LandingArrow src={scrollArrow} />
          </LandingFooter>
        </LandingSection>
      </LandingContainer>

      <AboutSection id="about">
        <AboutTitle>Get Started</AboutTitle>
        <AboutContainer>
          <AboutContent>
            <AboutDescription>
              Browse quickly through our recipes and discover dinner ideas with
              ease
            </AboutDescription>
            <AboutIcon src={chefhat} alt="Chefhat icon" />
          </AboutContent>
          <Line />
          <AboutContent>
            <AboutIcon src={calendar} alt="Calendar icon" />
            <AboutDescription>
              Pick and add a recipe for every day of the week
            </AboutDescription>
          </AboutContent>
          <Line />

          <AboutContent>
            <AboutDescription>
              Enjoy discovering new recipes and ingredients
            </AboutDescription>
            <AboutIcon src={shopping} alt="Shopping bag with groceries" />
          </AboutContent>
        </AboutContainer>
        <ButtonContainer>
          <StartButton to="/weekly-overview" backgroundColor="orange">
            Start Planning
          </StartButton>
        </ButtonContainer>
      </AboutSection>
    </>
  );
}

export default Home;
