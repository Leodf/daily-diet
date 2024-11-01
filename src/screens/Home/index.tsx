import React from "react";
import { Container, Title } from "./styles";
import { User } from "phosphor-react-native";

export default function Home() {
  return (
    <Container>
      <User size={64} />
      <Title>Daily Diet</Title>
    </Container>
  );
}
