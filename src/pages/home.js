import React from "react";
import Header from "../components/header/header";
import chefhat from "../components/home-components/icons/chefhat.svg";
import calendar from "../components/home-components/icons/calendar.svg";
import shopping from "../components/home-components/icons/shopping.svg";
import lottieJson from "../components/home-components/icons/lottie-anim.json";

import {
  FoodAnimation,
  LandingTitle,
  LandingSubtitle,
  LandingParagraph,
  LandingSection,
  AboutSection,
  AboutTitle,
  AboutContainer,
  AboutContent1,
  AboutContent2,
  AboutContent3,
  AboutDescription,
  LottieContainer,
  StartButton,
} from "../components/home-components/styles";

function Home() {
  return (
    <>
      <LandingSection>
        <Header />
        <LandingTitle>Meal planning</LandingTitle>
        <LandingSubtitle>made easy</LandingSubtitle>
        <LandingParagraph>
          Plan your whole week with just a few clicks!
        </LandingParagraph>
        <StartButton to="/weekly-overview">Start Planning</StartButton>
      </LandingSection>
      <LottieContainer>
        <FoodAnimation loop animationData={lottieJson} play />
      </LottieContainer>
      <AboutSection>
        <AboutTitle>Get Started</AboutTitle>
        <AboutContainer>
          <AboutContent1>
            <AboutDescription>
              Browse quickly through our recipes and discover dinner ideas with
              ease
            </AboutDescription>
            <img src={chefhat} />
          </AboutContent1>
          <AboutContent2>
            <img src={calendar} />
            <AboutDescription>
              Pick and add a recipe for every day of the week
            </AboutDescription>
          </AboutContent2>
          <AboutContent3>
            <AboutDescription>
              Grab your ready-made shopping list and go shopping!
            </AboutDescription>
            <img src={shopping} />
          </AboutContent3>
        </AboutContainer>
        <StartButton to="/weekly-overview" backgroundColor="orange">
          Start Planning
        </StartButton>
      </AboutSection>
    </>
  );
}

export default Home;
