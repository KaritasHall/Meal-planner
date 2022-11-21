import React from "react";
import onion from "../onion.png";
import { Logo } from "./styles";

export default function Header() {
  return (
    <Logo>
      <h1>PEEL</h1>
      <img src={onion} alt="onion logo" />
    </Logo>
  );
}
