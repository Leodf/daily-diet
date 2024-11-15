import React from "react";
import Logo from "@assets/Logo.svg";
import { Avatar, Container } from "./styles";

export default function Header() {
  return (
    <Container>
      <Logo />
      <Avatar source={{ uri: "https://github.com/Leodf.png" }} />
    </Container>
  );
}
