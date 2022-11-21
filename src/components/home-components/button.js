import React from "react";
import { StartButton } from "./styles";
import { Link } from "react-router-dom";

export default function Button() {
  return (
    <Link to="/weekly-overview">
      <StartButton>Start Planning</StartButton>
    </Link>
  );
}
