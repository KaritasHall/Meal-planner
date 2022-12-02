import React from "react";
import { HeaderContainer } from "./styles";
import logo from "./LandingLogo.svg";

export default function Header() {
  return (
    <>
      <HeaderContainer
        className="with-gutter"
        src={logo}
        alt="Logo that reads Peel"
      />
    </>
  );
}
