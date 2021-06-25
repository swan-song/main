import React from "react";
import {
  Container,
  Header,
  SubHeader,
  Info,
} from "./styled-components/styled-components";

export default function Error() {
  return (
    <div>
      <Header>404</Header>
      <SubHeader>You made a wrong turn!</SubHeader>
      <Info>Page Not Found</Info>
      <Container home>
        <Container banner error></Container>
      </Container>
    </div>
  );
}
