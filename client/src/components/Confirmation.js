import React from "react";
import { Image, Container } from "./styled-components/styled-components";
import background from "../assets/background.gif";

export default function Confirmation() {
  return (
    <div>
      {/* <div className="confirmationContainer"></div> */}
      <Container>
        <Image src={background} />
      </Container>
    </div>
  );
}
