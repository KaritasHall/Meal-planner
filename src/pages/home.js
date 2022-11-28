import React from "react";
import Button from "../components/home-components/button";
import Header from "../components/header/header";
import {
  LandingTitle,
  LandingSubtitle,
  LandingParagraph,
  LandingSection,
  AboutSection,
  AboutTitle,
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
        <Button />
      </LandingSection>
      <AboutSection>
        <AboutTitle>Get Started</AboutTitle>
      </AboutSection>
    </>
  );
}

export default Home;
