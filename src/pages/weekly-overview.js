import React from "react";
import WeekdayCard from "../components/weekly-components/weekday-card";
import { Header } from "../components/header";
import {
  WeekdayTitleContainer,
  WeekdayTitle,
} from "../components/weekly-components/styles";
import "../components/weekly-components/styles.css";
import { AnimationWrapper, bounceAnimation } from "../components/animations";

function WeeklyOverview() {
  return (
    <>
      <Header title={"Weekly overview"} />

      <div id="container">
        <AnimationWrapper {...bounceAnimation}>
          <WeekdayTitleContainer>
            <WeekdayTitle>Monday</WeekdayTitle>
          </WeekdayTitleContainer>
          <WeekdayCard weekday="monday" />
        </AnimationWrapper>

        <AnimationWrapper {...bounceAnimation}>
          <WeekdayTitleContainer>
            <WeekdayTitle>Tuesday</WeekdayTitle>
          </WeekdayTitleContainer>
          <WeekdayCard weekday="tuesday" />
        </AnimationWrapper>

        <AnimationWrapper {...bounceAnimation}>
          <WeekdayTitleContainer>
            <WeekdayTitle>Wednesday</WeekdayTitle>
          </WeekdayTitleContainer>
          <WeekdayCard weekday="wednesday" />
        </AnimationWrapper>

        <AnimationWrapper {...bounceAnimation}>
          <WeekdayTitleContainer>
            <WeekdayTitle>Thursday</WeekdayTitle>
          </WeekdayTitleContainer>
          <WeekdayCard weekday="thursday" />
        </AnimationWrapper>

        <AnimationWrapper {...bounceAnimation}>
          <WeekdayTitleContainer>
            <WeekdayTitle>Friday</WeekdayTitle>
          </WeekdayTitleContainer>
          <WeekdayCard weekday="friday" />
        </AnimationWrapper>

        <AnimationWrapper {...bounceAnimation}>
          <WeekdayTitleContainer>
            <WeekdayTitle>Saturday</WeekdayTitle>
          </WeekdayTitleContainer>
          <WeekdayCard weekday="saturday" />
        </AnimationWrapper>

        <AnimationWrapper {...bounceAnimation}>
          <WeekdayTitleContainer>
            <WeekdayTitle>Sunday</WeekdayTitle>
          </WeekdayTitleContainer>
          <WeekdayCard weekday="sunday" />
        </AnimationWrapper>
      </div>
    </>
  );
}

export default WeeklyOverview;
