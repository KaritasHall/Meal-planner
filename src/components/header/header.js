import React from "react";
import onion from "../onion.png";
import { Logo, Image, Heading } from "./styles";

export default function Header() {
  return (
    <Logo>
      <Heading>PEEL</Heading>
      <Image src={onion} alt="onion logo" />
    </Logo>
  );
}
