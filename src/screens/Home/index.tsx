import React from "react";
import { Container } from "./styles";
import Header from "@components/Header";
import StatisticCard from "@components/StatisticsCard";

export default function Home() {
  return (
    <Container>
      <Header />
      <StatisticCard />
    </Container>
  );
}
