import React from "react";
import EmptyCard from "../components/weekly-components/empty-card";
import { WeekdayTitle } from "../components/weekly-components/styles";

function WeeklyOverview() {
  return (
    <>
      <h1>This is an overview of your week!</h1>

      <WeekdayTitle>Monday</WeekdayTitle>
      <EmptyCard weekday="monday" />
      <WeekdayTitle>Tuesday</WeekdayTitle>
      <EmptyCard weekday="tuesday" />
      <WeekdayTitle>Wednesday</WeekdayTitle>
      <EmptyCard weekday="wednesday" />
      <WeekdayTitle>Thursday</WeekdayTitle>
      <EmptyCard weekday="thursday" />
      <WeekdayTitle>Friday</WeekdayTitle>
      <EmptyCard weekday="friday" />
      <WeekdayTitle>Saturday</WeekdayTitle>
      <EmptyCard weekday="saturday" />
      <WeekdayTitle>Sunday</WeekdayTitle>
      <EmptyCard weekday="sunday" />
    </>
  );
}

export default WeeklyOverview;
