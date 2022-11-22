import React from "react";
import EmptyCard from "../components/weekly-components/empty-card";
import { WeekdayTitle } from "../components/weekly-components/styles";

function WeeklyOverview() {
  return (
    <>
      <h1>This is an overview of your week!</h1>

      <WeekdayTitle>Monday</WeekdayTitle>
      <EmptyCard />
      <WeekdayTitle>Tuesday</WeekdayTitle>
      <EmptyCard />
      <WeekdayTitle>Wednesday</WeekdayTitle>
      <EmptyCard />
      <WeekdayTitle>Thursday</WeekdayTitle>
      <EmptyCard />
      <WeekdayTitle>Friday</WeekdayTitle>
      <EmptyCard />
      <WeekdayTitle>Saturday</WeekdayTitle>
      <EmptyCard />
      <WeekdayTitle>Sunday</WeekdayTitle>
      <EmptyCard />
    </>
  );
}

export default WeeklyOverview;
