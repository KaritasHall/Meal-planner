import React from "react";
import WeekdayCard from "../components/weekly-components/weekday-card";
import { WeeklyOverviewPageHeader, WeekdayTitleContainer, WeekdayTitle, WeeklyOverviewPageHeadline } from "../components/weekly-components/styles";
import "../components/weekly-components/styles.css"

function WeeklyOverview() {
  return (
    <>
      <WeeklyOverviewPageHeader id="overview-header">
      <WeeklyOverviewPageHeadline id="overview-headline">Weekly overview</WeeklyOverviewPageHeadline>
      </WeeklyOverviewPageHeader>

      <div id="container">
        <div>
      <WeekdayTitleContainer><WeekdayTitle>Monday</WeekdayTitle></WeekdayTitleContainer>
      <WeekdayCard weekday="monday" />
        </div>
        <div>
      <WeekdayTitleContainer><WeekdayTitle>Tuesday</WeekdayTitle></WeekdayTitleContainer>
      <WeekdayCard weekday="tuesday" />
        </div>
        <div>
      <WeekdayTitleContainer><WeekdayTitle>Wednesday</WeekdayTitle></WeekdayTitleContainer>
      <WeekdayCard weekday="wednesday" />
        </div>
        <div>
      <WeekdayTitleContainer><WeekdayTitle>Thursday</WeekdayTitle></WeekdayTitleContainer>
      <WeekdayCard weekday="thursday" />
       </div>
       <div>
      <WeekdayTitleContainer><WeekdayTitle>Friday</WeekdayTitle></WeekdayTitleContainer>
      <WeekdayCard weekday="friday" />
        </div>
        <div>
      <WeekdayTitleContainer><WeekdayTitle>Saturday</WeekdayTitle></WeekdayTitleContainer>
      <WeekdayCard weekday="saturday" />
       </div>
       <div>
      <WeekdayTitleContainer><WeekdayTitle>Sunday</WeekdayTitle></WeekdayTitleContainer>
      <WeekdayCard weekday="sunday" />
       </div>
      </div>
    </>
  );
}

export default WeeklyOverview;