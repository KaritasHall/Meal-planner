import React from "react";
import WeekdayCard from "../components/weekly-components/weekday-card";
import { WeekdayTitle, WeeklyOverviewPageHeadline } from "../components/weekly-components/styles";

function WeeklyOverview() {
  return (
    <>
      <WeeklyOverviewPageHeadline>Weekly overview</WeeklyOverviewPageHeadline>

      <WeekdayTitle>Monday</WeekdayTitle>
      <WeekdayCard weekday="monday" />
      <WeekdayTitle>Tuesday</WeekdayTitle>
      <WeekdayCard weekday="tuesday" />
      <WeekdayTitle>Wednesday</WeekdayTitle>
      <WeekdayCard weekday="wednesday" />
      <WeekdayTitle>Thursday</WeekdayTitle>
      <WeekdayCard weekday="thursday" />
      <WeekdayTitle>Friday</WeekdayTitle>
      <WeekdayCard weekday="friday" />
      <WeekdayTitle>Saturday</WeekdayTitle>
      <WeekdayCard weekday="saturday" />
      <WeekdayTitle>Sunday</WeekdayTitle>
      <WeekdayCard weekday="sunday" />
    </>
  );
}

export default WeeklyOverview;