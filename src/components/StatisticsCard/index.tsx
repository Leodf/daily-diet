import React from "react";
import { Container, Icon, IconContainer, SubTitle, Title } from "./styles";

export default function Card() {
  return (
    <Container>
      <IconContainer>
        <Icon type="PRIMARY" />
      </IconContainer>
      <Title>90,86%</Title>
      <SubTitle>das refeições dentro da dieta</SubTitle>
    </Container>
  );
}
